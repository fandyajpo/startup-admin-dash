// Simple chart tooltip and legend components for basic charts
import React from 'react';
import { cn } from '@/lib/utils';

interface ChartTooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string;
  className?: string;
}

export const SimpleChartTooltip: React.FC<ChartTooltipProps> = ({
  active,
  payload,
  label,
  className,
}) => {
  if (!active || !payload || !payload.length) {
    return null;
  }

  return (
    <div
      className={cn(
        "rounded-lg border border-card-border bg-card p-3 shadow-md",
        className
      )}
    >
      {label && (
        <p className="text-sm font-medium text-foreground mb-1">{label}</p>
      )}
      {payload.map((entry, index) => (
        <div key={index} className="flex items-center space-x-2">
          <div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: entry.color }}
          />
          <span className="text-sm text-muted-foreground">
            {entry.name}: {entry.value}
          </span>
        </div>
      ))}
    </div>
  );
};