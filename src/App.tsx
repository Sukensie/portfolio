import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { initializeAnalytics, trackPageView } from "@/lib/analytics";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";

const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    trackPageView(`${location.pathname}${location.search}`);
  }, [location.pathname, location.search]);

  return null;
};

const App = () => (
  <BrowserRouter basename={import.meta.env.BASE_URL}>
      <AnalyticsTracker />
      <Routes>
        <Route path="/" element={<Index />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
);

initializeAnalytics();

export default App;
