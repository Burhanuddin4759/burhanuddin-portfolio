// src/components/AnimatedSection.js
import React from 'react';
import useScrollAnimation from '../../utils/useScrollAnimation';
import '../../Animation.css'

/**
 * A wrapper component that adds scroll animations
 * @param {Object} props - Component props
 * @param {string} props.animation - Animation type ('fade', 'slide-left', 'slide-right', 'zoom')
 * @param {number} props.threshold - Visibility threshold (0-1)
 * @param {number} props.delay - Animation delay in ms
 * @param {React.ReactNode} props.children - Child components
 * @param {string} props.className - Additional CSS classes
 */
const AnimatedSection = ({ 
  animation = 'fade',
  threshold = 0.1,
  delay = 0,
  children,
  className = '',
  ...props
}) => {
  const { ref, isVisible, animationType } = useScrollAnimation(animation, threshold, delay);

  return (
    <div
      ref={ref}
      className={`scroll-animated animation-${animationType} ${isVisible ? 'visible' : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;