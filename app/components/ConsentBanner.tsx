import { useEffect, useRef, useState } from "react";

import { Button } from "~/components/ui/Button";
import { useHomeCopy } from "~/config/home-copy";
import {
  GA_ID,
  isConsentRegion,
  OPEN_CONSENT_EVENT,
  readConsent,
  saveConsent,
  type ConsentChoice,
} from "~/lib/consent";

// Client-only: nothing renders on the server or during hydration, so the
// markup never depends on the visitor's time zone or stored choice. Shows by
// itself only in a consent region with no stored choice; "Cookie settings" in
// the footer reopens it anywhere. Non-modal — it never traps focus — but when
// opened on request it moves focus to its first button.
export function ConsentBanner() {
  const copy = useHomeCopy();
  const [open, setOpen] = useState(false);
  const [requested, setRequested] = useState(false);
  const acceptRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!GA_ID) return;
    if (readConsent() === null && isConsentRegion()) setOpen(true);
    const onOpen = () => {
      setRequested(true);
      setOpen(true);
    };
    window.addEventListener(OPEN_CONSENT_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, onOpen);
  }, []);

  useEffect(() => {
    if (open && requested) acceptRef.current?.focus();
  }, [open, requested]);

  if (!open) return null;

  const choose = (choice: ConsentChoice) => {
    saveConsent(choice);
    setOpen(false);
    setRequested(false);
  };

  return (
    <section
      aria-label={copy.ui.consentLabel}
      className="fixed inset-x-0 bottom-0 z-50 p-4 sm:p-6 pointer-events-none"
      onKeyDown={(event) => {
        // Escape closes a reopened banner without changing the stored choice.
        if (event.key === "Escape" && readConsent() !== null) setOpen(false);
      }}
    >
      <div className="soft-panel pointer-events-auto mx-auto max-w-3xl rounded-3xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-4 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.35)]">
        <p className="flex-1 text-sm text-ink/75 leading-relaxed">
          {copy.ui.consentMessage}{" "}
          <a
            href="/privacy#website"
            className="text-ink underline underline-offset-4 decoration-ink/30 hover:decoration-ink/70"
          >
            {copy.ui.consentPrivacy}
          </a>
        </p>
        <div className="flex gap-3 shrink-0">
          {/* Same weight for both answers: rejecting is as easy as accepting. */}
          <Button ref={acceptRef} variant="secondary" size="sm" onClick={() => choose("granted")}>
            {copy.ui.consentAccept}
          </Button>
          <Button variant="secondary" size="sm" onClick={() => choose("denied")}>
            {copy.ui.consentReject}
          </Button>
        </div>
      </div>
    </section>
  );
}
