"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Progress } from "@/components/ui/progress"

interface LandingLoaderProps {
  onLoadingComplete: () => void
}

export function LandingLoader({ onLoadingComplete }: LandingLoaderProps) {
  const [progress, setProgress] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 2
      })
    }, 60) // Complete in 3 seconds (100 / 2 * 60ms = 3000ms)

    // Complete loading after 3 seconds
    const loadingTimer = setTimeout(() => {
      setIsLoading(false)
      setTimeout(() => {
        onLoadingComplete()
      }, 1000) // Wait for exit animation to complete
    }, 3000)

    return () => {
      clearInterval(progressInterval)
      clearTimeout(loadingTimer)
    }
  }, [onLoadingComplete])

  return (
    <AnimatePresence>
      {isLoading && (
        <div className="fixed inset-0 z-[9999] overflow-hidden">
          {/* Left Half */}
          <motion.div
            initial={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0 w-1/2 bg-background/95 backdrop-blur-md"
          >
            {/* Blurred background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-teal-500/10 to-transparent" />
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-teal-500/20 rounded-full blur-2xl animate-pulse delay-1000" />
            </div>
          </motion.div>

          {/* Right Half */}
          <motion.div
            initial={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0 left-1/2 w-1/2 bg-background/95 backdrop-blur-md"
          >
            {/* Blurred background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-gradient-to-bl from-emerald-500/20 via-teal-500/10 to-transparent" />
              <div className="absolute top-1/3 right-1/4 w-28 h-28 bg-emerald-500/20 rounded-full blur-3xl animate-pulse delay-500" />
              <div className="absolute bottom-1/4 right-1/3 w-20 h-20 bg-teal-500/20 rounded-full blur-2xl animate-pulse delay-1500" />
            </div>
          </motion.div>

          {/* Center Content - Above both halves */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 z-10 flex flex-col items-center justify-center"
          >
            {/* Profile Image Container */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.2,
              }}
              className="relative mb-8"
            >
              {/* Glowing ring around image */}
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotate: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                  scale: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500 p-1 blur-sm"
              >
                <div className="w-full h-full rounded-full bg-background" />
              </motion.div>

              {/* Profile Image */}
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-emerald-500/50 shadow-2xl">
                <Image src="https://i.imgur.com/4EnQIlA.png" alt="Profile" fill className="object-cover" priority />

                {/* Overlay glow effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/20 to-transparent rounded-full" />
              </div>

              {/* Floating particles around image */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-emerald-500/60 rounded-full"
                  style={{
                    top: `${20 + Math.sin((i * 60 * Math.PI) / 180) * 60}%`,
                    left: `${20 + Math.cos((i * 60 * Math.PI) / 180) * 60}%`,
                  }}
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.3, 1, 0.3],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.3,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>

            {/* Loading Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-center mb-6"
            >
              <h2 className="text-2xl sm:text-3xl font-bold font-mono text-emerald-500 dark:text-emerald-400 mb-2">
                Welcome
              </h2>
              <p className="text-muted-foreground font-mono text-sm sm:text-base">Loading Portfolio Content...</p>
            </motion.div>

            {/* Progress Bar - Fixed Width */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="w-72 max-w-[90vw]"
            >
              <div className="relative">
                <Progress value={progress} className="h-2 bg-muted border border-border/50" />

                {/* Glowing effect on progress bar */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-sm"
                  animate={{
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
              </div>

              {/* Progress percentage */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-center mt-3"
              >
                <span className="text-sm font-mono text-emerald-500 dark:text-emerald-400">
                  {Math.round(progress)}%
                </span>
              </motion.div>
            </motion.div>

            {/* Loading dots animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex space-x-2 mt-6"
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-emerald-500 dark:bg-emerald-400 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.2,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>

            {/* Subtle background animation */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
              <motion.div
                className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-emerald-500/5 to-transparent rounded-full"
                animate={{
                  rotate: 360,
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                  scale: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                }}
              />
              <motion.div
                className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-teal-500/5 to-transparent rounded-full"
                animate={{
                  rotate: -360,
                  scale: [1.2, 1, 1.2],
                }}
                transition={{
                  rotate: { duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                  scale: { duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                }}
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
