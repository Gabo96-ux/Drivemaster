import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import gsap from '../lib/gsapConfig';
import './Vehicles.css';

const fleet = [
  {
    name: 'Toyota Camry',
    type: 'Sedan / Automatic',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80',
    features: 'Dual controls, air conditioning, ABS',
  },
  {
    name: 'Honda Civic',
    type: 'Sedan / Manual',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80',
    features: 'Parking sensors, learner-friendly clutch',
  },
  {
    name: 'Mercedes-Benz A-Class',
    type: 'Hatchback / Automatic',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80',
    features: 'Panoramic roof, lane assist, premium sound',
  },
  {
    name: 'Ford Ranger',
    type: 'Pickup / Manual',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
    features: 'Off‑road capable, heavy‑duty brakes',
  },
];

const Vehicles = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.vehicle-card');
    if (!cards.length) return;

    gsap.set(cards, { opacity: 0, y: 60 });

    const ctx = gsap.context(() => {
      gsap.to(cards, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.vehicles-grid',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        onComplete: () => {
          cards.forEach((card) => {
            card.style.opacity = '1';
            card.style.transform = 'none';
          });
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="vehicles-page">
      <section className="page-hero">
        <h1>Our <span className="title-red">Fleet</span></h1>
        <p>Modern, safe, and meticulously maintained vehicles.</p>
      </section>

      <section className="vehicles-grid">
        {fleet.map((car, idx) => (
          <div className="vehicle-card" key={idx}>
            <div className="vehicle-img">
              <img src={car.image} alt={car.name} loading="lazy" />
            </div>
            <div className="vehicle-info">
              <h3>{car.name}</h3>
              <p className="vehicle-type">{car.type}</p>
              <p className="vehicle-features">{car.features}</p>
              <Link to="/booking" className="vehicle-cta">
                Book this car <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Vehicles;