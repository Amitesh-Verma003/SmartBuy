import React from 'react';
import Header from '../components/Header';
import CardBenefits from '../components/CardBenefits';

export default function CardBenefitsPage() {
  return (
    <div style={{ background: '#F3F4F6', minHeight: '100vh' }}>
      <Header title="Card Benefits" />
      <div style={{ padding: 24 }}>
        <div style={{
          background: 'white', borderRadius: 12,
          border: '1px solid #E5E7EB',
          boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
          padding: 24,
        }}>
          <div style={{ marginBottom: 20 }}>
            <h2 style={{ fontSize: 18, fontWeight: 800, color: '#111827', margin: 0 }}>Card Benefit Teller</h2>
            <p style={{ fontSize: 13, color: '#6b7280', margin: '4px 0 0' }}>
              Find the best credit card for every spending category — ranked by estimated savings
            </p>
          </div>
          <CardBenefits />
        </div>
      </div>
    </div>
  );
}
