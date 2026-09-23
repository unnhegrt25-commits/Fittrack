import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import PaymentPage from './pages/PaymentPage';
export default function App() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/user/:id" element={<UserPage />} />
      <Route path="/payment" element={<PaymentPage />} />
    </Routes>
  );
}