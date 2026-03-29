import React from 'react';
import { Package, TrendingDown, Tag, Bell } from 'lucide-react';

const metrics = [
  {
    label: 'Items Tracked',
    value: '12',
    icon: Package,
    iconColor: '#3B82F6',
    iconBg: '#EFF6FF',
    sub: '3 added this week',
    subColor: '#6b7280',
  },
  {
    label: 'Saved This Month',
    value: '₹3,240',
    icon: TrendingDown,
    iconColor: '#10B981',
    iconBg: '#ECFDF5',
    sub: '+₹840 vs last month',
    subColor: '#10B981',
  },
  {
    label: 'Active Deals',
    value: '4',
    icon: Tag,
    iconColor: '#F59E0B',
    iconBg: '#FFFBEB',
    sub: '2 expiring today',
    subColor: '#F59E0B',
  },
  {
    label: 'Alerts Triggered',
    value: '2',
    icon: Bell,
    iconColor: '#EF4444',
    iconBg: '#FEF2F2',
    sub: 'Check now',
    subColor: '#EF4444',
  },
];

export default function MetricCards() {
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 24,
    }}>
      {metrics.map((m) => {
        const Icon = m.icon;
        return (
          <div key={m.label} style={{
            background: 'white', borderRadius: 12, padding: 20,
            border: '1px solid #E5E7EB',
            boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
            display: 'flex', flexDirection: 'column', gap: 12,
            transition: 'box-shadow 0.2s',
            cursor: 'default',
          }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.12)'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.08)'}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <p style={{ fontSize: 12, color: '#6b7280', margin: 0, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{m.label}</p>
                <p style={{ fontSize: 26, fontWeight: 800, color: '#111827', margin: '4px 0 0', letterSpacing: '-0.5px' }}>{m.value}</p>
              </div>
              <div style={{
                width: 42, height: 42, borderRadius: 10,
                background: m.iconBg,
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
              }}>
                <Icon size={20} color={m.iconColor} strokeWidth={2} />
              </div>
            </div>
            <p style={{ fontSize: 12, color: m.subColor, margin: 0, fontWeight: 500 }}>{m.sub}</p>
          </div>
        );
      })}
    </div>
  );
}
