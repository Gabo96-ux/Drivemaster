import { useEffect } from "react"
import gsap from "../lib/gsapConfig"
import { useInstructors } from "../hooks/useInstructors"
import "./Instructors.css"

const Instructors = () => {
  const { instructors, loading } = useInstructors()

  useEffect(() => {
    if (loading || !instructors.length) return
    const cards = document.querySelectorAll(".instructor-card")
    if (!cards.length) return

    gsap.set(cards, { opacity: 0, y: 60 })
    const ctx = gsap.context(() => {
      gsap.to(cards, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".instructors-grid",
          start: "top 85%",
          toggleActions: "play none none none",
        },
        onComplete: () => {
          cards.forEach((card) => {
            card.style.opacity = "1"
            card.style.transform = "none"
          })
        },
      })
    })
    return () => ctx.revert()
  }, [instructors, loading]) // re-run when data arrives

  return (
    <main className="instructors-page">
      <section className="page-hero">
        <h1>Meet your <span className="title-red">instructors</span></h1>
        <p>Professional, passionate, and dedicated to your success.</p>
      </section>

      {loading ? (
        <div className="instructors-grid"><p>Loading instructors...</p></div>
      ) : (
        <section className="instructors-grid">
          {instructors.map((inst) => (
            <div className="instructor-card" key={inst.id}>
              <div className="instructor-img">
                <img src={inst.photo_url} alt={inst.name} loading="lazy" />
              </div>
              <div className="instructor-info">
                <h3>{inst.name}</h3>
                <p className="instructor-role">{inst.role}</p>
                <p className="instructor-bio">{inst.bio}</p>
              </div>
            </div>
          ))}
        </section>
      )}
    </main>
  )
}

export default Instructors