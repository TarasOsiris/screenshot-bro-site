# Community playbook

The honest version of "200 Reddit mentions".

Cal.com's community footprint works because the mentions are real: people
answering questions, in threads that already existed, from accounts with history.
That is reproducible. What is not reproducible — and would actively destroy the
thing we are building — is manufactured mentions.

## Rules

1. **Always disclose.** "I make Screenshot Bro, so take this with salt" in the
   first line, every time. No exceptions, including in DMs.
2. **One account, your real one.** No alts, no asking friends to upvote, no
   agencies. Reddit bans for vote manipulation take the domain down with them.
3. **Answer the question first.** If the honest answer is a competitor, say the
   competitor. Being the person who recommends AppMockUp for a free one-off is
   what makes the recommendation credible the next time.
4. **No link unless it helps.** A link that answers the question is useful; a
   link appended to a generic comment is spam and reads as spam.
5. **Don't post in threads older than ~6 months** unless the question is still
   open and unanswered.
6. **Never argue with a negative comment.** Answer it once, factually, and stop.

## Where

| Place | What gets asked | Cadence |
|---|---|---|
| r/iOSProgramming | "How do you make App Store screenshots?", "screenshot tool recommendations", pre-launch checklists | Check weekly |
| r/iosdev, r/SwiftUI | Tooling and launch questions | Weekly |
| r/androiddev | Play listing assets, feature graphic | Biweekly |
| r/indiehackers, Indie Hackers forum | Launch prep, ASO, "what tools do you use" | Weekly |
| Hacker News | Show HN once; otherwise only comment where genuinely relevant | Rare |
| iOS Dev Slack / Discord communities | Direct tool questions | Ongoing |
| Stack Overflow | Fastlane snapshot / frameit / App Store Connect upload questions — answer the technical question, mention the tool only if it is the actual answer | As they appear |
| r/ScreenshotBro | Our own community: changelog posts, questions, roadmap | Every release |

## The recurring questions (and the honest answer)

**"What's the best tool for App Store screenshots?"**
> I make Screenshot Bro, so discount accordingly. Honest answer depends on your
> setup: if you're on Windows, use a browser tool (AppLaunchpad has the biggest
> template library, AppMockUp Studio is free with no signup). If you want it
> free and scripted, Fastlane snapshot + frameit. If you're on a Mac and doing
> this every release across sizes and languages, that's what Screenshot Bro is
> for — free tier exports without a watermark so you can judge it yourself.

**"Do screenshots actually matter for conversion?"**
> Yes, and the first two are most of it — they're what shows in search results
> before anyone taps through. Link to `/blog/screenshots-that-convert` and
> `/blog/app-store-screenshot-order`. No product pitch needed here.

**"My screenshots got rejected"**
> Diagnose from the rejection text. We have `/blog/app-store-screenshots-rejected-fix`
> and `/blog/google-play-screenshot-rejected-fix`. Answer the specific case in
> the comment; the link is supporting material, not the reply.

**"How do I handle 10 languages?"**
> Explain the actual workflow: keep copy short enough to survive German and
> Japanese, keep layout shared, override only what breaks. Link
> `/blog/localize-screenshots-japan-china-germany`. Mention the tool only if
> they ask what you use.

**"Is X worth paying for?"** (competitor named)
> Answer about the competitor honestly. If we have a comparison page, link it and
> say it's ours.

## What we post ourselves

- **Release notes** in r/ScreenshotBro, tied to `/changelog`.
- **Build-in-public posts** on X/Threads: one concrete thing, a screenshot, no
  growth-hacking tone.
- **Show HN** once, when there is a genuinely interesting angle — the plain-JSON
  project format is the strongest one we have.
- **Answers, not announcements.** The ratio should be roughly 10 helpful
  comments to 1 self-post.

## What we never do

- Fake accounts, purchased upvotes, review swaps, or "can you upvote this" asks.
- Comments that pretend to be a happy user.
- Copy-pasting the same reply into many threads.
- Editing a comparison page to be less fair after a competitor complains — fix it
  if they're right, leave it if they're not.

## Tracking

Record every mention that lands (thread URL, date, whether it drove traffic) at
the bottom of [ai-visibility-log.md](./ai-visibility-log.md). Community mentions
are the slowest-moving input in the program and the one most likely to be
abandoned — the log is how we notice.
