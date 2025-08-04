import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  CreditCard,
  BarChart3,
  Package,
  Settings,
  X,
  ChevronLeft,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Users", href: "/users", icon: Users },
  { name: "Transactions", href: "/transactions", icon: CreditCard },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
  { name: "Products", href: "/products", icon: Package },
  { name: "Settings", href: "/settings", icon: Settings },
];

export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  return (
    <>
      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 bg-card border-r border-card-border shadow-xl transition-transform duration-300 ease-out lg:translate-x-0",
          isOpen ? "translate-x-0 animate-slide-in-left" : "-translate-x-full"
        )}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex h-16 items-center justify-between px-6 border-b border-card-border">
            <h1 className="text-xl font-bold text-foreground bg-gradient-primary bg-clip-text text-transparent">
              AdminHub
            </h1>
            <Button
              onClick={onClose}
              variant="ghost"
              size="sm"
              className="lg:hidden hover:bg-muted transition-colors duration-200"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-1">
            {navigation.map((item, index) => (
              <NavLink
                key={item.name}
                to={item.href}
                onClick={() => onClose()}
                style={{ animationDelay: `${index * 50}ms` }}
                className={({ isActive }) =>
                  cn(
                    "flex items-center px-3 py-3 text-sm font-medium rounded-lg transition-all duration-200 group animate-fade-in hover-lift",
                    isActive
                      ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/70"
                  )
                }
              >
                <item.icon className="mr-3 h-5 w-5 flex-shrink-0 transition-transform duration-200 group-hover:scale-110" />
                <span className="transition-all duration-200">{item.name}</span>
                {/* Active indicator */}
                <div className="ml-auto w-1 h-1 rounded-full bg-primary-foreground opacity-0 group-[.active]:opacity-100 transition-opacity duration-200" />
              </NavLink>
            ))}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-card-border">
            <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors duration-200 cursor-pointer hover-lift">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-gradient-primary flex items-center justify-center shadow-md">
                  <span className="text-sm font-bold text-primary-foreground">
                    A
                  </span>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-foreground truncate">
                  Admin User
                </p>
                <p className="text-xs text-muted-foreground truncate">
                  admin@company.com
                </p>
              </div>
              <ChevronLeft className="h-4 w-4 text-muted-foreground transition-transform duration-200 group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
