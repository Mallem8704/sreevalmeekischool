/**
 * Lightweight Privacy-Compliant Analytics Tracker
 * Supports Google Analytics (gtag), dataLayer, and custom events
 */

export function track(eventName: string, properties?: Record<string, unknown>): void {
  if (typeof window === 'undefined') return;

  try {
    // 1. Google Analytics (gtag) if configured
    if (typeof (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag === 'function') {
      (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', eventName, properties);
    }

    // 2. dataLayer push if GTM is present
    if (Array.isArray((window as unknown as { dataLayer?: unknown[] }).dataLayer)) {
      (window as unknown as { dataLayer: unknown[] }).dataLayer.push({
        event: eventName,
        ...properties,
      });
    }

    // 3. Dispatch native CustomEvent for any internal listeners
    const customEvent = new CustomEvent('svhs_track', {
      detail: { event: eventName, properties, timestamp: new Date().toISOString() },
    });
    window.dispatchEvent(customEvent);

    // Development logging
    if (process.env.NODE_ENV === 'development') {
      console.log(`[SVHS Analytics] ${eventName}:`, properties);
    }
  } catch (err) {
    // Fail silently so user interactions are never blocked
    console.debug('Analytics dispatch error:', err);
  }
}
