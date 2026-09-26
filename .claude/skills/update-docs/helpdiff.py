#!/usr/bin/env python3
"""Diff the site's /docs/help text against the app's in-app Help at a git ref.

Usage (from the site repo root):
    python3 .claude/skills/update-docs/helpdiff.py v4.16-138            # every section
    python3 .claude/skills/update-docs/helpdiff.py v4.16-138 rows shapes

`-` lines are the site, `+` lines are the app. Shortcuts are tables on the site and
are not diffed here — compare them with ShortcutsContent.swift by eye.
"""
import difflib
import os
import re
import subprocess
import sys
from pathlib import Path


def find_app_repo():
    """The app checkout: $SCREENSHOT_MAC_REPO, else a sibling of the site repo."""
    candidates = []
    if os.environ.get("SCREENSHOT_MAC_REPO"):
        candidates.append(Path(os.environ["SCREENSHOT_MAC_REPO"]))
    candidates.append(Path(__file__).resolve().parents[3].parent / "screenshot-mac")
    for c in candidates:
        if (c / ".git").exists():
            return str(c)
    sys.exit(f"No screenshot-mac checkout at {candidates[-1]}; set SCREENSHOT_MAC_REPO.")


APP_REPO = find_app_repo()
APP_HELP = "screenshot/Code/Views/Help/HelpSection+Content.swift"
SITE_HELP = "app/routes/docs.help.tsx"
SWIFT_TO_SITE_ID = {
    "appStoreConnect": "app-store-connect",
    "googlePlay": "google-play",
    "iCloud": "icloud",
    "proFeatures": "pro-features",
}
KIND = {"heading": "H", "paragraph": "P", "bullet": "LI", "tip": "TIP",
        "h": "H", "p": "P", "li": "LI", "oli": "LI"}


def unescape(s):
    return s.replace('\\"', '"')


def app_sections(ref):
    src = subprocess.run(["git", "-C", APP_REPO, "show", f"{ref}:{APP_HELP}"],
                         check=True, capture_output=True, text=True).stdout
    out = {}
    for m in re.finditer(r'private var (\w+)Entry: HelpEntry \{(.*?)\n    \}\n', src, re.S):
        body = m.group(2)
        items = []
        sub = re.search(r'subtitle: "((?:[^"\\]|\\.)*)"', body)
        if sub:
            items.append("SUB: " + unescape(sub.group(1)))
        for b in re.finditer(r'\.(heading|paragraph|bullet|tip)\("((?:[^"\\]|\\.)*)"\)', body):
            text = re.sub(r'^\d+\. ', '', unescape(b.group(2)))
            items.append(f"{KIND[b.group(1)]}: {text}")
        out[SWIFT_TO_SITE_ID.get(m.group(1), m.group(1))] = items
    return out


def site_sections():
    src = open(SITE_HELP).read()
    out = {}
    for m in re.finditer(r'\n  \{\n    id: "([\w-]+)",(.*?)\n  \},', src, re.S):
        body = m.group(2)
        items = []
        sub = re.search(r'subtitle: "((?:[^"\\]|\\.)*)"', body)
        if sub:
            items.append("SUB: " + unescape(sub.group(1)))
        for b in re.finditer(r'\{ kind: "(h|p|li|oli|tip)", text: (?:"((?:[^"\\]|\\.)*)"|`((?:[^`\\]|\\.)*)`) \}', body):
            items.append(f"{KIND[b.group(1)]}: {unescape(b.group(2) or b.group(3))}")
        out[m.group(1)] = items
    return out


def main():
    if len(sys.argv) < 2:
        sys.exit(__doc__)
    ref, only = sys.argv[1], set(sys.argv[2:])
    app, site = app_sections(ref), site_sections()
    for sid, items in site.items():
        if only and sid not in only:
            continue
        if sid not in app:
            print(f"\n######## {sid}: no app section (compare by hand)")
            continue
        diff = [l for l in difflib.unified_diff(items, app[sid], lineterm="", n=0)
                if not l.startswith(("---", "+++", "@@"))]
        if diff:
            print(f"\n######## {sid}")
            print("\n".join(diff))
    for sid in app.keys() - site.keys():
        print(f"\n######## {sid}: app section missing from the site")


if __name__ == "__main__":
    main()
