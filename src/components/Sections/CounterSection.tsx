"use client";

import { motion, easeOut, easeInOut } from "framer-motion";
import { useEffect, useState } from "react";
import { Code, Monitor, Users, Award } from "lucide-react";

export function CounterSection() {
  const [isVisible, setIsVisible] = useState(false);

  const counters = [
    {
      icon: Code,
      end: 2.5,
      suffix: "+",
      label: "Years Experience",
      color: "text-primary",
    },
    {
      icon: Monitor,
      end: 50,
      suffix: "+",
      label: "Projects Completed",
      color: "text-primary",
    },
    {
      icon: Users,
      end: 10,
      suffix: "+",
      label: "Clients & Collaborators",
      color: "text-primary",
    },
    {
      icon: Award,
      end: 5,
      suffix: "+",
      label: "Open Source Contributions",
      color: "text-primary",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: easeOut,
      },
    },
  };

  // Circular pattern animation variants
  const circleVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.6, 0.3],
      transition: {
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        ease: easeInOut,
      },
    },
  };

  const circleVariants2 = {
    animate: {
      scale: [1.2, 1, 1.2],
      opacity: [0.6, 0.3, 0.6],
      transition: {
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        ease: easeInOut,
        delay: 1,
      },
    },
  };

  const circleVariants3 = {
    animate: {
      scale: [1, 1.4, 1],
      opacity: [0.2, 0.4, 0.2],
      transition: {
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        ease: easeInOut,
        delay: 2,
      },
    },
  };

  return (
    <section className="py-8 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glowing-border">
          <div className="glowing-border-content bg-background rounded-3xl">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              onViewportEnter={() => setIsVisible(true)}
              className="border border-border rounded-3xl backdrop-blur-sm relative overflow-hidden"
            >
              {/* Grid Background */}
              <div className="absolute inset-0 opacity-40">
                <svg
                  className="w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    {/* Light mode grid pattern with emerald glow */}
                    <pattern
                      id="counter-grid-light"
                      width="40"
                      height="40"
                      patternUnits="userSpaceOnUse"
                    >
                      <defs>
                        <filter id="emerald-glow">
                          <feGaussianBlur
                            stdDeviation="1.5"
                            result="coloredBlur"
                          />
                          <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                      </defs>
                      <path
                        d="M 40 0 L 0 0 0 40"
                        fill="none"
                        stroke="rgb(16 185 129)"
                        strokeWidth="1"
                        opacity="0.5"
                        filter="url(#emerald-glow)"
                      />
                    </pattern>

                    {/* Dark mode grid pattern with white glow */}
                    <pattern
                      id="counter-grid-dark"
                      width="40"
                      height="40"
                      patternUnits="userSpaceOnUse"
                    >
                      <defs>
                        <filter id="white-glow">
                          <feGaussianBlur
                            stdDeviation="2"
                            result="coloredBlur"
                          />
                          <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                      </defs>
                      <path
                        d="M 40 0 L 0 0 0 40"
                        fill="none"
                        stroke="rgba(255, 255, 255, 0.5)"
                        strokeWidth="2"
                        opacity="0.8"
                        filter="url(#white-glow)"
                      />
                    </pattern>

                    {/* Animated grid lines for extra glow effect */}
                    <pattern
                      id="counter-grid-animated"
                      width="120"
                      height="120"
                      patternUnits="userSpaceOnUse"
                    >
                      <defs>
                        <filter id="intense-glow">
                          <feGaussianBlur
                            stdDeviation="3"
                            result="coloredBlur"
                          />
                          <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                      </defs>
                      {/* Vertical glowing line */}
                      <line
                        x1="60"
                        y1="0"
                        x2="60"
                        y2="120"
                        stroke="rgb(16 185 129)"
                        strokeWidth="2"
                        opacity="0.8"
                        filter="url(#intense-glow)"
                        className="dark:stroke-white"
                      />
                      {/* Horizontal glowing line */}
                      <line
                        x1="0"
                        y1="60"
                        x2="120"
                        y2="60"
                        stroke="rgb(16 185 129)"
                        strokeWidth="2"
                        opacity="0.8"
                        filter="url(#intense-glow)"
                        className="dark:stroke-white"
                      />
                    </pattern>
                  </defs>

                  {/* Base grid for light mode */}
                  <rect
                    width="100%"
                    height="100%"
                    fill="url(#counter-grid-light)"
                    className="dark:hidden"
                  />

                  {/* Base grid for dark mode */}
                  <rect
                    width="100%"
                    height="100%"
                    fill="url(#counter-grid-dark)"
                    className="hidden dark:block"
                  />

                  {/* Animated glowing grid lines overlay */}
                  <rect
                    width="100%"
                    height="100%"
                    fill="url(#counter-grid-animated)"
                    opacity="0.3"
                  />
                </svg>
              </div>

              {/* Animated grid pulse overlay */}
              <motion.div
                className="absolute inset-0 opacity-20"
                animate={{
                  background: [
                    "radial-gradient(circle at 25% 25%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)",
                    "radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)",
                    "radial-gradient(circle at 25% 75%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)",
                    "radial-gradient(circle at 75% 25%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)",
                    "radial-gradient(circle at 25% 25%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)",
                  ],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />

              {/* Left Side Circular Patterns */}
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 pointer-events-none">
                {/* Inner filled circles */}
                <motion.div
                  variants={circleVariants}
                  animate="animate"
                  className="absolute inset-0 w-52 h-52 bg-emerald-500/15 dark:bg-emerald-400/15 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
                <motion.div
                  variants={circleVariants}
                  animate="animate"
                  className="absolute inset-0 w-40 h-40 bg-emerald-500/20 dark:bg-emerald-400/15 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
                <motion.div
                  variants={circleVariants}
                  animate="animate"
                  className="absolute inset-0 w-32 h-32 bg-emerald-500/30 dark:bg-emerald-400/15 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
                <motion.div
                  variants={circleVariants2}
                  animate="animate"
                  className="absolute inset-0 w-20 h-20 bg-emerald-500/35 dark:bg-emerald-400/25 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
              </div>

              {/* Right Side Circular Patterns */}
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 pointer-events-none">
                {/* Inner filled circles */}
                <motion.div
                  variants={circleVariants3}
                  animate="animate"
                  className="absolute inset-0 w-52 h-52 bg-emerald-500/15 dark:bg-emerald-400/15 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
                <motion.div
                  variants={circleVariants3}
                  animate="animate"
                  className="absolute inset-0 w-40 h-40 bg-emerald-500/20 dark:bg-emerald-400/15 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
                <motion.div
                  variants={circleVariants3}
                  animate="animate"
                  className="absolute inset-0 w-32 h-32 bg-emerald-500/30 dark:bg-emerald-400/15 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
                <motion.div
                  variants={circleVariants}
                  animate="animate"
                  className="absolute inset-0 w-20 h-20 bg-emerald-500/35 dark:bg-emerald-400/25 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
              </div>

              {/* Additional floating circles for more depth */}
              <div className="absolute left-1/4 top-1/4 pointer-events-none">
                <motion.div
                  variants={circleVariants3}
                  animate="animate"
                  className="w-16 h-16 bg-emerald-500/5 dark:bg-emerald-400/10 rounded-full"
                />
              </div>

              <div className="absolute right-1/4 bottom-1/4 pointer-events-none">
                <motion.div
                  variants={circleVariants}
                  animate="animate"
                  className="w-12 h-12 bg-emerald-500/8 dark:bg-emerald-400/12 rounded-full"
                />
              </div>

              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-emerald-500/5 dark:from-emerald-400/10 dark:via-transparent dark:to-emerald-400/10 rounded-3xl" />

              <div className="relative z-10 py-16 px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
                  {counters.map((counter, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="text-center font-mono"
                    >
                      <div className="counter-item">
                        <div className="content mx-auto">
                          <div className="mb-4">
                            <counter.icon
                              className={`w-8 h-8 mx-auto ${counter.color}`}
                            />
                          </div>
                          <h2 className="text-4xl lg:text-5xl font-bold mb-2 text-emerald-500 dark:text-emerald-400">
                            <CountUpAnimation
                              end={counter.end}
                              isVisible={isVisible}
                              duration={2000}
                            />
                            <span className="text-4xl lg:text-5xl text-emerald-500 dark:text-emerald-400">
                              {counter.suffix}
                            </span>
                          </h2>
                          <p className="text-sm font-medium">{counter.label}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Custom CountUp Animation Component
function CountUpAnimation({
  end,
  isVisible,
  duration = 2000,
}: {
  end: number;
  isVisible: boolean;
  duration?: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * end);

      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, isVisible, duration]);

  return <span>{count}</span>;
}
