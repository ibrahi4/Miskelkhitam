"use client";

// Helper to push to window.dataLayer safely
const pushToDataLayer = (eventName: string, params: Record<string, any> = {}) => {
  if (typeof window !== "undefined") {
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({
      event: eventName,
      ...params,
    });
  }
};

export const trackPhoneCall = (source: string = "unknown") => {
  pushToDataLayer("phone_call", {
    event_category: "engagement",
    event_label: source,
  });
};

export const trackWhatsApp = (source: string = "unknown") => {
  pushToDataLayer("whatsapp_click", {
    event_category: "engagement",
    event_label: source,
  });
};

export const trackFormSubmit = (
  formName: string,
  formData?: { service?: string; area?: string }
) => {
  pushToDataLayer("form_submit", {
    event_category: "conversion",
    event_label: formName,
    service: formData?.service || "",
    area: formData?.area || "",
  });
};

export const trackQuoteRequest = (source: string = "unknown") => {
  pushToDataLayer("quote_request", {
    event_category: "conversion",
    event_label: source,
  });
};