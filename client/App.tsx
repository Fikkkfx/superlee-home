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
import News from "./pages/News";
import FAQ from "./pages/FAQ";
import Agent from "./pages/Agent";
import Game from "./pages/Game";
import Meme from "./pages/Meme";
import Flappy from "./pages/games/Flappy";
import Snake from "./pages/games/Snake";
import Two048 from "./pages/games/Two048";

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
          <Route path="/news" element={<News />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/agent" element={<Agent />} />
          <Route path="/game" element={<Game />} />
          <Route path="/meme" element={<Meme />} />
          <Route path="/game/flappy" element={<Flappy />} />
          <Route path="/game/snake" element={<Snake />} />
          <Route path="/game/2048" element={<Two048 />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

const container = document.getElementById("root")!;
// Reuse existing root if present (prevents duplicate createRoot during HMR)
const existingRoot = (window as any).__app_root as
  | ReturnType<typeof createRoot>
  | undefined;
if (existingRoot) {
  existingRoot.render(<App />);
} else {
  const root = createRoot(container);
  root.render(<App />);
  (window as any).__app_root = root;
}
