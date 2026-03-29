import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ShoppingDashboard from './pages/ShoppingDashboard';
import CardBenefitsPage from './pages/CardBenefitsPage';

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex', minHeight: '100vh' }}>
        {/* Fixed Sidebar */}
        <Sidebar />

        {/* Main content pushed right of sidebar */}
        <main style={{ marginLeft: 240, flex: 1, minHeight: '100vh' }}>
          <Routes>
            <Route path="/"               element={<ShoppingDashboard />} />
            <Route path="/card-benefits"  element={<CardBenefitsPage />} />
            {/* Stub routes so nav links don't 404 */}
            <Route path="/watchlist"      element={<Navigate to="/" replace />} />
            <Route path="/deals"          element={<Navigate to="/" replace />} />
            <Route path="/alerts"         element={<Navigate to="/" replace />} />
            <Route path="/settings"       element={<Navigate to="/" replace />} />
            <Route path="*"               element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
