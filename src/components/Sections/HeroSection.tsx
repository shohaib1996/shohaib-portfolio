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

  // Floating elements data
  const floatingElements = [
    {
      content: "<div>",
      x: "8%",
      y: "15%",
      delay: 0,
      duration: 8,
      type: "html",
    },
    {
      content: "const portfolio = {};",
      x: "85%",
      y: "25%",
      delay: 1,
      duration: 10,
      type: "js",
    },
    {
      content: "</>",
      x: "12%",
      y: "75%",
      delay: 2,
      duration: 12,
      type: "html",
    },
    {
      content: "useState()",
      x: "75%",
      y: "60%",
      delay: 3,
      duration: 9,
      type: "js",
    },
    {
      content: "<span>",
      x: "18%",
      y: "45%",
      delay: 4,
      duration: 11,
      type: "html",
    },
    {
      content: "async/await",
      x: "90%",
      y: "80%",
      delay: 5,
      duration: 7,
      type: "js",
    },
    {
      content: "{...props}",
      x: "25%",
      y: "65%",
      delay: 6,
      duration: 13,
      type: "js",
    },
    {
      content: "<footer>",
      x: "80%",
      y: "15%",
      delay: 7,
      duration: 10,
      type: "html",
    },
    {
      content: "function()",
      x: "30%",
      y: "30%",
      delay: 8,
      duration: 11,
      type: "js",
    },
    {
      content: "<header>",
      x: "40%",
      y: "85%",
      delay: 9,
      duration: 9,
      type: "html",
    },
    {
      content: "map()",
      x: "60%",
      y: "35%",
      delay: 10,
      duration: 12,
      type: "js",
    },
    {
      content: "<button>",
      x: "35%",
      y: "55%",
      delay: 11,
      duration: 8,
      type: "html",
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

  const floatingVariants = {
    animate: {
      y: [-20, 20, -20],
      rotate: [-5, 5, -5],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="hero"
      className="pt-20 md:pt-28 flex items-center justify-center relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glowing-border">
          <div className="glowing-border-content bg-background">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="border border-border rounded-3xl bg-background/50 backdrop-blur-sm "
            >
              <div className="relative overflow-hidden rounded-3xl ">
                {/* Glowing Effect - Top Right Corner */}
                <div className="absolute top-0 right-0 w-64 h-64 pointer-events-none">
                  <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-emerald-500/30 via-teal-400/20 to-transparent dark:from-emerald-400/20 dark:via-teal-300/10 dark:to-transparent rounded-full blur-3xl animate-pulse" />
                  <div
                    className="absolute top-5 right-5 w-40 h-40 bg-gradient-to-bl from-emerald-400/40 via-cyan-300/30 to-transparent dark:from-emerald-300/30 dark:via-cyan-200/20 dark:to-transparent rounded-full blur-2xl animate-pulse"
                    style={{ animationDelay: "1s" }}
                  />
                  <div
                    className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-bl from-emerald-300/50 via-teal-200/40 to-transparent dark:from-emerald-200/40 dark:via-teal-100/30 dark:to-transparent rounded-full blur-xl animate-pulse"
                    style={{ animationDelay: "2s" }}
                  />
                </div>

                {/* Floating Code Elements */}
                {floatingElements.map((element, index) => (
                  <motion.div
                    key={index}
                    className="absolute pointer-events-none select-none z-0"
                    style={{
                      left: element.x,
                      top: element.y,
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: [0, 0.7, 0.3, 0.7, 0.3],
                      scale: [0, 1, 0.8, 1, 0.8],
                      y: [-20, 20, -10, 15, -20],
                      x: [-10, 10, -5, 8, -10],
                      rotate: [-10, 10, -5, 8, -10],
                    }}
                    transition={{
                      duration: element.duration,
                      repeat: Infinity,
                      delay: element.delay,
                      ease: "easeInOut",
                    }}
                  >
                    <div
                      className={`
                  px-2 py-1 rounded-md font-mono text-xs backdrop-blur-sm border transition-all duration-300
                  ${
                    element.type === "html"
                      ? "bg-blue-500/10 border-blue-500/30 text-blue-600 dark:text-blue-400 dark:bg-blue-400/10 dark:border-blue-400/30"
                      : "bg-yellow-500/10 border-yellow-500/30 text-yellow-600 dark:text-yellow-400 dark:bg-yellow-400/10 dark:border-yellow-400/30"
                  }
                  shadow-lg
                `}
                    >
                      {element.content}
                    </div>
                  </motion.div>
                ))}

                {/* Additional Decorative Elements */}
                {/* Additional Decorative Dots */}
                {[
                  {
                    x: "15%",
                    y: "20%",
                    size: "w-2 h-2",
                    color: "bg-emerald-500 dark:bg-emerald-400",
                    delay: 0,
                  },
                  {
                    x: "25%",
                    y: "70%",
                    size: "w-3 h-3",
                    color: "bg-teal-500 dark:bg-teal-400",
                    delay: 1,
                  },
                  {
                    x: "8%",
                    y: "45%",
                    size: "w-1 h-1",
                    color: "bg-cyan-500 dark:bg-cyan-400",
                    delay: 2,
                  },
                  {
                    x: "35%",
                    y: "25%",
                    size: "w-2 h-2",
                    color: "bg-blue-500 dark:bg-blue-400",
                    delay: 3,
                  },
                  {
                    x: "45%",
                    y: "80%",
                    size: "w-1 h-1",
                    color: "bg-indigo-500 dark:bg-indigo-400",
                    delay: 4,
                  },
                  {
                    x: "65%",
                    y: "15%",
                    size: "w-2 h-2",
                    color: "bg-purple-500 dark:bg-purple-400",
                    delay: 5,
                  },
                  {
                    x: "75%",
                    y: "85%",
                    size: "w-3 h-3",
                    color: "bg-pink-500 dark:bg-pink-400",
                    delay: 6,
                  },
                  {
                    x: "85%",
                    y: "45%",
                    size: "w-1 h-1",
                    color: "bg-rose-500 dark:bg-rose-400",
                    delay: 7,
                  },
                ].map((dot, index) => (
                  <motion.div
                    key={index}
                    className={`absolute ${dot.size} ${dot.color} rounded-full opacity-60 z-0`}
                    style={{ left: dot.x, top: dot.y }}
                    animate={{
                      scale: [1, 2, 1],
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                      duration: 4 + index,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: dot.delay,
                    }}
                  />
                ))}

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
                          ... I deliver web solutions that are both innovative
                          and robust.
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
                        <p className="text-sm text-muted-foreground">
                          ...and more
                        </p>
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
        </div>
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
