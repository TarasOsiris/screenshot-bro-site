import type { ReactElement } from "react";
import type { FeatureIconKey } from "~/config/site";

type IconProps = { size?: number };

const SVG_BASE = {
  "aria-hidden": true as const,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.5",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconTemplates({ size = 32 }: IconProps = {}) {
  return (
    <svg {...SVG_BASE} width={size} height={size}>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}

export function IconDevice({ size = 32 }: IconProps = {}) {
  return (
    <svg {...SVG_BASE} width={size} height={size}>
      <rect x="5" y="2" width="14" height="20" rx="3" />
      <line x1="12" y1="18" x2="12" y2="18.01" />
    </svg>
  );
}

export function IconGradient({ size = 32 }: IconProps = {}) {
  return (
    <svg {...SVG_BASE} width={size} height={size}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3a9 9 0 0 1 0 18" fill="currentColor" opacity="0.2" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}

export function IconShapes({ size = 32 }: IconProps = {}) {
  return (
    <svg {...SVG_BASE} width={size} height={size}>
      <polygon points="12,2 22,17 2,17" />
      <circle cx="17" cy="17" r="5" fill="var(--color-surface)" />
      <circle cx="17" cy="17" r="5" />
    </svg>
  );
}

function IconAlign({ size = 32 }: IconProps = {}) {
  return (
    <svg {...SVG_BASE} width={size} height={size}>
      <line x1="12" y1="2" x2="12" y2="22" />
      <rect x="4" y="6" width="16" height="4" rx="1" />
      <rect x="6" y="14" width="12" height="4" rx="1" />
    </svg>
  );
}

export function IconExport({ size = 32 }: IconProps = {}) {
  return (
    <svg {...SVG_BASE} width={size} height={size}>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7,10 12,15 17,10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

export function IconUpload({ size = 32 }: IconProps = {}) {
  return (
    <svg {...SVG_BASE} width={size} height={size}>
      <path d="M4 16v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3" />
      <polyline points="8 8 12 4 16 8" />
      <line x1="12" y1="4" x2="12" y2="16" />
    </svg>
  );
}

export function IconProject({ size = 32 }: IconProps = {}) {
  return (
    <svg {...SVG_BASE} width={size} height={size}>
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function IconNative({ size = 32 }: IconProps = {}) {
  return (
    <svg {...SVG_BASE} width={size} height={size}>
      <path d="M4 4h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
      <line x1="8" y1="20" x2="16" y2="20" />
      <line x1="12" y1="18" x2="12" y2="20" />
    </svg>
  );
}

type AppleLogoProps = {
  className?: string;
};

export function AppleLogo({ className }: AppleLogoProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      width="16"
      height="16"
      viewBox="0 0 814 1000"
      fill="currentColor"
    >
      <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57.8-155.5-127.4c-58.3-81.5-105.3-208-105.3-328.5 0-193 125.5-295.3 248.9-295.3 65.6 0 120.3 43.1 161.4 43.1 39.1 0 100.1-45.7 174.4-45.7 28.2 0 129.4 2.7 196.1 100.8zM554.1 159.4c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.8 32.4-54.5 83.6-54.5 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 134.9-71.3z" />
    </svg>
  );
}

export function IconCloud({ size = 32 }: IconProps = {}) {
  return (
    <svg {...SVG_BASE} width={size} height={size}>
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  );
}

function IconFonts({ size = 32 }: IconProps = {}) {
  return (
    <svg {...SVG_BASE} width={size} height={size}>
      <polyline points="4,7 4,4 20,4 20,7" />
      <line x1="9.5" y1="20" x2="14.5" y2="20" />
      <line x1="12" y1="4" x2="12" y2="20" />
    </svg>
  );
}

function IconStarter({ size = 32 }: IconProps = {}) {
  return (
    <svg {...SVG_BASE} width={size} height={size}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18" />
      <path d="M9 21V9" />
    </svg>
  );
}

export function IconKeyboard({ size = 32 }: IconProps = {}) {
  return (
    <svg {...SVG_BASE} width={size} height={size}>
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <line x1="6" y1="10" x2="6" y2="10.01" />
      <line x1="10" y1="10" x2="10" y2="10.01" />
      <line x1="14" y1="10" x2="14" y2="10.01" />
      <line x1="18" y1="10" x2="18" y2="10.01" />
      <line x1="8" y1="14" x2="16" y2="14" />
    </svg>
  );
}

const ICONS: Record<FeatureIconKey, ReactElement> = {
  templates: <IconTemplates />,
  device: <IconDevice />,
  gradient: <IconGradient />,
  shapes: <IconShapes />,
  align: <IconAlign />,
  export: <IconExport />,
  upload: <IconUpload />,
  project: <IconProject />,
  native: <IconNative />,
  cloud: <IconCloud />,
  fonts: <IconFonts />,
  starter: <IconStarter />,
  keyboard: <IconKeyboard />,
};

export function FeatureIcon({ icon }: { icon: FeatureIconKey }) {
  return ICONS[icon];
}

export function XGlyph() {
  return (
    <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function ThreadsGlyph() {
  return (
    <svg aria-hidden="true" width="15" height="15" viewBox="0 0 192 192" fill="currentColor">
      <path d="M141.537 88.988a66.667 66.667 0 0 0-2.518-1.143c-1.482-27.307-16.403-42.94-41.457-43.1h-.34c-14.986 0-27.449 6.396-35.12 18.036l13.779 9.452c5.73-8.695 14.724-10.548 21.348-10.548h.229c8.249.053 14.474 2.452 18.503 7.129 2.932 3.405 4.893 8.111 5.864 14.05-7.314-1.243-15.224-1.626-23.68-1.14-23.82 1.371-39.134 15.264-38.105 34.568.522 9.792 5.4 18.216 13.735 23.719 7.047 4.652 16.124 6.927 25.557 6.412 12.458-.683 22.231-5.436 29.049-14.127 5.178-6.6 8.453-15.153 9.899-25.93 5.937 3.583 10.337 8.298 12.767 13.966 4.132 9.635 4.373 25.468-8.546 38.376-11.319 11.308-24.925 16.2-45.488 16.351-22.809-.169-40.06-7.484-51.275-21.742C35.236 139.966 29.808 120.682 29.605 96c.203-24.682 5.63-43.966 16.133-57.317C56.954 24.425 74.204 17.11 97.013 16.94c22.975.17 40.526 7.52 52.171 21.847 5.71 7.026 10.015 15.86 12.853 26.162l16.147-4.308c-3.44-12.68-8.853-23.606-16.219-32.668C147.036 9.607 125.202.195 97.07 0h-.113C68.882.194 47.292 9.642 32.788 28.08 19.882 44.485 13.224 67.315 13.001 95.932L13 96v.067c.224 28.617 6.882 51.447 19.788 67.854C47.292 182.358 68.882 191.806 96.957 192h.113c24.96-.173 42.554-6.708 57.048-21.189 18.963-18.945 18.392-42.692 12.142-57.27-4.484-10.454-13.033-18.945-24.723-24.553ZM98.44 129.507c-10.44.588-21.286-4.098-21.82-14.135-.397-7.442 5.296-15.746 22.461-16.735 1.966-.114 3.895-.169 5.79-.169 6.235 0 12.068.606 17.371 1.765-1.978 24.702-13.58 28.713-23.802 29.274Z" />
    </svg>
  );
}

export function RedditGlyph() {
  return (
    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 216 216">
      <defs>
        <radialGradient id="reddit-snoo-rg-1" cx="169.75" cy="92.19" r="50.98" fx="169.75" fy="92.19" gradientTransform="matrix(1 0 0 .87 0 11.64)" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#feffff" />
          <stop offset=".4" stopColor="#feffff" />
          <stop offset=".51" stopColor="#f9fcfc" />
          <stop offset=".62" stopColor="#edf3f5" />
          <stop offset=".7" stopColor="#dee9ec" />
          <stop offset=".72" stopColor="#d8e4e8" />
          <stop offset=".76" stopColor="#ccd8df" />
          <stop offset=".8" stopColor="#c8d5dd" />
          <stop offset=".83" stopColor="#ccd6de" />
          <stop offset=".85" stopColor="#d8dbe2" />
          <stop offset=".88" stopColor="#ede3e9" />
          <stop offset=".9" stopColor="#ffebef" />
        </radialGradient>
        <radialGradient href="#reddit-snoo-rg-1" id="reddit-snoo-rg-2" cx="47.31" r="50.98" fx="47.31" />
        <radialGradient href="#reddit-snoo-rg-1" id="reddit-snoo-rg-3" cx="109.61" cy="85.59" r="153.78" fx="109.61" fy="85.59" gradientTransform="matrix(1 0 0 .7 0 25.56)" />
        <radialGradient id="reddit-snoo-rg-4" cx="-6.01" cy="64.68" r="12.85" fx="-6.01" fy="64.68" gradientTransform="matrix(1.07 0 0 1.55 81.08 27.26)" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#f60" />
          <stop offset=".5" stopColor="#ff4500" />
          <stop offset=".7" stopColor="#fc4301" />
          <stop offset=".82" stopColor="#f43f07" />
          <stop offset=".92" stopColor="#e53812" />
          <stop offset="1" stopColor="#d4301f" />
        </radialGradient>
        <radialGradient href="#reddit-snoo-rg-4" id="reddit-snoo-rg-5" cx="-73.55" cy="64.68" r="12.85" fx="-73.55" fy="64.68" gradientTransform="matrix(-1.07 0 0 1.55 62.87 27.26)" />
        <radialGradient id="reddit-snoo-rg-6" cx="107.93" cy="166.96" r="45.3" fx="107.93" fy="166.96" gradientTransform="matrix(1 0 0 .66 0 57.4)" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#172e35" />
          <stop offset=".29" stopColor="#0e1c21" />
          <stop offset=".73" stopColor="#030708" />
          <stop offset="1" />
        </radialGradient>
        <radialGradient href="#reddit-snoo-rg-1" id="reddit-snoo-rg-7" cx="147.88" cy="32.94" r="39.77" fx="147.88" fy="32.94" gradientTransform="matrix(1 0 0 .98 0 .54)" />
        <radialGradient id="reddit-snoo-rg-8" cx="131.31" cy="73.08" r="32.6" fx="131.31" fy="73.08" gradientUnits="userSpaceOnUse">
          <stop offset=".48" stopColor="#7a9299" />
          <stop offset=".67" stopColor="#172e35" />
          <stop offset=".75" />
          <stop offset=".82" stopColor="#172e35" />
        </radialGradient>
      </defs>
      <path fill="#ff4500" d="M108 0C48.35 0 0 48.35 0 108c0 29.82 12.09 56.82 31.63 76.37l-20.57 20.57C6.98 209.02 9.87 216 15.64 216H108c59.65 0 108-48.35 108-108S167.65 0 108 0Z" />
      <circle cx="169.22" cy="106.98" r="25.22" fill="url(#reddit-snoo-rg-1)" />
      <circle cx="46.78" cy="106.98" r="25.22" fill="url(#reddit-snoo-rg-2)" />
      <ellipse cx="108.06" cy="128.64" fill="url(#reddit-snoo-rg-3)" rx="72" ry="54" />
      <path fill="url(#reddit-snoo-rg-4)" d="M86.78 123.48c-.42 9.08-6.49 12.38-13.56 12.38s-12.46-4.93-12.04-14.01c.42-9.08 6.49-15.02 13.56-15.02s12.46 7.58 12.04 16.66Z" />
      <path fill="url(#reddit-snoo-rg-5)" d="M129.35 123.48c.42 9.08 6.49 12.38 13.56 12.38s12.46-4.93 12.04-14.01c-.42-9.08-6.49-15.02-13.56-15.02s-12.46 7.58-12.04 16.66Z" />
      <ellipse cx="79.63" cy="116.37" fill="#ffc49c" rx="2.8" ry="3.05" />
      <ellipse cx="146.21" cy="116.37" fill="#ffc49c" rx="2.8" ry="3.05" />
      <path fill="url(#reddit-snoo-rg-6)" d="M108.06 142.92c-8.76 0-17.16.43-24.92 1.22-1.33.13-2.17 1.51-1.65 2.74 4.35 10.39 14.61 17.69 26.57 17.69s22.23-7.3 26.57-17.69c.52-1.23-.33-2.61-1.65-2.74-7.77-.79-16.16-1.22-24.92-1.22Z" />
      <circle cx="147.49" cy="49.43" r="17.87" fill="url(#reddit-snoo-rg-7)" />
      <path fill="url(#reddit-snoo-rg-8)" d="M107.8 76.92c-2.14 0-3.87-.89-3.87-2.27 0-16.01 13.03-29.04 29.04-29.04 2.14 0 3.87 1.73 3.87 3.87s-1.73 3.87-3.87 3.87c-11.74 0-21.29 9.55-21.29 21.29 0 1.38-1.73 2.27-3.87 2.27Z" />
      <path fill="#842123" d="M62.82 122.65c.39-8.56 6.08-14.16 12.69-14.16 6.26 0 11.1 6.39 11.28 14.33.17-8.88-5.13-15.99-12.05-15.99s-13.14 6.05-13.56 15.2c-.42 9.15 4.97 13.83 12.04 13.83h.52c-6.44-.16-11.3-4.79-10.91-13.2Zm90.48 0c-.39-8.56-6.08-14.16-12.69-14.16-6.26 0-11.1 6.39-11.28 14.33-.17-8.88 5.13-15.99 12.05-15.99 7.07 0 13.14 6.05 13.56 15.2.42 9.15-4.97 13.83-12.04 13.83h-.52c6.44-.16 11.3-4.79 10.91-13.2Z" />
    </svg>
  );
}
