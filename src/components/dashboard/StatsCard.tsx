import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative' | 'neutral';
  icon: LucideIcon;
}

export const StatsCard = ({ title, value, change, changeType, icon: Icon }: StatsCardProps) => {
  return (
    <div className="bg-card rounded-lg border border-card-border p-6 shadow-sm hover-lift hover-glow transition-all duration-300 animate-fade-in">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-muted-foreground mb-2">{title}</p>
          <p className="text-3xl font-bold text-foreground tracking-tight">{value}</p>
          <div className="flex items-center mt-3">
            <p
              className={cn(
                "text-sm font-medium flex items-center",
                changeType === 'positive' && "text-success",
                changeType === 'negative' && "text-destructive",
                changeType === 'neutral' && "text-muted-foreground"
              )}
            >
              {changeType === 'positive' && (
                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 17l5-5h-3V5h-4v7H5l5 5z"/>
                </svg>
              )}
              {changeType === 'negative' && (
                <svg className="w-3 h-3 mr-1 rotate-180" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 17l5-5h-3V5h-4v7H5l5 5z"/>
                </svg>
              )}
              {change}
            </p>
          </div>
        </div>
        <div className="flex-shrink-0">
          <div className="h-14 w-14 bg-primary/10 rounded-xl flex items-center justify-center shadow-sm ring-1 ring-primary/5">
            <Icon className="h-7 w-7 text-primary" />
          </div>
        </div>
      </div>
    </div>
  );
};