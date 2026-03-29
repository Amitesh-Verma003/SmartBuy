import React from 'react';
import { Search, Bell, ChevronDown } from 'lucide-react';

export default function Header({ title }) {
  return (
    <header style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      background: 'white', padding: '14px 24px',
      borderBottom: '1px solid #E5E7EB',
      position: 'sticky', top: 0, zIndex: 50,
      boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
    }}>
      {/* Left: Title */}
      <div>
        <h1 style={{ fontSize: 20, fontWeight: 700, color: '#111827', margin: 0 }}>{title}</h1>
        <p style={{ fontSize: 12, color: '#6b7280', margin: 0, marginTop: 2 }}>
          {new Date().toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>

      {/* Center: Search */}
      <div style={{ position: 'relative', width: 320 }}>
        <Search size={16} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
        <input
          type="text"
          placeholder="Search products, deals..."
          style={{
            width: '100%', padding: '9px 14px 9px 36px',
            border: '1px solid #E5E7EB', borderRadius: 10,
            fontSize: 13, color: '#374151', outline: 'none',
            background: '#F9FAFB', fontFamily: 'inherit',
          }}
          onFocus={e => e.target.style.border = '1px solid #3B82F6'}
          onBlur={e => e.target.style.border = '1px solid #E5E7EB'}
        />
      </div>

      {/* Right: Bell + Avatar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <button style={{
          position: 'relative', background: '#F3F4F6', border: 'none',
          borderRadius: 10, width: 40, height: 40, cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <Bell size={18} color="#374151" />
          <span style={{
            position: 'absolute', top: 6, right: 6,
            width: 16, height: 16, background: '#EF4444', borderRadius: '50%',
            fontSize: 9, fontWeight: 700, color: 'white',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            border: '2px solid white', lineHeight: 1
          }}>3</span>
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
          <div style={{
            width: 36, height: 36, borderRadius: '50%',
            background: 'linear-gradient(135deg, #3B82F6, #6366F1)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'white', fontWeight: 700, fontSize: 13
          }}>RK</div>
          <ChevronDown size={14} color="#6b7280" />
        </div>
      </div>
    </header>
  );
}
