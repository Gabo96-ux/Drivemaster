import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Play } from "lucide-react";
import "./Hero.css";

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    heroRef.current?.classList.add("hero--visible");
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-bg"></div>
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <p className="hero-tagline">PREMIUM DRIVING ACADEMY</p>
        <h1 className="hero-title">
          Master the road.<br />
          <span className="hero-accent">Effortlessly.</span>
        </h1>
        <p className="hero-subtitle">
          Expert tuition, modern fleet, and a programme designed for confidence.
        </p>

        <Link to="/booking" className="hero-cta">
          <span>Book a drive</span>
          <span className="cta-icon">
            <Play size={15} fill="currentColor" />
          </span>
        </Link>
      </div>
    </section>
  );
};

export default Hero;