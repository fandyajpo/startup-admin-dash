import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "@/pages/Dashboard";
import User from "@/pages/User";
import NotFound from "./pages/NotFound";

import Login from "@/pages/Auth/Login";

// Inclusion
import CreateInclusion from "./pages/Inclusion/Create";
import Inclusion from "./pages/Inclusion/Index";
import UpdateInclusion from "./pages/Inclusion/Update";

// Tenant
import CreateTenant from "@/pages/Tenant/Create";
import Tenant from "@/pages/Tenant/Index";
import UpdateTenant from "@/pages/Tenant/Update";

// Layout
import { AuthLayout } from "./components/layout/AuthLayout";
import { DashboardLayout } from "@/components/layout/DashboardLayout";

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

            <Route path="inclusion">
              <Route index element={<Inclusion />} />
              <Route path="create" element={<CreateInclusion />} />
              <Route path=":id" element={<UpdateInclusion />} />
            </Route>
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </TanstackProvider>
);

export default App;
