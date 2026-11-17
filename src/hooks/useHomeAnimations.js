import { useLayoutEffect } from 'react';
import gsap from '../lib/gsapConfig';  // use the shared instance

const useHomeAnimations = () => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Hero
      const heroChildren = document.querySelectorAll('.hero-content > *');
      if (heroChildren.length) {
        gsap.set(heroChildren, { opacity: 0, y: 60 });
        gsap.to(heroChildren, {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.15,
          ease: 'power3.out',
          delay: 0.3,
        });
      }

      // Stats counter
      document.querySelectorAll('.stat-number').forEach((stat) => {
        const target = parseFloat(stat.dataset.target) || 0;
        const suffix = stat.dataset.suffix || '';
        gsap.to({ value: 0 }, {
          value: target,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: stat,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          onUpdate: function () {
            stat.textContent = Math.floor(this.targets()[0].value) + suffix;
          },
        });
      });

      // Cards, steps, features
      gsap.from('.course-card', {
        y: 60, opacity: 0, duration: 0.8, stagger: 0.1,
        scrollTrigger: { trigger: '.courses-grid', start: 'top 80%' }
      });
      gsap.from('.process-step', {
        x: -30, opacity: 0, duration: 0.7, stagger: 0.15,
        scrollTrigger: { trigger: '.process-timeline', start: 'top 85%' }
      });
      gsap.from('.feature-item', {
        scale: 0.9, opacity: 0, y: 30, duration: 0.7, stagger: 0.1,
        scrollTrigger: { trigger: '.features-grid', start: 'top 85%' }
      });
      gsap.to('.booking-cta__bg', {
        yPercent: 15, ease: 'none',
        scrollTrigger: { trigger: '.booking-cta', start: 'top bottom', end: 'bottom top', scrub: true }
      });
    }, document.body); // scope helps cleanup

    return () => ctx.revert(); // clean up all GSAP instances
  }, []);
};

export default useHomeAnimations;