"use client";

import { motion, easeOut } from "framer-motion";
import { useEffect, useState } from "react";
import { Code, Monitor, Users, Award } from "lucide-react";

export function CounterSection() {
  const [isVisible, setIsVisible] = useState(false);

  const counters = [
    {
      icon: Code,
      end: 1.5,
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

  return (
    <section className="py-8 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          onViewportEnter={() => setIsVisible(true)}
          className="border border-border rounded-3xl backdrop-blur-sm relative overflow-hidden"
        >
          {/* Background Pattern */}
          {/* <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
          </div> */}

          <div className="relative z-10 py-16 px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
              {counters.map((counter, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center"
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

                      <p className="text-sm font-medium ">
                        {counter.label}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
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
