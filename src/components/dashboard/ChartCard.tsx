import { ReactNode } from 'react';

interface ChartCardProps {
  title: string;
  description?: string;
  children: ReactNode;
}

export const ChartCard = ({ title, description, children }: ChartCardProps) => {
  return (
    <div className="bg-card rounded-lg border border-card-border p-6 shadow-sm hover-lift transition-all duration-300 animate-fade-in">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        {description && (
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
        )}
      </div>
      <div className="transition-all duration-300">
        {children}
      </div>
    </div>
  );
};