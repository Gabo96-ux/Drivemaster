import { Link } from "react-router-dom";
import "./BookingCTA.css";

const BookingCTA = () => {
  return (
    <section className="booking-cta">
      <div className="booking-cta__bg"></div>
      <div className="booking-cta__content">
        <h2>Start your driving journey today.</h2>
        <p>Book a session with one of our certified instructors.</p>
        <Link to="/booking" className="cta-btn">
          Book Now
        </Link>
      </div>
    </section>
  );
};

export default BookingCTA;