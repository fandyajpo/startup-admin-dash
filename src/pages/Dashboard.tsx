import { Users, DollarSign, ShoppingCart, TrendingUp } from 'lucide-react';
import { StatsCard } from '@/components/dashboard/StatsCard';
import { ChartCard } from '@/components/dashboard/ChartCard';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from 'recharts';
import { SimpleChartTooltip } from '@/components/ui/simple-chart';

const statsData = [
  {
    title: 'Total Users',
    value: '12,345',
    change: '+12% from last month',
    changeType: 'positive' as const,
    icon: Users,
  },
  {
    title: 'Revenue',
    value: '$54,230',
    change: '+8% from last month',
    changeType: 'positive' as const,
    icon: DollarSign,
  },
  {
    title: 'Orders',
    value: '1,234',
    change: '-2% from last month',
    changeType: 'negative' as const,
    icon: ShoppingCart,
  },
  {
    title: 'Growth Rate',
    value: '12.5%',
    change: '+4% from last month',
    changeType: 'positive' as const,
    icon: TrendingUp,
  },
];

const barData = [
  { name: 'Jan', value: 2400 },
  { name: 'Feb', value: 1398 },
  { name: 'Mar', value: 9800 },
  { name: 'Apr', value: 3908 },
  { name: 'May', value: 4800 },
  { name: 'Jun', value: 3800 },
];

const lineData = [
  { name: 'Jan', users: 4000, revenue: 2400 },
  { name: 'Feb', users: 3000, revenue: 1398 },
  { name: 'Mar', users: 2000, revenue: 9800 },
  { name: 'Apr', users: 2780, revenue: 3908 },
  { name: 'May', users: 1890, revenue: 4800 },
  { name: 'Jun', users: 2390, revenue: 3800 },
];

const pieData = [
  { name: 'Desktop', value: 400, color: '#3B82F6' },
  { name: 'Mobile', value: 300, color: '#10B981' },
  { name: 'Tablet', value: 200, color: '#F59E0B' },
  { name: 'Other', value: 100, color: '#EF4444' },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's an overview of your business.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsData.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard
          title="Monthly Revenue"
          description="Revenue generated over the last 6 months"
        >
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="name" className="text-muted-foreground" />
              <YAxis className="text-muted-foreground" />
              <Tooltip content={<SimpleChartTooltip />} />
              <Bar dataKey="value" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard
          title="User Growth"
          description="Users and revenue trends over time"
        >
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="name" className="text-muted-foreground" />
              <YAxis className="text-muted-foreground" />
              <Tooltip content={<SimpleChartTooltip />} />
              <Line
                type="monotone"
                dataKey="users"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="hsl(var(--success))"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard
          title="Traffic Sources"
          description="Breakdown of traffic by device type"
        >
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard
          title="Recent Activity"
          description="Latest system activities and updates"
        >
          <div className="space-y-4">
            {[
              { action: 'New user registered', time: '2 minutes ago' },
              { action: 'Order #1234 completed', time: '15 minutes ago' },
              { action: 'Payment processed', time: '1 hour ago' },
              { action: 'System backup completed', time: '2 hours ago' },
            ].map((activity, index) => (
              <div key={index} className="flex justify-between items-center py-2">
                <p className="text-sm text-foreground">{activity.action}</p>
                <span className="text-xs text-muted-foreground">{activity.time}</span>
              </div>
            ))}
          </div>
        </ChartCard>
      </div>
    </div>
  );
}