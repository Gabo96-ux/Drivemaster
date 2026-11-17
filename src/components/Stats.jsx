import "./Stats.css";

const stats = [
  { number: "10", suffix: "+", label: "Years Experience" },
  { number: "98", suffix: "%", label: "Pass Rate" },
  { number: "25", suffix: "K+", label: "Students Trained" },
  { number: "15", suffix: "+", label: "Expert Instructors" },
];

const Stats = () => {
  return (
    <section className="stats">
      <div className="stats__inner">
        {stats.map((item, index) => (
          <div className="stat-item" key={index}>
            <span
              className="stat-number"
              data-target={item.number}
              data-suffix={item.suffix}
            >
              0{item.suffix}
            </span>
            <span className="stat-label">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;