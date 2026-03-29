# SmartBuy — Pre-Purchase Intelligence Platform

A modern fintech dashboard for smarter shopping decisions. Built with **React + Vite + Tailwind CSS + Recharts**.

![SmartBuy Dashboard](https://img.shields.io/badge/React-18-blue?logo=react) ![Vite](https://img.shields.io/badge/Vite-5-purple?logo=vite) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-teal?logo=tailwindcss)

---

## Features

- 📊 **Shopping Dashboard** — KPI cards, price history chart, live watchlist table, deals strip
- 💳 **Card Benefits Teller** — Category-based credit card ranking engine (Flights, Dining, Grocery, etc.)
- 📈 **Price Chart** — 7d / 30d / 90d toggle with Recharts, custom tooltip, alert reference line
- 🔔 **Notifications** — Bell badge, alert status badges per watchlist item
- 🧭 **Sidebar Navigation** — Fixed dark sidebar with active state highlighting

---

## Tech Stack

| Package | Purpose |
|---|---|
| React 18 + Vite | Frontend framework + build tool |
| Tailwind CSS v3 | Utility-first styling |
| Recharts | Price history charts |
| React Router DOM | Client-side navigation |
| Lucide React | Icon library |
| Framer Motion | Animations |

---

## Getting Started

### Prerequisites
Install **Node.js v18+** from [https://nodejs.org](https://nodejs.org)

### Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/Amitesh-Verma003/SmartBuy.git

# 2. Navigate into the folder
cd SmartBuy

# 3. Install dependencies
npm install

# 4. Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Pages

| Route | Page |
|---|---|
| `/` | Shopping Dashboard |
| `/card-benefits` | Card Benefits Teller |

---

## Project Structure

```
src/
├── components/
│   ├── Sidebar.jsx        # Fixed dark sidebar with nav links
│   ├── Header.jsx         # Top bar with search + notifications
│   ├── MetricCards.jsx    # 4 KPI summary cards
│   ├── WatchlistTable.jsx # Product tracking table
│   ├── PriceChart.jsx     # Recharts line chart with toggles
│   ├── DealsStrip.jsx     # Horizontal scrollable deals cards
│   └── CardBenefits.jsx   # Card ranking engine with category chips
├── pages/
│   ├── ShoppingDashboard.jsx
│   └── CardBenefitsPage.jsx
├── App.jsx                # Router + layout shell
├── main.jsx               # Entry point
└── index.css              # Global styles + Tailwind directives
```

---

## Build for Production

```bash
npm run build
```

Output is generated in the `dist/` folder. Deploy to Vercel, Netlify, or any static host.

---

Built for **DTU Hackathon 2026** 🚀
