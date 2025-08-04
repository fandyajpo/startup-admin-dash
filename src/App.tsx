import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardLayout } from "./components/layout/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import NotFound from "./pages/NotFound";
import Login from "./components/auth/login";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Navigate to="/dashboard" replace />} /> */}
          <Route path="/auth" element={<Login />} />
          <Route element={<DashboardLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route
              path="/transactions"
              element={
                <div className="p-8 text-center text-muted-foreground">
                  Transactions page coming soon...
                </div>
              }
            />
            <Route
              path="/analytics"
              element={
                <div className="p-8 text-center text-muted-foreground">
                  Analytics page coming soon...
                </div>
              }
            />
            <Route
              path="/products"
              element={
                <div className="p-8 text-center text-muted-foreground">
                  Products page coming soon...
                </div>
              }
            />
            <Route
              path="/settings"
              element={
                <div className="p-8 text-center text-muted-foreground">
                  Settings page coming soon...
                </div>
              }
            />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
