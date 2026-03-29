import React from 'react';
import { ExternalLink, AlarmClockCheck } from 'lucide-react';

const watchlist = [
  { rank: 1, name: 'Samsung Galaxy S24', platform: 'Amazon',      price: '₹62,999', change: '-8.2%',  changePos: true,  status: 'Deal Active', statusColor: '#10B981', statusBg: '#ECFDF5', action: 'View Deal',   actionBg: '#10B981' },
  { rank: 2, name: 'Sony WH-1000XM5',   platform: 'Flipkart',    price: '₹24,490', change: '+2.1%',  changePos: false, status: 'Watching',   statusColor: '#6b7280', statusBg: '#F3F4F6', action: 'Set Alert',  actionBg: '#3B82F6' },
  { rank: 3, name: 'MacBook Air M2',    platform: 'Apple Store', price: '₹1,14,900',change: '-0.5%',  changePos: true,  status: 'Watching',   statusColor: '#6b7280', statusBg: '#F3F4F6', action: 'Set Alert',  actionBg: '#3B82F6' },
  { rank: 4, name: 'Nike Air Max 270',  platform: 'Myntra',      price: '₹8,995',  change: '-15.0%', changePos: true,  status: 'Deal Active', statusColor: '#10B981', statusBg: '#ECFDF5', action: 'View Deal',   actionBg: '#10B981' },
  { rank: 5, name: 'iPad Pro M4',       platform: 'Croma',       price: '₹99,900', change: '+1.2%',  changePos: false, status: 'Alert Set',  statusColor: '#F59E0B', statusBg: '#FFFBEB', action: 'Tracking',   actionBg: '#F59E0B' },
];

export default function WatchlistTable() {
  return (
    <div style={{
      background: 'white', borderRadius: 12, border: '1px solid #E5E7EB',
      boxShadow: '0 1px 3px rgba(0,0,0,0.08)', overflow: 'hidden',
    }}>
      <div style={{ padding: '16px 20px', borderBottom: '1px solid #F3F4F6', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h2 style={{ fontSize: 15, fontWeight: 700, color: '#111827', margin: 0 }}>My Watchlist</h2>
          <p style={{ fontSize: 12, color: '#6b7280', margin: '2px 0 0' }}>5 products tracked</p>
        </div>
        <button style={{
          fontSize: 12, color: '#3B82F6', background: '#EFF6FF',
          border: 'none', borderRadius: 8, padding: '6px 12px',
          cursor: 'pointer', fontWeight: 600, fontFamily: 'inherit',
        }}>+ Add Product</button>
      </div>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
        <thead>
          <tr style={{ background: '#F9FAFB' }}>
            {['#', 'Product', 'Platform', 'Current Price', '7d Change', 'Status', 'Action'].map(col => (
              <th key={col} style={{
                padding: '10px 16px', textAlign: col === '#' ? 'center' : 'left',
                color: '#6b7280', fontWeight: 600, fontSize: 11,
                textTransform: 'uppercase', letterSpacing: '0.05em',
                borderBottom: '1px solid #E5E7EB',
              }}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {watchlist.map((row, i) => (
            <tr
              key={row.rank}
              style={{
                borderBottom: i < watchlist.length - 1 ? '1px solid #F3F4F6' : 'none',
                transition: 'background 0.15s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#F9FAFB'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              <td style={{ padding: '12px 16px', textAlign: 'center', color: '#9ca3af', fontWeight: 600 }}>{row.rank}</td>
              <td style={{ padding: '12px 16px', fontWeight: 600, color: '#111827' }}>{row.name}</td>
              <td style={{ padding: '12px 16px' }}>
                <span style={{
                  background: '#F3F4F6', padding: '3px 8px', borderRadius: 6,
                  fontSize: 11, fontWeight: 600, color: '#374151'
                }}>{row.platform}</span>
              </td>
              <td style={{ padding: '12px 16px', fontWeight: 700, color: '#111827' }}>{row.price}</td>
              <td style={{ padding: '12px 16px' }}>
                <span style={{
                  color: row.changePos ? '#10B981' : '#EF4444',
                  fontWeight: 700, fontSize: 13,
                }}>{row.change}</span>
              </td>
              <td style={{ padding: '12px 16px' }}>
                <span style={{
                  background: row.statusBg, color: row.statusColor,
                  padding: '4px 10px', borderRadius: 20,
                  fontSize: 11, fontWeight: 600,
                }}>{row.status}</span>
              </td>
              <td style={{ padding: '12px 16px' }}>
                <button style={{
                  background: row.actionBg, color: 'white',
                  border: 'none', borderRadius: 8, padding: '6px 12px',
                  fontSize: 12, fontWeight: 600, cursor: 'pointer',
                  display: 'flex', alignItems: 'center', gap: 4, fontFamily: 'inherit',
                }}>
                  {row.action === 'View Deal' ? <ExternalLink size={12} /> : <AlarmClockCheck size={12} />}
                  {row.action}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
