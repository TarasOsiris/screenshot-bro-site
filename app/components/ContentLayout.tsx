import { SiteFooter } from "~/components/home/SiteFooter";
import { SiteNav } from "~/components/home/SiteNav";

export function ContentLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav showSectionAnchors={false} showLocaleSwitcher={false} />

      <main className="flex-1 pt-32 pb-20 px-6">{children}</main>

      <SiteFooter />
    </div>
  );
}
