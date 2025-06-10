import { useEffect, useState } from 'react';

// Custom hook for scroll animations
export const useScrollAnimation = (threshold = 0.1) => {
  const [elements, setElements] = useState([]);
  const [observedElements, setObservedElements] = useState(new Set());

  useEffect(() => {
    // Configure Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !observedElements.has(entry.target)) {
            // Add animation class when element is visible
            entry.target.classList.add('animate-fade-in-up');
            
            // Mark this element as observed (animated) to avoid re-animation
            setObservedElements((prev) => new Set(prev).add(entry.target));
          }
        });
      },
      {
        root: null, // viewport
        rootMargin: '0px',
        threshold, // percentage of element's visibility needed to trigger callback
      }
    );

    // Observe all elements that need animation
    if (elements.length > 0) {
      elements.forEach((el) => {
        if (!observedElements.has(el)) {
          // Add initial hidden state
          el.classList.add('opacity-0');
          observer.observe(el);
        }
      });
    }

    // Cleanup observer on unmount
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [elements, threshold, observedElements]);

  // Function to register elements for observation
  const registerElement = (element) => {
    if (element && !elements.includes(element)) {
      setElements((prev) => [...prev, element]);
    }
  };

  return { registerElement };
};

export default useScrollAnimation; 