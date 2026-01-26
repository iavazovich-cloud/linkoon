import { useEffect, useRef, useState, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const Reveal = ({ children, className = '', delay = 0 }: RevealProps) => {
  // Start visible for SSR, then animate on client
  const [isClient, setIsClient] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // Default to visible for SSR
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsClient(true);
    // Reset to invisible on client mount, then let IntersectionObserver trigger
    setIsVisible(false);
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '50px' } // Added rootMargin for mobile
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  // For SSR, render without animation wrapper
  if (!isClient) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
