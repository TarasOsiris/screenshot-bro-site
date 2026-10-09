import { SiteFooter } from "~/components/home/SiteFooter";
import { SiteNav } from "~/components/home/SiteNav";
import { useHomeCopy } from "~/config/home-copy";
import type { LocaleCode } from "~/config/localization";

export function ContentLayout({
  children,
}: {
  children: React.ReactNode;
  // The nav and footer copy follows the URL's locale (root loader data); the
  // prop stays so pages can keep passing the locale they render in.
  locale?: LocaleCode;
}) {
  const copy = useHomeCopy();

  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav showSectionAnchors={false} showLocaleSwitcher={true} copy={copy} />

      <main className="flex-1 pt-32 pb-20 px-6">{children}</main>

      <SiteFooter copy={copy} />
    </div>
  );
}
