import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import HowToBuy from "./pages/HowToBuy";
import FAQ from "./pages/FAQ";
import Ippyfy from "./pages/Ippyfy";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/how-to-buy" element={<HowToBuy />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/agent" element={<Ippyfy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

const container = document.getElementById("root")!;
// Reuse existing root if present (prevents duplicate createRoot during HMR)
const existingRoot = (window as any).__app_root as ReturnType<typeof createRoot> | undefined;
if (existingRoot) {
  existingRoot.render(<App />);
} else {
  const root = createRoot(container);
  root.render(<App />);
  (window as any).__app_root = root;
}
