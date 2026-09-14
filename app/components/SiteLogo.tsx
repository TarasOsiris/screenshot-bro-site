import { SITE_NAME } from "~/config/site";

// The asset names run the opposite way to the themes they serve: logo-light.svg
// is the all-white wordmark and only reads on the dark theme, logo-dark.svg is the
// black-and-blue one for light. Both ship in the markup and CSS hides one, so the
// swap costs no JS and cannot flash the wrong logo before hydration.
export function SiteLogo({ className = "h-6 w-auto" }: { className?: string }) {
  return (
    <>
      <img
        src="/logo-dark.svg"
        alt={SITE_NAME}
        width="150"
        height="24"
        className={`theme-light-only ${className}`}
      />
      <img
        src="/logo-light.svg"
        alt={SITE_NAME}
        width="150"
        height="24"
        className={`theme-dark-only ${className}`}
      />
    </>
  );
}
