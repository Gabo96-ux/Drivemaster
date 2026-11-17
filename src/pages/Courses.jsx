import { useState } from "react"
import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"
import { useCourses } from "../hooks/useCourses"
import "./Courses.css"

const Courses = () => {
  const [filter, setFilter] = useState("all")
  const { courses, loading } = useCourses(filter)

  return (
    <main className="courses-page">
      <section className="page-hero">
        <h1>Our <span className="title-red">Programmes</span></h1>
        <p>Tailored courses for every driver.</p>
      </section>

      <section className="courses-filter">
        <div className="filter-tabs">
          {["all", "beginner", "intermediate", "advanced", "specialist"].map((tab) => (
            <button
              key={tab}
              className={`filter-btn ${filter === tab ? "filter-btn--active" : ""}`}
              onClick={() => setFilter(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </section>

      {loading ? (
        <div className="courses-grid"><p>Loading...</p></div>
      ) : (
        <section className="courses-grid">
          {courses.map((course) => (
            <div className="course-card" key={course.id}>
              <div className="course-img">
                <img src={course.image_url} alt={course.title} loading="lazy" />
              </div>
              <div className="course-body">
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <div className="course-footer">
                  <span className="course-price">{course.price}</span>
                  <span className="course-arrow"><ArrowUpRight size={18} /></span>
                </div>
              </div>
            </div>
          ))}
        </section>
      )}
    </main>
  )
}

export default Courses