import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// UI providers / toasters
import { ThemeProvider } from "@/components/ThemeProvider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";

// A11y + UX
import SkipLink from "@/components/SkipLink";
import ScrollToTop from "@/components/ScrollToTop";

// Pages
import { Home } from "./pages/Home";
import Sonor from "./pages/cases/sonor";
import Wttj from "./pages/cases/wttj";
import WttjDefaultCase from "./pages/cases/wttj-default";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <SkipLink />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/case-study/sonor" element={<Sonor />} />
            <Route path="/cases/wttj" element={<Wttj />} />
            <Route path="/case-study/wttj-conversion-seniors" element={<Wttj />} />
            {/* Si tu utilises WttjDefaultCase quelque part : */}
            <Route path="/cases/wttj-default" element={<WttjDefaultCase />} />
            {/* Catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
