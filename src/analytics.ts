export type AnalyticsEvent =
  | "resume-click"
  | "github-click"
  | "toptal-click"
  | "project-click"
  | "profile-click"
  | "contact-open"
  | "contact-sent"
  | "contact-error";

export type ContactSource = "header" | "menu" | "hero" | "link";

type EventData = Record<string, string>;

declare global {
  interface Window {
    umami?: { track: (event: string, data?: EventData) => void };
  }
}

// Umami (index.html) only sends data on the live domain, and may be blocked by
// ad blockers, so this must stay a silent no-op when the tracker is missing.
export function track(event: AnalyticsEvent, data?: EventData) {
  const send = () => {
    try {
      window.umami?.track(event, data);
    } catch {
      // Analytics must never break the page.
    }
  };
  // The tracker loads with `defer`, after the app starts; events fired during
  // startup (e.g. opening the form from a #contact link) wait for it.
  if (window.umami || document.readyState === "complete") send();
  else window.addEventListener("load", send, { once: true });
}
