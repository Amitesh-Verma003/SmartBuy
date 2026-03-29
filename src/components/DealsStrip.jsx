import React from 'react';
import { Tag, Clock, Zap } from 'lucide-react';

const deals = [
  { id: 1, name: 'Samsung Galaxy S24', discount: '8% OFF',  sale: 'Amazon Great Sale', status: 'Live Now',    live: true,  img: '📱' },
  { id: 2, name: 'Sony WH-1000XM5',   discount: '12% OFF', sale: 'Flipkart BBD',       status: 'Starts Apr 2', live: false, img: '🎧' },
  { id: 3, name: 'MacBook Air M2',     discount: '5% OFF',  sale: 'Apple Education',    status: 'Ends Apr 5',   live: false, img: '💻' },
  { id: 4, name: 'Nike Air Max 270',   discount: '15% OFF', sale: 'Myntra EORS',        status: 'Live Now',    live: true,  img: '👟' },
  { id: 5, name: 'iPad Pro M4',        discount: '7% OFF',  sale: 'Croma Weekend',      status: 'Starts Apr 6', live: false, img: '📟' },
  { id: 6, name: 'OnePlus 12',         discount: '10% OFF', sale: 'Amazon Flash Sale',  status: 'Live Now',    live: true,  img: '📲' },
];

export default function DealsStrip() {
  return (
    <div style={{ marginTop: 24 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Zap size={16} color="#F59E0B" fill="#F59E0B" />
          <h2 style={{ fontSize: 15, fontWeight: 700, color: '#111827', margin: 0 }}>Hot Deals</h2>
          <span style={{
            background: '#FEF3C7', color: '#D97706', fontSize: 10,
            fontWeight: 700, padding: '2px 8px', borderRadius: 20
          }}>{deals.filter(d => d.live).length} LIVE</span>
        </div>
        <button style={{ fontSize: 12, color: '#3B82F6', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600, fontFamily: 'inherit' }}>
          View all deals →
        </button>
      </div>

      {/* Horizontally Scrollable Strip */}
      <div style={{ display: 'flex', gap: 14, overflowX: 'auto', paddingBottom: 8, scrollbarWidth: 'none' }}>
        {deals.map(deal => (
          <div
            key={deal.id}
            style={{
              minWidth: 200, background: 'white', borderRadius: 12,
              border: deal.live ? '1px solid #10B981' : '1px solid #E5E7EB',
              boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
              padding: 16, flexShrink: 0, cursor: 'pointer',
              transition: 'box-shadow 0.2s, transform 0.15s',
            }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.12)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.08)'; e.currentTarget.style.transform = 'none'; }}
          >
            {/* Emoji + discount badge */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
              <span style={{ fontSize: 28 }}>{deal.img}</span>
              <span style={{
                background: deal.live ? '#ECFDF5' : '#FEF3C7',
                color: deal.live ? '#10B981' : '#D97706',
                fontSize: 11, fontWeight: 800, padding: '3px 8px', borderRadius: 6
              }}>{deal.discount}</span>
            </div>

            <p style={{ fontSize: 13, fontWeight: 700, color: '#111827', margin: '0 0 4px', lineHeight: 1.3 }}>{deal.name}</p>
            <p style={{ fontSize: 11, color: '#6b7280', margin: '0 0 10px' }}>{deal.sale}</p>

            {/* Status pill */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              {deal.live
                ? <><span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10B981', display: 'inline-block', boxShadow: '0 0 0 2px rgba(16,185,129,0.3)' }}></span><span style={{ fontSize: 11, fontWeight: 600, color: '#10B981' }}>Live Now</span></>
                : <><Clock size={11} color="#F59E0B" /><span style={{ fontSize: 11, fontWeight: 600, color: '#F59E0B' }}>{deal.status}</span></>
              }
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
