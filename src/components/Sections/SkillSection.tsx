"use client";

import { motion, easeOut } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Code, Database, Server, Wrench, Globe } from "lucide-react";
import Image from "next/image";

export function SkillsSection() {
  const topRowSkills = [
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
  ];

  const bottomRowSkills = [
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "Express",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      name: "Tailwind CSS",
      icon: "https://i.imgur.com/CPwm0Hc.png",
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "Firebase",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    },
  ];

  const skillCategories = [
    {
      category: "Front-End:",
      skills:
        "HTML, CSS, JavaScript, React, Next.js, TypeScript, Tailwind CSS, Bootstrap",
      icon: Code,
    },
    {
      category: "Back-End:",
      skills:
        "Node.js, Express.js, RESTful APIs, Server-side Rendering, Mongoose, Prisma",
      icon: Server,
    },
    {
      category: "Databases:",
      skills: "MongoDB, PostgreSQL, Firebase, Local Storage, Session Storage",
      icon: Database,
    },
    {
      category: "Tools & Platforms:",
      skills: "Git, GitHub, VS Code, Vercel, Netlify",
      icon: Wrench,
    },
    {
      category: "Others:",
      skills: "Responsive Design, Redux, State Management, Agile",
      icon: Globe,
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

  // Calculate animation distance based on number of icons (quadrupled)
  const topRowWidth = topRowSkills.length * 4 * 80; // Approx. width per icon (80px)
  const bottomRowWidth = bottomRowSkills.length * 4 * 80;

  return (
    <section id="skills" className="py-6 sm:py-8 lg:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="border border-border rounded-3xl backdrop-blur-sm relative overflow-hidden">
            <div className="absolute -top-20 -left-20 w-40 h-40 sm:w-52 sm:h-52 lg:w-64 lg:h-64 pointer-events-none">
              {/* Responsive animated rings */}
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 w-full h-full bg-emerald-500/10 dark:bg-emerald-400/15 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              />
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 w-4/5 h-4/5 bg-emerald-500/20 dark:bg-emerald-400/15 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              />
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 w-3/5 h-3/5 bg-emerald-500/30 dark:bg-emerald-400/15 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              />
              <motion.div
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.6, 0.3, 0.6],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute inset-0 w-2/5 h-2/5 bg-emerald-500/40 dark:bg-emerald-400/25 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent dark:from-emerald-400/10 rounded-3xl" />

            <div className="relative z-10 py-6 sm:py-8 lg:py-10">
              {/* Header */}
              <motion.div
                variants={itemVariants}
                className="text-center mb-6 sm:mb-8"
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-mono text-emerald-500 dark:text-emerald-400">
                  My Skills
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 px-4 sm:px-6 lg:px-8 items-center">
                {/* Left Column - Animated Tech Icons */}
                <motion.div
                  variants={itemVariants}
                  className="space-y-6 sm:space-y-8"
                >
                  {/* Top Row - Moving Right */}
                  <div className="overflow-hidden">
                    <motion.div
                      animate={{ x: [0, -topRowWidth] }}
                      transition={{
                        x: {
                          repeat: Number.POSITIVE_INFINITY,
                          repeatType: "loop",
                          duration: 20,
                          ease: "linear",
                        },
                      }}
                      className="flex gap-4 sm:gap-6 w-max"
                    >
                      {[
                        ...topRowSkills,
                        ...topRowSkills,
                        ...topRowSkills,
                        ...topRowSkills,
                      ].map((skill, index) => (
                        <div
                          key={index}
                          className="group relative bg-background border border-border rounded-2xl p-3 sm:p-4 min-w-[60px] h-[60px] sm:min-w-[80px] sm:h-[80px] flex items-center justify-center hover:border-primary transition-colors"
                        >
                          <Image
                            src={skill.icon || "/placeholder.png"}
                            alt={skill.name}
                            width={32}
                            height={32}
                            className="w-8 h-8 sm:w-10 sm:h-10 group-hover:scale-110 transition-transform"
                            unoptimized={true}
                          />
                          {/* Tooltip */}
                          <div className="absolute -top-8 sm:-top-10 left-1/2 transform -translate-x-1/2 bg-foreground text-background text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            {skill.name}
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  </div>

                  {/* Bottom Row - Moving Left */}
                  <div className="overflow-hidden">
                    <motion.div
                      animate={{ x: [-bottomRowWidth, 0] }}
                      transition={{
                        x: {
                          repeat: Number.POSITIVE_INFINITY,
                          repeatType: "loop",
                          duration: 20,
                          ease: "linear",
                        },
                      }}
                      className="flex gap-4 sm:gap-6 w-max"
                    >
                      {[
                        ...bottomRowSkills,
                        ...bottomRowSkills,
                        ...bottomRowSkills,
                        ...bottomRowSkills,
                      ].map((skill, index) => (
                        <div
                          key={index}
                          className="group relative bg-background border border-border rounded-2xl p-3 sm:p-4 min-w-[60px] h-[60px] sm:min-w-[80px] sm:h-[80px] flex items-center justify-center hover:border-primary transition-colors"
                        >
                          <Image
                            src={skill.icon || "/placeholder.png"}
                            alt={skill.name}
                            width={32}
                            height={32}
                            className="w-8 h-8 sm:w-10 sm:h-10 group-hover:scale-110 transition-transform"
                            unoptimized={true}
                          />
                          {/* Tooltip */}
                          <div className="absolute -top-8 sm:-top-10 left-1/2 transform -translate-x-1/2 bg-foreground text-background text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            {skill.name}
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  </div>
                </motion.div>

                {/* Right Column - Skill Categories */}
                <motion.div variants={itemVariants} className="font-mono">
                  <div className="space-y-4 sm:space-y-6">
                    {skillCategories.map((category, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="group"
                      >
                        <Card className="p-4 hover:shadow-lg transition-all duration-300 hover:border-primary/50">
                          <div className="flex items-start gap-3">
                            <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                              <category.icon className="h-5 w-5 text-emerald-500 dark:text-emerald-400" />
                            </div>
                            <div className="flex-1">
                              <div className="flex flex-col gap-1 sm:gap-2">
                                <h4 className="font-semibold text-emerald-500 dark:text-emerald-400">
                                  {category.category}
                                </h4>
                                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed break-words">
                                  {category.skills}
                                </p>
                              </div>
                            </div>
                          </div>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
