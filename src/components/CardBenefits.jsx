import React, { useState } from 'react';
import { Search, Star, Award } from 'lucide-react';

const categories = [
  { id: 'Flights',   emoji: '✈️' },
  { id: 'Trains',    emoji: '🚆' },
  { id: 'Hotels',    emoji: '🏨' },
  { id: 'Mall',      emoji: '🛍️' },
  { id: 'Grocery',   emoji: '🥦' },
  { id: 'Fuel',      emoji: '⛽' },
  { id: 'Dining',    emoji: '🍽️' },
  { id: 'OTT',       emoji: '📺' },
];

const cardsData = {
  Flights: [
    { id: 1, name: 'HDFC Infinia Metal', bank: 'HDFC Bank',            saving: 2800, best: true,  perks: ['5x Reward Points', 'Air Miles Transfer', 'Unlimited Lounge'],   perksColor: ['#3B82F6','#8B5CF6','#10B981'] },
    { id: 2, name: 'Axis Atlas',          bank: 'Axis Bank',            saving: 1960, best: false, perks: ['EDGE Miles 5/₹100', 'Airport Lounge', 'No Forex Markup'],      perksColor: ['#F59E0B','#10B981','#6366F1'] },
    { id: 3, name: 'SBI Vistara Card',   bank: 'State Bank of India',  saving: 1400, best: false, perks: ['Club Vistara Miles', '1% Cashback'],                           perksColor: ['#3B82F6','#10B981'] },
    { id: 4, name: 'ICICI Emeralde',     bank: 'ICICI Bank',           saving: 1050, best: false, perks: ['2% Unlimited Cashback', 'Priority Pass'],                      perksColor: ['#10B981','#F59E0B'] },
  ],
  Dining: [
    { id: 1, name: 'HSBC Live+',         bank: 'HSBC Bank',            saving: 2100, best: true,  perks: ['10% Cashback on Dining', 'Swiggy/Zomato Offer', 'No Cap'],    perksColor: ['#10B981','#F59E0B','#3B82F6'] },
    { id: 2, name: 'Swiggy HDFC',        bank: 'HDFC Bank',            saving: 1500, best: false, perks: ['10% on Swiggy', 'Dineout Discount', '₹300 Monthly Reward'],   perksColor: ['#EF4444','#F59E0B','#10B981'] },
    { id: 3, name: 'Axis MyZone',        bank: 'Axis Bank',            saving: 900,  best: false, perks: ['5% on Zomato', 'Movie BOGO'],                                  perksColor: ['#3B82F6','#8B5CF6'] },
    { id: 4, name: 'IDFC WOW',           bank: 'IDFC Bank',            saving: 600,  best: false, perks: ['3% on All Food', 'Zero Fee'],                                  perksColor: ['#10B981','#6b7280'] },
  ],
  Grocery: [
    { id: 1, name: 'Airtel Axis',        bank: 'Axis Bank',            saving: 1800, best: true,  perks: ['10% on BigBasket', 'Airtel Thanks', 'Blinkit Offer'],          perksColor: ['#10B981','#F59E0B','#3B82F6'] },
    { id: 2, name: 'HDFC Millennia',     bank: 'HDFC Bank',            saving: 1200, best: false, perks: ['5% on Amazon Fresh', 'Swiggy Instamart', 'BigBasket'],         perksColor: ['#EF4444','#3B82F6','#10B981'] },
    { id: 3, name: 'SBI Cashback',       bank: 'State Bank of India',  saving: 750,  best: false, perks: ['5% Unlimited Online', 'No Cap'],                               perksColor: ['#3B82F6','#10B981'] },
    { id: 4, name: 'Flipkart Axis',      bank: 'Axis Bank',            saving: 500,  best: false, perks: ['4% on Flipkart', '2% Others'],                                 perksColor: ['#F59E0B','#6b7280'] },
  ],
};

// Default other categories to Flights data
const getCards = (cat) => cardsData[cat] || cardsData['Flights'];

export default function CardBenefits() {
  const [activeCategory, setActiveCategory] = useState('Flights');
  const [searchQuery, setSearchQuery] = useState('');

  const cards = getCards(activeCategory).sort((a, b) => b.saving - a.saving);

  return (
    <div>
      {/* Category Chips */}
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 20 }}>
        {categories.map(cat => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                display: 'flex', alignItems: 'center', gap: 6,
                padding: '8px 16px', borderRadius: 24, border: 'none',
                cursor: 'pointer', fontFamily: 'inherit',
                fontSize: 13, fontWeight: 600,
                background: isActive ? '#3B82F6' : 'white',
                color: isActive ? 'white' : '#374151',
                boxShadow: isActive ? '0 4px 12px rgba(59,130,246,0.3)' : '0 1px 3px rgba(0,0,0,0.08)',
                border: isActive ? 'none' : '1px solid #E5E7EB',
                transition: 'all 0.2s',
              }}
            >
              <span style={{ fontSize: 16 }}>{cat.emoji}</span>
              {cat.id}
            </button>
          );
        })}
      </div>

      {/* Search Bar */}
      <div style={{ display: 'flex', gap: 10, marginBottom: 24 }}>
        <div style={{ flex: 1, position: 'relative' }}>
          <Search size={16} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
          <input
            type="text"
            placeholder={`Search best card for ${activeCategory}...`}
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            style={{
              width: '100%', padding: '11px 14px 11px 38px',
              border: '1px solid #E5E7EB', borderRadius: 10,
              fontSize: 13, color: '#374151', outline: 'none',
              background: 'white', fontFamily: 'inherit',
              boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
            }}
          />
        </div>
        <button style={{
          padding: '11px 20px', background: '#3B82F6', color: 'white',
          border: 'none', borderRadius: 10, fontSize: 13,
          fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit',
          whiteSpace: 'nowrap',
          boxShadow: '0 4px 12px rgba(59,130,246,0.3)',
          transition: 'background 0.2s',
        }}
          onMouseEnter={e => e.currentTarget.style.background = '#2563EB'}
          onMouseLeave={e => e.currentTarget.style.background = '#3B82F6'}
        >
          Find Best Offer
        </button>
      </div>

      {/* Results Label */}
      <p style={{ fontSize: 13, color: '#6b7280', marginBottom: 16, fontWeight: 500 }}>
        Best credit cards for <span style={{ color: '#111827', fontWeight: 700 }}>{activeCategory}</span>
      </p>

      {/* Card Results */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {cards.map((card, i) => (
          <div
            key={card.id}
            style={{
              background: 'white', borderRadius: 12, padding: 20,
              border: card.best ? '2px solid #3B82F6' : '1px solid #E5E7EB',
              boxShadow: card.best ? '0 4px 20px rgba(59,130,246,0.15)' : '0 1px 3px rgba(0,0,0,0.08)',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12,
              transition: 'box-shadow 0.2s, transform 0.15s',
              position: 'relative',
            }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = card.best ? '0 4px 20px rgba(59,130,246,0.15)' : '0 1px 3px rgba(0,0,0,0.08)'; e.currentTarget.style.transform = 'none'; }}
          >
            {/* BEST OFFER badge */}
            {card.best && (
              <span style={{
                position: 'absolute', top: -1, right: 16,
                background: '#3B82F6', color: 'white',
                fontSize: 9, fontWeight: 800, letterSpacing: '0.08em',
                padding: '4px 10px', borderRadius: '0 0 8px 8px', textTransform: 'uppercase',
              }}>
                ⭐ Best Offer
              </span>
            )}

            {/* Rank */}
            <div style={{
              width: 32, height: 32, borderRadius: 8,
              background: i === 0 ? '#3B82F6' : '#F3F4F6',
              color: i === 0 ? 'white' : '#6b7280',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 800, fontSize: 14, flexShrink: 0,
            }}>#{i + 1}</div>

            {/* Card info */}
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                <p style={{ fontSize: 15, fontWeight: 700, color: '#111827', margin: 0 }}>{card.name}</p>
              </div>
              <p style={{ fontSize: 12, color: '#6b7280', margin: '0 0 10px' }}>{card.bank}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {card.perks.map((perk, pi) => (
                  <span key={pi} style={{
                    background: card.perksColor[pi] + '15',
                    color: card.perksColor[pi],
                    fontSize: 10, fontWeight: 700, padding: '3px 8px',
                    borderRadius: 20, border: `1px solid ${card.perksColor[pi]}30`,
                  }}>{perk}</span>
                ))}
              </div>
            </div>

            {/* Saving + CTA */}
            <div style={{ textAlign: 'right', flexShrink: 0 }}>
              <p style={{ fontSize: 11, color: '#6b7280', margin: '0 0 2px', fontWeight: 500 }}>Est. saving</p>
              <p style={{ fontSize: 22, fontWeight: 800, color: '#10B981', margin: '0 0 10px' }}>₹{card.saving.toLocaleString('en-IN')}</p>
              <button style={{
                background: card.best ? '#3B82F6' : '#F3F4F6',
                color: card.best ? 'white' : '#374151',
                border: 'none', borderRadius: 8, padding: '7px 14px',
                fontSize: 12, fontWeight: 700, cursor: 'pointer',
                fontFamily: 'inherit', transition: 'all 0.15s',
              }}
                onMouseEnter={e => { e.currentTarget.style.background = '#2563EB'; e.currentTarget.style.color = 'white'; }}
                onMouseLeave={e => { e.currentTarget.style.background = card.best ? '#3B82F6' : '#F3F4F6'; e.currentTarget.style.color = card.best ? 'white' : '#374151'; }}
              >Apply Now →</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
