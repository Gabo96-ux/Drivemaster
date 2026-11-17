import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const refreshScrollTriggers = () => {
  ScrollTrigger.refresh();
};

export default gsap;