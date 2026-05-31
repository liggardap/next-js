type EventName = "whatsapp_click" | "form_submit" | "fleet_filter";

type EventParams = Record<string, string | number | boolean | null>;

export function trackEvent(name: EventName, params?: EventParams) {
  if (typeof window === "undefined") return;
  if (typeof window.gtag === "function") {
    window.gtag("event", name, params);
  }
}

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}
