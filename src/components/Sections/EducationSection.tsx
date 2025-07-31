"use client"

import { motion, easeOut } from "framer-motion"
import { Card } from "@/components/ui/card"
import { GraduationCap, Award, BookOpen } from "lucide-react"

export function EducationSection() {
  const education = [
    {
      period: "2016-2020",
      institution: "Jagannath University, Dhaka",
      degree: "BSc in Geography and Environmental Science",
      result: "CGPA: 3.70 out of 4.00",
      type: "degree",
    },
    {
      period: "2012-2014",
      institution: "Dhaka Board",
      degree: "Higher Secondary Certificate (HSC)",
      result: "GPA: 5.00 out of 5.00",
      type: "certificate",
    },
    {
      period: "2010-2012",
      institution: "Comilla Board",
      degree: "Secondary School Certificate (SSC)",
      result: "GPA: 5.00 out of 5.00",
      type: "certificate",
    },
  ]

  const certifications = [
    {
      period: "2023-2024",
      title: "Full Stack Web Development",
      description:
        "Comprehensive training in modern web technologies including React, Node.js, and database management.",
    },
    {
      period: "2022-2023",
      title: "JavaScript & TypeScript Mastery",
      description: "Advanced concepts in JavaScript ES6+ and TypeScript for scalable application development.",
    },
    {
      period: "2021-2022",
      title: "Learn HTML, CSS, and JavaScript basics",
      description: "Foundational skills in web development.",
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
        ease: easeOut,
      },
    },
  }

  return (
    <section id="education" className="py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className=""
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-emerald-500 dark:text-emerald-400 font-mono"
          >
            Education & Learning
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Education Column */}
            <motion.div variants={itemVariants}>
              <Card className="h-full border border-border rounded-3xl overflow-hidden relative">
                {/* Circular Patterns for Formal Education */}
                <div className="absolute -top-6 -right-6 w-32 h-32 pointer-events-none overflow-hidden">
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                    className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/15 dark:bg-emerald-400/20 rounded-full"
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
                    className="absolute top-2 right-2 w-16 h-16 bg-emerald-500/20 dark:bg-emerald-400/25 rounded-full"
                  />
                  <motion.div
                    animate={{
                      scale: [1, 1.4, 1],
                      opacity: [0.4, 0.7, 0.4],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: 2,
                    }}
                    className="absolute top-4 right-4 w-10 h-10 bg-emerald-500/25 dark:bg-emerald-400/30 rounded-full"
                  />
                  <motion.div
                    animate={{
                      scale: [1.3, 1, 1.3],
                      opacity: [0.7, 0.4, 0.7],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: 3,
                    }}
                    className="absolute top-6 right-6 w-6 h-6 bg-emerald-500/30 dark:bg-emerald-400/35 rounded-full"
                  />
                </div>

                <div className="p-6 relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="p-2 bg-primary/20 rounded-lg mr-3">
                      <GraduationCap className="h-6 w-6 text-emerald-500 dark:text-emerald-400" />
                    </div>
                    <h3 className="text-2xl font-semibold font-mono">Formal Education</h3>
                  </div>
                  <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-emerald-100 dark:bg-emerald-300" />
                    <div className="space-y-6">
                      {education.map((edu, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="relative pl-8"
                        >
                          {/* Timeline dot */}
                          <div className="absolute left-2.5 top-1 w-3 h-3 bg-emerald-500 dark:bg-emerald-400 rounded-full border-2 border-background" />
                          <div className="space-y-1 font-mono">
                            <div className="flex items-start gap-3">
                              <span className="text-sm text-muted-foreground font-medium whitespace-nowrap">
                                {edu.period}:
                              </span>
                              <div className="flex-1">
                                <h4 className="font-semibold text-emerald-500 dark:text-emerald-400 mb-1">
                                  {edu.institution}
                                </h4>
                                <p className="text-foreground font-medium">{edu.degree}</p>
                                <p className="text-sm text-muted-foreground">{edu.result}</p>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Certifications & Learning Column */}
            <motion.div variants={itemVariants}>
              <Card className="h-full border border-border rounded-3xl overflow-hidden relative">
                {/* Circular Patterns for Self-Learning */}
                <div className="absolute -top-6 -right-6 w-32 h-32 pointer-events-none overflow-hidden">
                  <motion.div
                    animate={{
                      scale: [1.1, 1.3, 1.1],
                      opacity: [0.4, 0.7, 0.4],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                    className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/15 dark:bg-emerald-400/20 rounded-full"
                  />
                  <motion.div
                    animate={{
                      scale: [1.3, 1.1, 1.3],
                      opacity: [0.7, 0.4, 0.7],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: 1.5,
                    }}
                    className="absolute top-2 right-2 w-16 h-16 bg-emerald-500/20 dark:bg-emerald-400/25 rounded-full"
                  />
                  <motion.div
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: 2.5,
                    }}
                    className="absolute top-4 right-4 w-10 h-10 bg-emerald-500/25 dark:bg-emerald-400/30 rounded-full"
                  />
                  <motion.div
                    animate={{
                      scale: [1.4, 1, 1.4],
                      opacity: [0.6, 0.3, 0.6],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: 3.5,
                    }}
                    className="absolute top-6 right-6 w-6 h-6 bg-emerald-500/30 dark:bg-emerald-400/35 rounded-full"
                  />
                </div>

                <div className="bg-gradient-to-br from-secondary/5 to-secondary/10 p-6 relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="p-2 bg-primary/20 rounded-lg mr-3">
                      <Award className="h-6 w-6 text-emerald-500 dark:text-emerald-400" />
                    </div>
                    <h3 className="text-2xl font-semibold font-mono">Self-Learning & Development</h3>
                  </div>
                  <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-emerald-100 dark:bg-emerald-300" />
                    <div className="space-y-6">
                      {certifications.map((cert, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="relative pl-8"
                        >
                          {/* Timeline dot */}
                          <div className="absolute left-2.5 top-1 w-3 h-3 bg-emerald-500 dark:bg-emerald-400 rounded-full border-2 border-background" />
                          <div className="space-y-1 font-mono">
                            <div className="flex items-start gap-3">
                              <span className="text-sm text-muted-foreground font-medium whitespace-nowrap">
                                {cert.period}:
                              </span>
                              <div className="flex-1">
                                <h4 className="font-semibold mb-1 text-emerald-500 dark:text-emerald-400">
                                  {cert.title}
                                </h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">{cert.description}</p>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Additional Learning Philosophy */}
          <motion.div variants={itemVariants} className="mt-8 text-center">
            <Card className="border border-border rounded-3xl p-6">
              <div className="flex items-center justify-center">
                <BookOpen className="h-8 w-8 text-emerald-500 dark:text-emerald-400 mr-3" />
                <h3 className="text-xl font-semibold font-mono">Continuous Learning</h3>
              </div>
              <p className="text-muted-foreground max-w-5xl mx-auto leading-relaxed font-mono">
                My journey from Geography & Environmental Science to Full Stack Development reflects my passion for
                continuous learning and adaptation. I believe in combining analytical thinking from my academic
                background with modern web development skills to create innovative solutions.
              </p>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
