"use client";

// ============================================
// Google Analytics + Google Ads Event Tracking
// ============================================

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";
const GADS_ID = process.env.NEXT_PUBLIC_GADS_ID || "";

// أنواع المصادر للتتبع
export type TrackingSource =
  | "header_desktop"
  | "header_mobile"
  | "footer"
  | "floating_widget"
  | "floating_quick_msg"
  | "floating_main"
  | "floating_mobile"
  | "floating_open"
  | "contact_page"
  | "hero_section"
  | "area_page"
  | "service_page"
  | "mobile_sticky"
  | "quote_dialog"
  | "unknown";

// ========== Helper Functions ==========

const isGtagReady = (): boolean => {
  return typeof window !== "undefined" && typeof (window as any).gtag === "function";
};

const sendGtagEvent = (eventName: string, params: Record<string, any>) => {
  if (!isGtagReady()) return;
  (window as any).gtag("event", eventName, params);
};

// ========== Google Ads Conversion ==========

export const trackGoogleAdsConversion = (
  conversionLabel: string,
  value: number = 0
) => {
  if (!GADS_ID || !isGtagReady()) return;
  
  (window as any).gtag("event", "conversion", {
    send_to: `${GADS_ID}/${conversionLabel}`,
    value: value,
    currency: "EGP",
  });
};

// ========== Event Trackers ==========

export const trackPhoneCall = (source: TrackingSource | string = "unknown") => {
  sendGtagEvent("phone_call", {
    event_category: "engagement",
    event_label: source,
    value: 1,
  });

  const PHONE_CONVERSION_LABEL = process.env.NEXT_PUBLIC_GADS_PHONE_LABEL || "";
  if (PHONE_CONVERSION_LABEL) {
    trackGoogleAdsConversion(PHONE_CONVERSION_LABEL, 50);
  }
};

export const trackWhatsApp = (source: TrackingSource | string = "unknown") => {
  sendGtagEvent("whatsapp_click", {
    event_category: "engagement",
    event_label: source,
    value: 1,
  });

  const WHATSAPP_CONVERSION_LABEL = process.env.NEXT_PUBLIC_GADS_WHATSAPP_LABEL || "";
  if (WHATSAPP_CONVERSION_LABEL) {
    trackGoogleAdsConversion(WHATSAPP_CONVERSION_LABEL, 30);
  }
};

export const trackFormSubmit = (
  formName: string,
  formData?: { service?: string; area?: string }
) => {
  sendGtagEvent("form_submit", {
    event_category: "conversion",
    event_label: formName,
    service: formData?.service || "",
    area: formData?.area || "",
    value: 1,
  });

  const FORM_CONVERSION_LABEL = process.env.NEXT_PUBLIC_GADS_FORM_LABEL || "";
  if (FORM_CONVERSION_LABEL) {
    trackGoogleAdsConversion(FORM_CONVERSION_LABEL, 100);
  }
};

export const trackQuoteRequest = (source: TrackingSource | string = "unknown") => {
  sendGtagEvent("quote_request", {
    event_category: "conversion",
    event_label: source,
    value: 1,
  });

  const QUOTE_CONVERSION_LABEL = process.env.NEXT_PUBLIC_GADS_QUOTE_LABEL || "";
  if (QUOTE_CONVERSION_LABEL) {
    trackGoogleAdsConversion(QUOTE_CONVERSION_LABEL, 80);
  }
};

export const trackAreaView = (areaName: string, areaSlug: string) => {
  sendGtagEvent("area_page_view", {
    event_category: "page_engagement",
    event_label: areaName,
    area_slug: areaSlug,
  });
};

export const trackServiceView = (serviceName: string, serviceSlug: string) => {
  sendGtagEvent("service_page_view", {
    event_category: "page_engagement",
    event_label: serviceName,
    service_slug: serviceSlug,
  });
};