import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ThemeProvider } from "@/components/ThemeProvider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";

import SkipLink from "@/components/SkipLink";
import ScrollToTop from "@/components/ScrollToTop";
import ErrorBoundary from "@/components/ErrorBoundary";

// PAGES
import { Home } from "./pages/Home";
import { Sonor } from "./pages/Sonor"; // ⬅️ export nommé
import Wttj from "./pages/cases/Wttj"; // ⬅️ export default
import WttjDefaultCase from "./pages/cases/wttj-default";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <SkipLink />
            <ScrollToTop />
            <ErrorBoundary>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/case-study/sonor" element={<Sonor />} />
                <Route path="/cases/wttj" element={<Wttj />} />
                <Route path="/case-study/wttj-conversion-seniors" element={<Wttj />} />
                <Route path="/cases/wttj-default" element={<WttjDefaultCase />} />
                <Route path="*" element={<div style={{ padding: 40 }}>Not Found</div>} />
              </Routes>
            </ErrorBoundary>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
