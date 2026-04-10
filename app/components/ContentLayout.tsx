import { AppleLogo } from "~/components/home/icons";
import { APP_STORE_URL, SITE_NAME } from "~/config/site";

type FooterLink = {
  label: string;
  href: string;
};

export function ContentLayout({
  children,
  footerLinks,
}: {
  children: React.ReactNode;
  footerLinks: [FooterLink, FooterLink];
}) {
  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 inset-x-0 z-40 border-b border-border-subtle bg-surface/78 backdrop-blur-2xl">
        <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center shrink-0">
            <img
              src="/logo-light.svg"
              alt={SITE_NAME}
              width="150"
              height="24"
              className="h-6 w-auto"
            />
          </a>
          <a
            href={APP_STORE_URL}
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-medium text-white/[0.88] transition-all hover:border-white/20 hover:bg-white/10"
          >
            <AppleLogo className="opacity-80" />
            Download
          </a>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6">
        {children}
      </main>

      <footer className="border-t border-border-subtle py-10 px-6">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <a
            href={footerLinks[0].href}
            className="text-sm text-white/55 hover:text-white/90 transition-colors"
          >
            {footerLinks[0].label}
          </a>
          <a
            href={footerLinks[1].href}
            className="text-sm text-white/55 hover:text-white/90 transition-colors"
          >
            {footerLinks[1].label}
          </a>
        </div>
      </footer>
    </div>
  );
}
