import Hero from "../components/Hero";
import Stats from "../components/Stats";
import CoursesPreview from "../components/CoursesPreview";
import Process from "../components/Process";
import BookingCTA from "../components/BookingCTA";
import Features from "../components/Features";
import Footer from "../components/Footer";
import useHomeAnimations from "../hooks/useHomeAnimations";


const Home = () => {
    useHomeAnimations();
  return (
    <>
      <Hero />
      <Stats />
      <CoursesPreview />
      <Process />
      <BookingCTA />
      <Features />
    </>
  );
};

export default Home;