const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;
const LOCAL_HOSTS = new Set(["localhost", "127.0.0.1", "::1"]);

type ReactGAInstance = (typeof import("react-ga4"))["default"];
let reactGA: ReactGAInstance | null = null;

export const initializeAnalytics = (): void => {
  if (reactGA || !GA_MEASUREMENT_ID || LOCAL_HOSTS.has(window.location.hostname)) {
    return;
  }

  setTimeout(() => {
    import("react-ga4").then(({ default: ReactGA }) => {
      ReactGA.initialize(GA_MEASUREMENT_ID!);
      reactGA = ReactGA;
    });
  }, 0);
};

export const trackPageView = (path: string): void => {
  if (!reactGA) return;
  reactGA.send({ hitType: "pageview", page: path });
};

type EventParams = {
  category: string;
  action: string;
  label?: string;
};

export const trackEvent = ({ category, action, label }: EventParams): void => {
  if (!reactGA) return;
  reactGA.event({ category, action, label });
};
