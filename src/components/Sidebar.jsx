import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard, Eye, Tag, Bell, CreditCard, Settings
} from 'lucide-react';

const navItems = [
  { to: '/',              icon: LayoutDashboard, label: 'Dashboard'    },
  { to: '/watchlist',     icon: Eye,             label: 'Watchlist'    },
  { to: '/deals',         icon: Tag,             label: 'Deals'        },
  { to: '/alerts',        icon: Bell,            label: 'Price Alerts' },
  { to: '/card-benefits', icon: CreditCard,      label: 'Card Benefits'},
  { to: '/settings',      icon: Settings,        label: 'Settings'     },
];

export default function Sidebar() {
  return (
    <aside style={{
      width: 240, minHeight: '100vh', background: '#111827',
      display: 'flex', flexDirection: 'column', position: 'fixed', top: 0, left: 0, zIndex: 100,
    }}>
      {/* Logo */}
      <div style={{ padding: '24px 20px 20px', borderBottom: '1px solid #1f2937' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 36, height: 36, background: 'linear-gradient(135deg, #10B981, #3B82F6)',
            borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontWeight: 800, color: 'white', fontSize: 16, letterSpacing: -1
          }}>S</div>
          <div>
            <div style={{ color: 'white', fontWeight: 700, fontSize: 16, lineHeight: 1 }}>SmartBuy</div>
            <div style={{ color: '#6b7280', fontSize: 11, marginTop: 2 }}>Intelligence Platform</div>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav style={{ flex: 1, padding: '12px 0' }}>
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
          >
            {({ isActive }) => (
              <div style={{
                display: 'flex', alignItems: 'center', gap: 12,
                padding: '11px 20px', textDecoration: 'none',
                color: isActive ? '#10B981' : '#9ca3af',
                background: isActive ? '#1f2937' : 'transparent',
                borderLeft: isActive ? '4px solid #10B981' : '4px solid transparent',
                fontWeight: isActive ? 600 : 400,
                fontSize: 14,
                transition: 'all 0.15s ease',
              }}>
                <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />
                {label}
              </div>
            )}
          </NavLink>
        ))}
      </nav>

      {/* User */}
      <div style={{
        padding: '16px 20px', borderTop: '1px solid #1f2937',
        display: 'flex', alignItems: 'center', gap: 10
      }}>
        <div style={{
          width: 36, height: 36, borderRadius: '50%',
          background: 'linear-gradient(135deg, #10B981, #059669)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: 'white', fontWeight: 700, fontSize: 13, flexShrink: 0
        }}>RK</div>
        <div>
          <div style={{ color: 'white', fontSize: 13, fontWeight: 600 }}>Rahul Kumar</div>
          <div style={{ color: '#6b7280', fontSize: 11 }}>Pro Member</div>
        </div>
      </div>
    </aside>
  );
}
