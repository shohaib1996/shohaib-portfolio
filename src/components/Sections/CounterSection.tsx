"use client"

import { motion, easeOut, easeInOut } from "framer-motion" // <-- import easeOut and easeInOut
import { useEffect, useState } from "react"
import { Code, Monitor, Users, Award } from "lucide-react"

export function CounterSection() {
  const [isVisible, setIsVisible] = useState(false)

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
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: easeOut, // <-- use imported easeOut function
      },
    },
  }

  // Circular pattern animation variants
  const circleVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.6, 0.3],
      transition: {
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        ease: easeInOut, // <-- use imported easeInOut function
      },
    },
  }

  const circleVariants2 = {
    animate: {
      scale: [1.2, 1, 1.2],
      opacity: [0.6, 0.3, 0.6],
      transition: {
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        ease: easeInOut, // <-- use imported easeInOut function
        delay: 1,
      },
    },
  }

  const circleVariants3 = {
    animate: {
      scale: [1, 1.4, 1],
      opacity: [0.2, 0.4, 0.2],
      transition: {
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        ease: easeInOut, // <-- use imported easeInOut function
        delay: 2,
      },
    },
  }

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
                <motion.div key={index} variants={itemVariants} className="text-center">
                  <div className="counter-item">
                    <div className="content mx-auto">
                      <div className="mb-4">
                        <counter.icon className={`w-8 h-8 mx-auto ${counter.color}`} />
                      </div>
                      <h2 className="text-4xl lg:text-5xl font-bold mb-2 text-emerald-500 dark:text-emerald-400">
                        <CountUpAnimation end={counter.end} isVisible={isVisible} duration={2000} />
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
    </section>
  )
}

// Custom CountUp Animation Component
function CountUpAnimation({
  end,
  isVisible,
  duration = 2000,
}: {
  end: number
  isVisible: boolean
  duration?: number
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(easeOutQuart * end)

      setCount(currentCount)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [end, isVisible, duration])

  return <span>{count}</span>
}
