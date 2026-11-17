import "./Process.css";

const steps = [
  { step: "01", title: "Register", desc: "Choose your programme online." },
  { step: "02", title: "Learn Theory", desc: "Interactive modules & simulator." },
  { step: "03", title: "Practical Lessons", desc: "One‑on‑one with an expert." },
  { step: "04", title: "Mock Test", desc: "Real‑world road test preparation." },
  { step: "05", title: "Get Licensed", desc: "Confidence for your driving test." },
];

const Process = () => {
  return (
    <section className="process">
      <div className="process__inner">
        <h2 className="section-title">How it <span className="title-red">works</span></h2>
        <div className="process-timeline">
          {steps.map((item, idx) => (
            <div className="process-step" key={idx}>
              <div className="step-marker">
                <span className="step-number">{item.step}</span>
                <div className="step-line"></div>
              </div>
              <div className="step-content">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;