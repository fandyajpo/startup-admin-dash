import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import Dashboard from "@/pages/Dashboard";
import User from "@/pages/User";
import NotFound from "./pages/NotFound";
import Login from "./components/auth/Login";
import AuthLayout from "./components/layout/AuthLayout";
import CreateTenant from "@/pages/Tenant/Create";
import Tenant from "@/pages/Tenant/Index";
import { UpdateTenant } from "@/pages/Tenant/Update";
import TanstackProvider from "@/components/layout/TanstackProvider";

const App = () => (
  <TanstackProvider>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Navigate to="/dashboard" replace />} /> */}
          <Route element={<AuthLayout />}>
            <Route path="/auth" element={<Login />} />
          </Route>
          <Route element={<DashboardLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/user" element={<User />} />
            <Route
              path="/transaction"
              element={
                <div className="p-8 text-center text-muted-foreground">
                  Transactions page coming soon...
                </div>
              }
            />
            <Route path="tenant">
              <Route index element={<Tenant />} />
              <Route path="create" element={<CreateTenant />} />
              <Route path=":id" element={<UpdateTenant />} />
            </Route>
            <Route
              path="/analytic"
              element={
                <div className="p-8 text-center text-muted-foreground">
                  Analytics page coming soon...
                </div>
              }
            />
            <Route
              path="/product"
              element={
                <div className="p-8 text-center text-muted-foreground">
                  Products page coming soon...
                </div>
              }
            />
            <Route
              path="/setting"
              element={
                <div className="p-8 text-center text-muted-foreground">
                  Settings page coming soon...
                </div>
              }
            />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </TanstackProvider>
);

export default App;
