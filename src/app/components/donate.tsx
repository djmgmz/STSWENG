'use client';

import { useState } from 'react';

export default function Donate() {
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);

  const paymentMethods = [
    {
      name: "GCash",
      instructions: [
        "1. Open your GCash app",
        "2. Tap 'Send Money'",
        "3. Enter our GCash number: 0917-123-4567",
        "4. Enter your donation amount",
        "5. Add your name in the message (optional)",
        "6. Complete the transaction",
        "would probably add a qr option if ever"
      ],
      details: "Lorem ipsum dolor sit amet consectetur adipiscing elit."
    },
    {
      name: "Bank Transfer", 
      instructions: [
        "1. Go to your bank's mobile app or website",
        "2. Lorem ipsum dolor sit amet consectetur adipiscing elit."
      ],
      details: "Lorem ipsum dolor sit amet consectetur adipiscing elit."
    },
    {
      name: "Others",
      instructions: [
        "Lorem ipsum dolor sit amet consectetur adipiscing elit."
      ],
      details: "Lorem ipsum dolor sit amet consectetur adipiscing elit."
    }
  ];

  return (
    <main style={{ paddingTop: '30px',}}>
      <div className="container">
        {/* Hero Section */}
        <div className="section">
          <h1 className="section-title">Support Our Mission</h1>
          <p className="hero-description" style={{ textAlign: 'center', color: 'var(--dark-gray)', marginBottom: '-9rem' }}>
            Choose your Payment Method
          </p>
        </div>

        {/* Payment Methods */}
        <div className="section">
          
          {/* Payment Method Buttons */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
            {paymentMethods.map((method, index) => (
              <button
                key={index}
                className={`payment-method-btn ${selectedMethod === method.name ? 'active' : ''}`}
                onClick={() => setSelectedMethod(method.name)}
              >
                {method.name}
              </button>
            ))}
          </div>

          {/* Instructions Display */}
          {selectedMethod && (
            <div className="payment-instructions">
              <h3 style={{ color: 'var(--primary-maroon)', marginBottom: '1.5rem', textAlign: 'center' }}>
                {selectedMethod} Donation Instructions
              </h3>
              
              <div className="instructions-card">
                <div className="instructions-list">
                  {paymentMethods.find(m => m.name === selectedMethod)?.instructions.map((step, index) => (
                    <div key={index} className="instruction-step">
                      {step}
                    </div>
                  ))}
                </div>
                
                <div className="payment-details">
                  {paymentMethods.find(m => m.name === selectedMethod)?.details}
                </div>
              </div>

              <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <p style={{ color: 'var(--dark-gray)', marginBottom: '-2rem' }}>
                  After completing your donation, please email us at <strong>sample@email.org</strong> with your details for proper acknowledgment.
                </p>
              </div>
            </div>
          )}

          {/* Default message when no method selected */}
          {!selectedMethod && (
            <div style={{ textAlign: 'center', color: 'var(--dark-gray)', fontStyle: 'italic', marginTop: '2rem' }}>
              Please select a payment method above to view donation instructions
            </div>
          )}
        </div>
      </div>
    </main>
  );
}