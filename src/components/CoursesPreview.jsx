import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"
import { useCourses } from "../hooks/useCourses"
import "./CoursesPreview.css"

const CoursesPreview = () => {
  const { courses, loading } = useCourses("all")
  const previewCourses = courses.slice(0, 4) // show max 4

  return (
    <section className="courses-preview">
      <div className="courses-preview__header">
        <h2 className="section-title">Our <span className="title-red">Programmes</span></h2>
        <Link to="/courses" className="view-all">
          View all courses <ArrowUpRight size={16} />
        </Link>
      </div>
      {loading ? (
        <div className="courses-grid"><p>Loading courses...</p></div>
      ) : (
        <div className="courses-grid">
          {previewCourses.map((course) => (
            <div className="course-card" key={course.id} style={{ opacity: 1, transform: 'none' }}>
              <div className="course-img">
                <img src={course.image_url} alt={course.title} loading="lazy" />
              </div>
              <div className="course-body">
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <div className="course-footer">
                  <span className="course-price">{course.price}</span>
                  <span className="course-arrow">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default CoursesPreview