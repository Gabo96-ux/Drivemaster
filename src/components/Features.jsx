import { Users, Car, Calendar, Award } from "lucide-react";
import "./Features.css";

const features = [
  { icon: <Users size={32} />, title: "Expert Instructors", desc: "Certified, patient, and highly experienced." },
  { icon: <Car size={32} />, title: "Modern Fleet", desc: "Latest vehicles with dual controls & safety tech." },
  { icon: <Calendar size={32} />, title: "Flexible Scheduling", desc: "Weekdays, weekends, and evening slots available." },
  { icon: <Award size={32} />, title: "Proven Results", desc: "98% first‑time pass rate speaks for itself." },
];

const Features = () => {
  return (
    <section className="features">
      <div className="features__inner">
        <h2 className="section-title">Why <span className="title-red">DriveMaster</span></h2>
        <div className="features-grid">
          {features.map((f, idx) => (
            <div className="feature-item" key={idx}>
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;