import ReactGA from "react-ga4";

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;
const LOCAL_HOSTS = new Set(["localhost", "127.0.0.1", "::1"]);

let isInitialized = false;

export const initializeAnalytics = (): void => {
  if (isInitialized || !GA_MEASUREMENT_ID || LOCAL_HOSTS.has(window.location.hostname)) {
    return;
  }

  ReactGA.initialize(GA_MEASUREMENT_ID);
  isInitialized = true;
};

export const trackPageView = (path: string): void => {
  if (!isInitialized) {
    return;
  }

  ReactGA.send({ hitType: "pageview", page: path });
};

type EventParams = {
  category: string;
  action: string;
  label?: string;
};

export const trackEvent = ({ category, action, label }: EventParams): void => {
  if (!isInitialized) {
    return;
  }

  ReactGA.event({ category, action, label });
};
