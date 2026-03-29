import React, { useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, ReferenceLine
} from 'recharts';

// Generate 90 days of realistic mock data (declining from 68000 to 62999)
const generateData = (days) => {
  const data = [];
  const start = new Date('2025-01-01');
  let price = 68000;
  for (let i = 0; i < 90; i++) {
    const date = new Date(start);
    date.setDate(start.getDate() + i);
    const fluctuation = (Math.random() - 0.52) * 600;
    price = Math.max(62500, Math.min(69000, price + fluctuation));
    if (i % 15 === 0) price -= Math.random() * 1000; // periodic drops
    data.push({
      date: date.toLocaleDateString('en-IN', { month: 'short', day: 'numeric' }),
      price: Math.round(price),
    });
  }
  return data;
};

const allData = generateData(90);
const ranges = {
  '7d':  allData.slice(-7),
  '30d': allData.slice(-30),
  '90d': allData,
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{
        background: 'white', border: '1px solid #E5E7EB', borderRadius: 10,
        padding: '10px 14px', boxShadow: '0 4px 12px rgba(0,0,0,0.12)',
      }}>
        <p style={{ margin: 0, fontSize: 11, color: '#6b7280', fontWeight: 500 }}>{label}</p>
        <p style={{ margin: '4px 0 0', fontSize: 16, fontWeight: 800, color: '#111827' }}>
          ₹{payload[0].value.toLocaleString('en-IN')}
        </p>
      </div>
    );
  }
  return null;
};

export default function PriceChart() {
  const [range, setRange] = useState('30d');
  const data = ranges[range];

  // Show only every nth label to avoid crowding
  const tickInterval = range === '7d' ? 0 : range === '30d' ? 4 : 9;

  return (
    <div style={{
      background: 'white', borderRadius: 12, border: '1px solid #E5E7EB',
      boxShadow: '0 1px 3px rgba(0,0,0,0.08)', padding: 20,
      display: 'flex', flexDirection: 'column', height: '100%',
    }}>
      {/* Card Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
        <div>
          <h2 style={{ fontSize: 15, fontWeight: 700, color: '#111827', margin: 0 }}>Price History</h2>
          <p style={{ fontSize: 12, color: '#6b7280', margin: '2px 0 0' }}>Samsung Galaxy S24 (256GB)</p>
        </div>
        {/* Range toggle buttons */}
        <div style={{
          display: 'flex', gap: 4, background: '#F3F4F6', borderRadius: 8, padding: 3
        }}>
          {['7d', '30d', '90d'].map(r => (
            <button
              key={r}
              onClick={() => setRange(r)}
              style={{
                padding: '5px 12px', fontSize: 12, fontWeight: 600,
                border: 'none', borderRadius: 6, cursor: 'pointer',
                background: range === r ? 'white' : 'transparent',
                color: range === r ? '#111827' : '#6b7280',
                boxShadow: range === r ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
                fontFamily: 'inherit', transition: 'all 0.15s',
              }}
            >{r}</button>
          ))}
        </div>
      </div>

      {/* Current price callout */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
        <span style={{ fontSize: 24, fontWeight: 800, color: '#111827' }}>₹62,999</span>
        <span style={{
          background: '#ECFDF5', color: '#10B981', padding: '4px 10px',
          borderRadius: 20, fontSize: 12, fontWeight: 700
        }}>↓ 8.2% this month</span>
      </div>

      {/* Chart */}
      <div style={{ flex: 1, minHeight: 200 }}>
        <ResponsiveContainer width="100%" height={220}>
          <LineChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F3F4F6" />
            <XAxis
              dataKey="date" tick={{ fontSize: 10, fill: '#9ca3af' }}
              axisLine={false} tickLine={false}
              interval={tickInterval}
            />
            <YAxis
              domain={['dataMin - 500', 'dataMax + 500']}
              tick={{ fontSize: 10, fill: '#9ca3af' }}
              axisLine={false} tickLine={false}
              tickFormatter={v => `₹${(v / 1000).toFixed(0)}k`}
              width={42}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#3B82F6', strokeWidth: 1, strokeDasharray: '4 4' }} />
            <ReferenceLine
              y={60000} stroke="#EF4444" strokeWidth={1.5}
              strokeDasharray="6 3"
              label={{ value: 'Your Alert', position: 'insideTopRight', fontSize: 10, fill: '#EF4444', fontWeight: 600 }}
            />
            <Line
              type="monotone" dataKey="price"
              stroke="#3B82F6" strokeWidth={2.5}
              dot={false} activeDot={{ r: 5, fill: '#3B82F6', stroke: 'white', strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
