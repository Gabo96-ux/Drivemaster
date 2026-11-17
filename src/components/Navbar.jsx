import { useState, useEffect } from "react";
import { useAuth } from "../lib/AuthContext";
import { Link, useLocation } from "react-router-dom";
import { Gauge, Menu, X, Zap, User, LogOut, LogIn } from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { user, signOut } = useAuth();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "Instructors", path: "/instructors" },
    { name: "Vehicles", path: "/vehicles" },
    { name: "Pricing", path: "/pricing" },
    { name: "Reviews", path: "/reviews" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className={`hud-nav ${scrolled ? "hud-nav--scrolled" : ""}`}>
      <div className="hud-nav__inner glass">
        {/* Logo */}
        <Link to="/" className="hud-nav__logo">
          <div className="tach-logo">
            <Gauge size={26} className="tach-icon" />
            <span className="tach-arc"></span>
          </div>
          <span className="logo-text">
            ELIS<span className="logo-red">HEAVEN</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hud-nav__links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={`hud-nav__link ${
                  location.pathname === link.path ? "hud-nav__link--active" : ""
                }`}
              >
                {link.name}
                {location.pathname === link.path && <span className="link-indicator"></span>}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Auth Actions */}
        <div className="hud-nav__actions">
          {user ? (
            <div className="hud-nav__user-menu">
              <Link to="/admin" className="hud-nav__user-link">
                <User size={18} />
                <span>Dashboard</span>
              </Link>
              <button onClick={signOut} className="hud-nav__logout-btn">
                <LogOut size={18} />
              </button>
            </div>
          ) : (
            <div className="hud-nav__auth-group">
              <Link to="/login" className="hud-nav__login-link">
                <LogIn size={16} />
                <span>Sign In</span>
              </Link>
              <Link to="/booking" className="hud-nav__cta">
                <Zap size={16} />
                <span>Book Now</span>
              </Link>
            </div>
          )}
        </div>

        {/* Mobile toggle */}
        <button
          className="hud-nav__toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`hud-mobile ${isOpen ? "hud-mobile--open" : ""}`}>
        <div className="glass" style={{ padding: "2rem", borderRadius: "20px" }}>
          <ul className="hud-mobile__links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`hud-mobile__link ${
                    location.pathname === link.path ? "hud-mobile__link--active" : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="hud-mobile__auth">
            {user ? (
              <>
                <Link to="/admin" className="hud-mobile__link" onClick={() => setIsOpen(false)}>
                  Dashboard
                </Link>
                <button
                  onClick={() => {
                    signOut();
                    setIsOpen(false);
                  }}
                  className="hud-nav__cta"
                  style={{ marginTop: "1rem", width: "fit-content" }}
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="hud-mobile__link" onClick={() => setIsOpen(false)}>
                  Sign In
                </Link>
                <Link to="/register" className="hud-mobile__link" onClick={() => setIsOpen(false)}>
                  Register
                </Link>
                <Link to="/booking" className="hud-nav__cta" style={{ marginTop: "1rem" }} onClick={() => setIsOpen(false)}>
                  <Zap size={16} />
                  <span>Book Now</span>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;