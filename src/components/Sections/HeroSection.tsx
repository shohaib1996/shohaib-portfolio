"use client";

import { motion, easeOut } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Play } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

export function HeroSection() {
  const [displayText, setDisplayText] = useState("");
  const [showVideo, setShowVideo] = useState(false);
  const fullText = "Hey, I'm Shohaib";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const techStack = [
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "Tailwind CSS",
      icon: "https://i.imgur.com/CPwm0Hc.png",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
    <section
      id="hero"
      className="pt-20 md:pt-28 flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Gradient Background */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-teal-600/10 to-emerald-500/10 dark:from-emerald-900/20 dark:via-teal-900/20 dark:to-emerald-900/20 animate-pulse" /> */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="border border-border rounded-3xl bg-background/50 backdrop-blur-sm"
        >
          <div className="relative overflow-hidden rounded-3xl">
            <div className="relative z-10 py-8 sm:py-12 lg:py-12 px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Left Column - Image/Video */}
                <motion.div
                  variants={itemVariants}
                  className="flex justify-center lg:justify-start"
                >
                  <div
                    className="relative cursor-pointer group w-full max-w-[400px] sm:max-w-[500px] aspect-[5/5]"
                    onClick={() => setShowVideo(true)}
                  >
                    <Image
                      src="https://i.imgur.com/4EnQIlA.png"
                      alt="Shohaib Profile"
                      fill
                      className="object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-300"
                      style={{
                        clipPath:
                          "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
                      }}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                    />

                    {/* Play Button Overlay */}
                    <div
                      className="absolute inset-0 bg-black/40 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                      style={{
                        clipPath:
                          "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
                      }}
                    >
                      <div className="bg-emerald-500 dark:bg-emerald-700 rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                        <Play
                          className="h-8 w-8 text-white ml-1"
                          fill="currentColor"
                        />
                      </div>
                    </div>

                    {/* Decorative Icon */}
                    <div className="absolute right-20 top-full transform -translate-y-1/2 hidden sm:block">
                      <div className="bg-emerald-500/20 dark:bg-emerald-700/20 rounded-full p-3">
                        <div className="w-6 h-6 bg-emerald-500 dark:bg-emerald-700 rounded-full animate-pulse" />
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Right Column - Content */}
                <motion.div
                  variants={itemVariants}
                  className="space-y-6 text-center lg:text-left"
                >
                  {/* Code-style intro */}
                  <div className="text-muted-foreground font-mono text-sm sm:text-base">
                    <span className="text-emerald-500 dark:text-emerald-400">
                      {"<span>"}
                    </span>
                    <div className="inline-block ml-2">
                      <span className="text-foreground font-medium">
                        {displayText}
                        <span className="animate-pulse">|</span>
                      </span>
                    </div>
                    <span className="text-emerald-500 dark:text-emerald-400">
                      {"</span>"}
                    </span>
                  </div>

                  {/* Main Heading */}
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    Junior{" "}
                    <span className="bg-gradient-to-r from-emerald-500 to-teal-600 dark:from-emerald-400 dark:to-teal-500 bg-clip-text text-transparent">
                      {"{Full Stack}"}
                    </span>
                    <br />
                    Web developer
                    <span className="animate-pulse text-emerald-500 dark:text-emerald-400">
                      _
                    </span>
                  </h1>

                  {/* Description */}
                  <div className="text-muted-foreground font-mono text-sm sm:text-base">
                    <span className="text-emerald-500 dark:text-emerald-400">
                      {"<p>"}
                    </span>
                    <span className="text-foreground">
                      With expertise in cutting-edge technologies such as{" "}
                    </span>
                    <span className="text-emerald-500 dark:text-emerald-400">
                      NodeJS
                    </span>
                    ,{" "}
                    <span className="text-emerald-500 dark:text-emerald-400">
                      React
                    </span>
                    ,{" "}
                    <span className="text-emerald-500 dark:text-emerald-400">
                      NextJS
                    </span>
                    , and{" "}
                    <span className="text-emerald-500 dark:text-emerald-400">
                      MongoDB
                    </span>
                    ,{" "}
                    <span className="text-emerald-500 dark:text-emerald-400">
                      PostgreSQL
                    </span>
                    <span className="text-foreground">
                      ... I deliver web solutions that are both innovative and
                      robust.
                    </span>
                    <span className="text-emerald-500 dark:text-emerald-400">
                      {"</p>"}
                    </span>
                  </div>

                  {/* Tech Stack Marquee */}
                  <div className="space-y-4">
                    <div className="overflow-hidden">
                      <motion.div
                        animate={{ x: [0, -100] }}
                        transition={{
                          x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 10,
                            ease: "linear",
                          },
                        }}
                        className="flex gap-4 w-max"
                      >
                        {[...techStack, ...techStack].map((tech, index) => (
                          <div
                            key={index}
                            className="bg-background border border-border rounded-xl p-3 min-w-[60px] h-[60px] flex items-center justify-center hover:border-emerald-500 dark:hover:border-emerald-400 transition-colors"
                          >
                            <Image
                              src={tech.icon || "/placeholder.svg"}
                              alt={tech.name}
                              width={32}
                              height={32}
                              className="w-8 h-8"
                            />
                          </div>
                        ))}
                      </motion.div>
                    </div>
                    <p className="text-sm text-muted-foreground">...and more</p>
                  </div>

                  {/* Download CV Button */}
                  <Button
                    variant="ghost"
                    className="text-left p-0 h-auto font-mono"
                    asChild
                  >
                    <a href="/resume.pdf" download>
                      <Download className="h-4 w-4 mr-2 text-emerald-500 dark:text-emerald-400" />
                      [ Download my CV ]
                    </a>
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setShowVideo(false)}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            className="relative w-full max-w-4xl aspect-video bg-background rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src="https://www.youtube.com/embed/p80VyQ5wLvg?si=W12y3cmVovu8UmfV"
              title="Introduction Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />

            {/* Close button */}
            <Button
              onClick={() => setShowVideo(false)}
              className="absolute top-4 right-4 bg-background/80 hover:bg-background rounded-full p-2 transition-colors text-red-500"
            >
              <span className="sr-only">Close</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </Button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
