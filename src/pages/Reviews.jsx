import { Star } from 'lucide-react';
import './Reviews.css';

const reviews = [
  {
    name: 'Chioma Adeyemi',
    role: 'Student',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    text: 'I passed my test on the first try! The instructor was calm and incredibly patient.',
    rating: 5,
  },
  {
    name: 'Emeka Okafor',
    role: 'Parent',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    text: 'My son now drives with absolute confidence. The process was seamless.',
    rating: 5,
  },
  {
    name: 'Aisha Bello',
    role: 'Beginner Driver',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80',
    text: 'I was terrified of the highway. My instructor turned that fear into excitement.',
    rating: 5,
  },
  {
    name: 'Tunde Bakare',
    role: 'Professional',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    text: 'Flexible scheduling around my work hours was a lifesaver. Highly recommend.',
    rating: 4,
  },
];

const Reviews = () => {
  return (
    <main className="reviews-page">
      <section className="page-hero">
        <h1>What our <span className="title-red">students</span> say</h1>
        <p>Real stories from real drivers.</p>
      </section>

      <section className="reviews-grid">
        {reviews.map((review, idx) => (
          <div className="review-card" key={idx}>
            <div className="review-stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill={i < review.rating ? '#E10600' : 'none'} color="#E10600" />
              ))}
            </div>
            <p className="review-text">"{review.text}"</p>
            <div className="review-author">
              <img src={review.image} alt={review.name} />
              <div>
                <strong>{review.name}</strong>
                <span>{review.role}</span>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Reviews;