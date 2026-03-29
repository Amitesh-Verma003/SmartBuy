import React from 'react';
import Header from '../components/Header';
import MetricCards from '../components/MetricCards';
import WatchlistTable from '../components/WatchlistTable';
import PriceChart from '../components/PriceChart';
import DealsStrip from '../components/DealsStrip';

export default function ShoppingDashboard() {
  return (
    <div style={{ background: '#F3F4F6', minHeight: '100vh' }}>
      <Header title="Shopping Dashboard" />
      <div style={{ padding: 24 }}>
        <MetricCards />
        {/* Two-column grid: Watchlist (60%) + Chart (40%) */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 20, marginBottom: 0 }}>
          <WatchlistTable />
          <PriceChart />
        </div>
        <DealsStrip />
      </div>
    </div>
  );
}
