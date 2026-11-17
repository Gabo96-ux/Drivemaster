import { useState, useEffect } from "react";
import { Calendar, Clock, User, Car, ArrowRight } from "lucide-react";
import gsap from "../lib/gsapConfig";
import { supabase } from "../lib/supabase";
import { useAuth } from "../lib/AuthContext";
import { useCourses } from "../hooks/useCourses";
import { useInstructors } from "../hooks/useInstructors";
import "./Booking.css";

const timeSlots = [
  "09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00",
];

const Booking = () => {
  const { user } = useAuth();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    instructor: "",
    date: "",
    time: "",
  });

  const { courses, loading: coursesLoading } = useCourses("all");
  const { instructors, loading: instructorsLoading } = useInstructors();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // GSAP entrance animations
  useEffect(() => {
    const page = document.querySelector(".booking-page");
    if (!page) return;
    gsap.set(page, { opacity: 0, y: 30 });
    gsap.set(".booking-form .form-row", { opacity: 0, y: 20 });
    gsap.set(".booking-summary", { opacity: 0, x: 30 });

    const ctx = gsap.context(() => {
      gsap.to(page, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" });
      gsap.to(".booking-form .form-row", {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.08,
        delay: 0.3,
        ease: "power2.out",
        onComplete: () => {
          document.querySelectorAll(".booking-form .form-row").forEach((row) => {
            row.style.opacity = "1";
            row.style.transform = "none";
          });
        },
      });
      gsap.to(".booking-summary", {
        opacity: 1,
        x: 0,
        duration: 0.8,
        delay: 0.5,
        ease: "power3.out",
        onComplete: () => {
          const summary = document.querySelector(".booking-summary");
          if (summary) {
            summary.style.opacity = "1";
            summary.style.transform = "none";
          }
        },
      });
    });
    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      alert("Please log in to book a lesson.");
      return;
    }
    const { error } = await supabase.from("bookings").insert([
      {
        student_name: form.name,
        email: form.email,
        phone: form.phone,
        course_id: parseInt(form.course),
        instructor_id: parseInt(form.instructor),
        booking_date: form.date,
        booking_time: form.time,
        user_id: user.id,          // links to authenticated user
      },
    ]);
    if (error) {
      alert("Booking failed: " + error.message);
    } else {
      alert("Booking confirmed! We'll contact you soon.");
      setForm({ name: "", email: "", phone: "", course: "", instructor: "", date: "", time: "" });
    }
  };

  const selectedCourse = courses.find((c) => c.id === parseInt(form.course));
  const selectedInstructor = instructors.find((i) => i.id === parseInt(form.instructor));

  return (
    <main className="booking-page">
      <div className="booking-container">
        <section className="booking-form-section">
          <h1>Book a <span className="title-red">lesson</span></h1>
          <p className="booking-subtitle">Reserve your spot in minutes.</p>

          <form onSubmit={handleSubmit} className="booking-form">
            <div className="form-row">
              <label>Full Name</label>
              <input type="text" name="name" value={form.name} onChange={handleChange} required />
            </div>
            <div className="form-row">
              <label>Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} required />
            </div>
            <div className="form-row">
              <label>Phone</label>
              <input type="tel" name="phone" value={form.phone} onChange={handleChange} required />
            </div>
            <div className="form-row">
              <label>Course</label>
              <select name="course" value={form.course} onChange={handleChange} required>
                <option value="">Select course</option>
                {courses.map((c) => (
                  <option key={c.id} value={c.id}>{c.title}</option>
                ))}
              </select>
            </div>
            <div className="form-row">
              <label>Instructor</label>
              <select name="instructor" value={form.instructor} onChange={handleChange} required>
                <option value="">Choose instructor</option>
                {instructors.map((inst) => (
                  <option key={inst.id} value={inst.id}>{inst.name}</option>
                ))}
              </select>
            </div>
            <div className="form-row">
              <label>Date</label>
              <input type="date" name="date" value={form.date} onChange={handleChange} required />
            </div>
            <div className="form-row">
              <label>Time</label>
              <select name="time" value={form.time} onChange={handleChange} required>
                <option value="">Pick a time</option>
                {timeSlots.map((slot) => (
                  <option key={slot} value={slot}>{slot}</option>
                ))}
              </select>
            </div>
            <button type="submit" className="submit-btn">
              Confirm Booking <ArrowRight size={18} />
            </button>
          </form>
        </section>

        <aside className="booking-summary glass">
          <h2>Your Lesson</h2>
          <div className="summary-detail">
            <User size={18} />
            <span>{form.name || "Your name"}</span>
          </div>
          <div className="summary-detail">
            <Car size={18} />
            <span>{selectedCourse ? selectedCourse.title : "No course selected"}</span>
          </div>
          <div className="summary-detail">
            <Calendar size={18} />
            <span>{form.date || "No date"}</span>
          </div>
          <div className="summary-detail">
            <Clock size={18} />
            <span>{form.time || "No time"}</span>
          </div>
          <div className="summary-total">
            Estimated: <strong>{selectedCourse ? selectedCourse.price : "—"}</strong>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default Booking;