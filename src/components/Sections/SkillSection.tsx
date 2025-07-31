"use client"

import { motion, easeOut } from "framer-motion" // <-- import easeOut
import { Card } from "@/components/ui/card"
import { Code, Database, Server, Wrench, Globe } from "lucide-react"
import Image from "next/image"

export function SkillsSection() {
  const topRowSkills = [
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  ]

  const bottomRowSkills = [
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    {
      name: "Tailwind CSS",
      icon: "https://i.imgur.com/CPwm0Hc.png",
    },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  ]

  const skillCategories = [
    {
      category: "Front-End:",
      skills: "HTML, CSS, JavaScript, React, Next.js, TypeScript, tailwind CSS, Bootstrap",
      icon: Code,
    },
    {
      category: "Back-End:",
      skills: "Node.js, Express.js, RESTful APIs, Server-side Rendering, Mongose, Prisma",
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

  return (
    <section id="skills" className="py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className=""
        >
          <div className="border border-border rounded-3xl backdrop-blur-sm relative overflow-hidden">


            <div className="relative z-10 py-8">
              {/* Header */}
              <motion.div variants={itemVariants} className="text-center mb-8">
                <h2 className="text-4xl md:text-5xl font-bold font-mono text-emerald-500 dark:text-emerald-400">My Skills</h2>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-12 px-8 items-center">
                {/* Left Column - Animated Tech Icons */}
                <motion.div variants={itemVariants} className="space-y-8">
                  {/* Top Row - Moving Right */}
                  <div className="overflow-hidden">
                    <motion.div
                      animate={{ x: [0, -100] }}
                      transition={{
                        x: {
                          repeat: Number.POSITIVE_INFINITY,
                          repeatType: "loop",
                          duration: 15,
                          ease: "linear",
                        },
                      }}
                      className="flex gap-6 w-max"
                    >
                      {[...topRowSkills, ...topRowSkills, ...topRowSkills].map((skill, index) => (
                        <div
                          key={index}
                          className="group relative bg-background border border-border rounded-2xl p-4 min-w-[80px] h-[80px] flex items-center justify-center hover:border-primary transition-colors"
                        >
                          <Image
                            src={skill.icon || "/placeholder.svg"}
                            alt={skill.name}
                            width={40}
                            height={40}
                            className="w-10 h-10 group-hover:scale-110 transition-transform"
                          />
                          {/* Tooltip */}
                          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-foreground text-background text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            {skill.name}
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  </div>

                  {/* Bottom Row - Moving Left */}
                  <div className="overflow-hidden">
                    <motion.div
                      animate={{ x: [-100, 0] }}
                      transition={{
                        x: {
                          repeat: Number.POSITIVE_INFINITY,
                          repeatType: "loop",
                          duration: 12,
                          ease: "linear",
                        },
                      }}
                      className="flex gap-6 w-max"
                    >
                      {[...bottomRowSkills, ...bottomRowSkills, ...bottomRowSkills].map((skill, index) => (
                        <div
                          key={index}
                          className="group relative bg-background border border-border rounded-2xl p-4 min-w-[80px] h-[80px] flex items-center justify-center hover:border-primary transition-colors"
                        >
                          <Image
                            src={skill.icon || "/placeholder.svg"}
                            alt={skill.name}
                            width={40}
                            height={40}
                            className="w-10 h-10 group-hover:scale-110 transition-transform"
                          />
                          {/* Tooltip */}
                          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-foreground text-background text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            {skill.name}
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  </div>
                </motion.div>

                {/* Right Column - Skill Categories */}
                <motion.div variants={itemVariants} className="lg:border-l lg:border-border lg:pl-8 font-mono">
                  <div className="space-y-6">
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
                              <div className="flex flex-col md:flex-row md:items-center gap-2">
                                <h4 className="font-semibold whitespace-nowrap text-emerald-500 dark:text-emerald-400">{category.category}</h4>
                                <p className="text-muted-foreground text-sm leading-relaxed">{category.skills}</p>
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
  )
}
