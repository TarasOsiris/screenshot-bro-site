import { redirect } from "react-router";

// The app's "Buy Pro" button lands here, so the RevenueCat Web Purchase Link can change
// without an app release. Set WEB_CHECKOUT_URL in Coolify.
export function loader() {
  const checkoutUrl = process.env.WEB_CHECKOUT_URL;
  return redirect(checkoutUrl || "/download", 302);
}
