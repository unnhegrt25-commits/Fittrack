import React, { useState } from 'react';
import './PaymentPage.css';
export default function PaymentPage() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [paid, setPaid] = useState(false);
  const plans = [
    { name: 'Monthly', price: '₹199', period: '/month' },
    { name: 'Yearly', price: '₹1,499', period: '/year', highlight: true },
  ];
  const handlePayment = (e) => {
    e.preventDefault();
    setPaid(true);
  };
  if (paid) {
    return (
      <div className="payment-page">
        <div className="payment-card success-card">
          <div className="success-icon">✓</div>
          <h2>Payment Successful</h2>
          <p>You're now subscribed to the <strong>{selectedPlan.name}</strong> plan.</p>
          <a href="/" className="back-link">Back to Home</a>
        </div>
      </div>
    );
  }

  // Step 2: card details form, shown after picking a plan
  if (selectedPlan) {
    return (
      <div className="payment-page">
        <div className="payment-card">
          <h2>Pay for {selectedPlan.name} Plan</h2>
          <p className="plan-price">{selectedPlan.price}<span>{selectedPlan.period}</span></p>

          <form onSubmit={handlePayment}>
            <label>Name on Card</label>
            <input
              type="text"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
              placeholder="Unnati Hegde"
              required
            />

            <label>Card Number</label>
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="4111 1111 1111 1111"
              maxLength="19"
              required
            />

            <div className="row">
              <div>
                <label>Expiry</label>
                <input
                  type="text"
                  value={expiry}
                  onChange={(e) => setExpiry(e.target.value)}
                  placeholder="MM/YY"
                  maxLength="5"
                  required
                />
              </div>
              <div>
                <label>CVV</label>
                <input
                  type="text"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  placeholder="123"
                  maxLength="3"
                  required
                />
              </div>
            </div>
            <button type="submit">Pay {selectedPlan.price}</button>
            <button type="button" className="secondary" onClick={() => setSelectedPlan(null)}>
              &larr; Choose a different plan
            </button>
          </form>
          <p className="disclaimer">This is a demo form — no real payment is processed.</p>
        </div>
      </div>
    );
  }
  return (
    <div className="payment-page">
      <h1 className="page-title">Go Premium</h1>
      <p className="page-subtitle">Unlock full workout tracking and progress insights.</p>

      <div className="plans">
        {plans.map((plan) => (
          <div key={plan.name} className={`plan-card ${plan.highlight ? 'highlight' : ''}`}>
            {plan.highlight && <span className="badge">Best Value</span>}
            <h3>{plan.name}</h3>
            <p className="plan-price">{plan.price}<span>{plan.period}</span></p>
            <button onClick={() => setSelectedPlan(plan)}>Choose {plan.name}</button>
          </div>
        ))}
      </div>
    </div>
  );
}