import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <h3>ELIS<span className="logo-red">HEAVEN</span></h3>
          <p>Premium driving education.</p>
        </div>
        <div className="footer__links">
          <a href="/courses">Courses</a>
          <a href="/instructors">Instructors</a>
          <a href="/contact">Contact</a>
          <a href="/booking">Book Now</a>
        </div>
        <div className="footer__copy">
          © {new Date().getFullYear()} DriveMaster. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;