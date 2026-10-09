// Google Analytics 4 with Consent Mode v2.
//
// Visitors in the EEA, the UK and Switzerland start with every storage type
// denied: the tag sets no cookies until they click Accept on the banner
// (components/ConsentBanner). Everywhere else the default is granted, and the
// same banner — reopened from "Cookie settings" in the footer — lets anyone
// opt out. The choice is kept in localStorage and re-applied before the tag
// configures itself on every page load.

export const GA_ID =
  import.meta.env.PROD && import.meta.env.VITE_GA_ID
    ? (import.meta.env.VITE_GA_ID as string)
    : undefined;

export const CONSENT_STORAGE_KEY = "consent";
export const OPEN_CONSENT_EVENT = "sb:open-consent";

export type ConsentChoice = "granted" | "denied";

// EU member states plus Iceland, Liechtenstein and Norway (EEA), the UK and
// Switzerland, as ISO 3166-1 alpha-2 codes for gtag's `region`.
const CONSENT_REQUIRED_REGIONS = [
  "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU",
  "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES",
  "SE", "IS", "LI", "NO", "GB", "CH",
];

const STORAGE_TYPES = [
  "analytics_storage",
  "ad_storage",
  "ad_user_data",
  "ad_personalization",
] as const;

function consentState(value: ConsentChoice): Record<string, ConsentChoice> {
  return Object.fromEntries(STORAGE_TYPES.map((type) => [type, value]));
}

// Runs inline in <head> before gtag('config'): defaults first, then any choice
// already stored on this device.
export function gtagBootstrapScript(gaId: string): string {
  const denied = JSON.stringify({
    ...consentState("denied"),
    region: CONSENT_REQUIRED_REGIONS,
    wait_for_update: 500,
  });
  const granted = JSON.stringify(consentState("granted"));
  return [
    "window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}",
    `gtag('consent','default',${denied});`,
    `gtag('consent','default',${granted});`,
    `try{var c=localStorage.getItem(${JSON.stringify(CONSENT_STORAGE_KEY)});if(c==='granted'||c==='denied'){var u={};${JSON.stringify(STORAGE_TYPES)}.forEach(function(k){u[k]=c});gtag('consent','update',u);}}catch(e){}`,
    "gtag('js',new Date());",
    `gtag('config',${JSON.stringify(gaId)},{anonymize_ip:true});`,
  ].join("");
}

export function readConsent(): ConsentChoice | null {
  try {
    const value = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    return value === "granted" || value === "denied" ? value : null;
  } catch {
    return null;
  }
}

export function saveConsent(choice: ConsentChoice) {
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, choice);
  } catch {
    // Storage blocked: the choice still applies for this page view.
  }
  window.gtag?.("consent", "update", consentState(choice));
}

// The banner is shown unprompted only where consent is required by default.
// The time zone is a privacy-friendly stand-in for location (no lookup, no
// request); gtag's own region check still decides the actual default.
export function isConsentRegion(): boolean {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone.startsWith("Europe/");
  } catch {
    return false;
  }
}

export function openConsentSettings() {
  window.dispatchEvent(new Event(OPEN_CONSENT_EVENT));
}
