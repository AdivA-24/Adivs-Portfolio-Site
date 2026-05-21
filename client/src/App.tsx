import { Router as WouterRouter, Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";
import Intro from "@/components/layout/Intro";
import { SmoothScrollProvider } from "@/lib/smooth-scroll";

const base = import.meta.env.BASE_URL.replace(/\/$/, "");

function Router() {
  return (
    <WouterRouter base={base}>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

function App() {
  return (
    <TooltipProvider>
      <Intro />
      <SmoothScrollProvider>
        <Toaster />
        <Router />
      </SmoothScrollProvider>
    </TooltipProvider>
  );
}

export default App;
