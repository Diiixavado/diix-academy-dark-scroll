import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
};

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale-in' | 'zoom-in';
  delay?: number;
  duration?: number;
  threshold?: number;
}

export const ScrollReveal = ({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0,
  duration = 800,
  threshold = 0.1,
}: ScrollRevealProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold });

  const animationStyles: Record<string, { hidden: React.CSSProperties; visible: React.CSSProperties }> = {
    'fade-up': {
      hidden: { opacity: 0, transform: 'translateY(60px)' },
      visible: { opacity: 1, transform: 'translateY(0)' },
    },
    'fade-in': {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    'slide-left': {
      hidden: { opacity: 0, transform: 'translateX(-80px)' },
      visible: { opacity: 1, transform: 'translateX(0)' },
    },
    'slide-right': {
      hidden: { opacity: 0, transform: 'translateX(80px)' },
      visible: { opacity: 1, transform: 'translateX(0)' },
    },
    'scale-in': {
      hidden: { opacity: 0, transform: 'scale(0.8)' },
      visible: { opacity: 1, transform: 'scale(1)' },
    },
    'zoom-in': {
      hidden: { opacity: 0, transform: 'scale(0.9) translateY(20px)' },
      visible: { opacity: 1, transform: 'scale(1) translateY(0)' },
    },
  };

  const style = animationStyles[animation];

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...(isVisible ? style.visible : style.hidden),
        transition: `all ${duration}ms cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
        willChange: 'transform, opacity',
      }}
    >
      {children}
    </div>
  );
};

export default useScrollAnimation;
