// src/hooks/useScrollAnimation.js
import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for adding scroll animations to components
 * @param {string} animation - Animation type ('fade', 'slide-left', 'slide-right', 'zoom')
 * @param {number} threshold - Visibility threshold (0 to 1)
 * @param {number} delay - Animation delay in ms
 * @returns {Object} - Contains ref to attach to element and isVisible state
 */
const useScrollAnimation = (animation = 'fade', threshold = 0.1, delay = 0) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When element enters viewport
        if (entry.isIntersecting) {
          // Add delay before showing the element
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          
          // Once animation is triggered, we can unobserve
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, delay]);

  return { ref, isVisible, animationType: animation };
};

export default useScrollAnimation;