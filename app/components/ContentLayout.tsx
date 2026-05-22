import { SiteFooter } from "~/components/home/SiteFooter";
import { SiteNav } from "~/components/home/SiteNav";
import { getHomeCopy, type LocaleCode } from "~/config/localization";

export function ContentLayout({
  children,
  locale = "en",
}: {
  children: React.ReactNode;
  locale?: LocaleCode;
}) {
  const copy = getHomeCopy(locale);

  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav showSectionAnchors={false} showLocaleSwitcher={true} copy={copy} />

      <main className="flex-1 pt-32 pb-20 px-6">{children}</main>

      <SiteFooter copy={copy} />
    </div>
  );
}
