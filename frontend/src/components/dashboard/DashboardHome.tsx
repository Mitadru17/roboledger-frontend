import React from 'react';
import { motion } from 'framer-motion';
import { Activity, CheckCircle, ShieldAlert, Clock } from 'lucide-react';

export function DashboardHome() {
  return (
    <div className="flex flex-col gap-6 h-full">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Platform Overview</h1>
        <p className="text-muted-foreground">Real-time metrics and network status for RoboLedger.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <KpiCard title="Total Proofs Verified" value="14,239" icon={<CheckCircle className="text-green-500" />} trend="+12% this week" />
        <KpiCard title="Active Validators" value="2,048" icon={<Activity className="text-primary" />} trend="Stable" />
        <KpiCard title="Threats Prevented" value="156" icon={<ShieldAlert className="text-red-500" />} trend="-3% this week" />
        <KpiCard title="Avg Consensus Time" value="2.4s" icon={<Clock className="text-blue-500" />} trend="-0.2s this week" />
      </div>

      {/* Main content area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1 min-h-[400px]">
        <div className="lg:col-span-2 bg-card rounded-xl border border-border/50 p-6 flex flex-col">
          <h3 className="font-semibold mb-4 text-lg">Network Throughput (Proofs/min)</h3>
          <div className="flex-1 rounded-lg bg-secondary/30 flex items-center justify-center border border-dashed border-border">
            <span className="text-muted-foreground">Chart Component Placeholder</span>
          </div>
        </div>
        
        <div className="bg-card rounded-xl border border-border/50 p-6 flex flex-col">
          <h3 className="font-semibold mb-4 text-lg">Recent Activity</h3>
          <div className="flex-1 space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center gap-3 pb-4 border-b border-border/30 last:border-0">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Proof ID: {Math.random().toString(36).substring(7).toUpperCase()}</p>
                  <p className="text-xs text-muted-foreground">Verified by 64 validators</p>
                </div>
                <span className="text-xs text-muted-foreground">2m ago</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function KpiCard({ title, value, icon, trend }: { title: string, value: string, icon: React.ReactNode, trend: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-card p-5 rounded-xl border border-border/50 flex flex-col justify-between"
    >
      <div className="flex justify-between items-start mb-4">
        <h4 className="text-sm font-medium text-muted-foreground">{title}</h4>
        {icon}
      </div>
      <div>
        <div className="text-3xl font-bold tracking-tight mb-1">{value}</div>
        <div className="text-xs text-muted-foreground">{trend}</div>
      </div>
    </motion.div>
  );
}
