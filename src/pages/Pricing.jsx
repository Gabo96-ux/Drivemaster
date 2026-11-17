import { Check } from 'lucide-react';
import './Pricing.css';

const plans = [
  {
    name: 'Beginner',
    price: '₦120,000',
    features: ['10 lessons', 'Vehicle provided', 'Theory test prep', 'Certificate'],
    popular: false,
  },
  {
    name: 'Standard',
    price: '₦180,000',
    features: ['15 lessons', 'Highway driving', 'Mock test', 'Flexible timing', 'Roadside assistance'],
    popular: true,
  },
  {
    name: 'Premium',
    price: '₦250,000',
    features: ['20 lessons', 'Advanced maneuvers', 'Night driving', 'Personal instructor', 'Unlimited test retakes', 'Free pick‑up'],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <main className="pricing-page">
      <section className="page-hero">
        <h1>Simple, <span className="title-red">transparent</span> pricing</h1>
        <p>No hidden fees. Cancel anytime.</p>
      </section>

      <section className="pricing-grid">
        {plans.map((plan, idx) => (
          <div className={`price-card ${plan.popular ? 'price-card--popular' : ''}`} key={idx}>
            {plan.popular && <span className="popular-badge">Most Popular</span>}
            <h3>{plan.name}</h3>
            <div className="price">{plan.price}</div>
            <ul className="price-features">
              {plan.features.map((feat, i) => (
                <li key={i}><Check size={16} /> {feat}</li>
              ))}
            </ul>
            <button className="price-btn">Choose Plan</button>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Pricing;