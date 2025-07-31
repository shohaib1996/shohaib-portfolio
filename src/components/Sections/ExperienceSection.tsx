"use client"

import { motion, easeOut } from "framer-motion" // <-- import easeOut
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, MapPin, Calendar, Briefcase } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export function ExperienceSection() {
  const [selectedExperience, setSelectedExperience] = useState(0)

  const experiences = [
    {
      id: 0,
      company: "SDBIT (Full time)",
      logo: "https://i.imgur.com/H4PZs15.jpeg",
      position: "Junior Frontend Developer",
      period: "Mar 2025 - Present",
      duration: "5 months",
      location: "Dhaka, Bangladesh",
      type: "Full-time",
      description: "Software Driven Business-IT",
      responsibilities: [
        "Developing modern web applications using Next.js and React",
        "Implementing responsive designs with Tailwind CSS",
        "Collaborating with cross-functional teams for feature development",
        "Optimizing application performance and user experience",
        "Managing state with Redux and modern React patterns",
      ],
      technologies: ["Next.js", "React", "Redux.js", "TypeScript", "Tailwind CSS"],
    },
    {
      id: 1,
      company: "TS4U (Full time)",
      logo: "https://i.imgur.com/LXs3Yal.jpeg",
      position: "Junior Frontend Developer",
      period: "Jul 2024 - Feb 2025",
      duration: "8 months",
      location: "Warren, Michigan, United States",
      type: "Full-time (Remote)",
      description: "IT Engineering & Development",
      responsibilities: [
        "Built responsive and scalable web applications using Next.js, React, and Tailwind CSS",
        "Collaborated closely with backend developers and UI/UX designers to transform complex requirements into clean, interactive frontend solutions",
        "Created reusable components and optimized page performance using SSR and SSG",
        "Managed application state with Redux Toolkit and followed best practices for code quality, accessibility, and responsiveness",
        "Successfully delivered multiple production-ready features ahead of schedule",
        "Improved performance scores through optimization techniques",
        "Contributed to maintaining a standardized and efficient codebase",
        "Played a mentoring role by supporting junior developers in understanding frontend concepts, especially within the React ecosystem",
      ],
      technologies: ["Next.js", "React", "Redux.js", "Tailwind CSS", "TypeScript", "SSR", "SSG"],
    },
    {
      id: 2,
      company: "TS4U (Internship)",
      logo: "https://i.imgur.com/LXs3Yal.jpeg",
      position: "Frontend Web Developer",
      period: "Dec 2023 - Jun 2024",
      duration: "7 months",
      location: "Warren, Michigan, United States",
      type: "Internship (Remote)",
      description: "MERN Stack Development",
      responsibilities: [
        "Worked as a MERN stack Web Developer collaborating with a dynamic team",
        "Enhanced front-end experiences on ScholarHub and TS4U website",
        "Committed to refining user interfaces and continuously improving website functionality",
        "Provided student support to enhance and make it easy to learn web development",
        "Gained hands-on experience with full-stack development practices",
      ],
      technologies: ["Next.js", "Node.js", "Express.js", "MongoDB", "React", "JavaScript"],
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
    <section id="experience" className="">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className=""
        >
          <div className="border border-border rounded-3xl backdrop-blur-sm relative overflow-hidden">
            {/* Background Pattern */}
           

            <div className="relative z-10 p-8">
              {/* Header */}
              <motion.div variants={itemVariants} className="mb-8">
                <p className="text-4xl md:text-5xl font-bold text-center mb-16 text-emerald-500 dark:text-emerald-400">Experiences</p>
                <h2 className="text-4xl md:text-4xl font-bold font-mono">
                  <span className="text-emerald-500 dark:text-emerald-400">+1.5</span>
                  <span className="text-muted-foreground"> years of </span>
                  passion
                  <span className="text-muted-foreground">
                    <br />
                    for programming techniques
                  </span>
                </h2>
              </motion.div>

              <div className="grid lg:grid-cols-5 gap-8">
                {/* Company Cards */}
                <motion.div variants={itemVariants} className="lg:col-span-2">
                  <div className="space-y-3">
                    {experiences.map((exp, index) => (
                      <motion.div
                        key={exp.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Card
                          className={`p-4 cursor-pointer transition-all duration-300 hover:shadow-lg border ${
                            selectedExperience === exp.id
                              ? "border-emerald-500 dark:border-emerald-400 bg-emerald-50 dark:bg-emerald-950/20"
                              : "border-border hover:border-emerald-300 dark:hover:border-emerald-600"
                          }`}
                          onClick={() => setSelectedExperience(exp.id)}
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                              <Image
                                src={exp.logo || "/placeholder.svg"}
                                alt={exp.company}
                                width={24}
                                height={24}
                                className="w-6 h-6"
                              />
                            </div>
                            <div className="flex-1">
                              <h5 className="font-semibold font-mono text-sm">{exp.company}</h5>
                              <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
                                <Calendar className="w-3 h-3" />
                                {exp.period}
                              </div>
                            </div>
                          </div>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Experience Details */}
                <motion.div variants={itemVariants} className="lg:col-span-3">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-emerald-500 dark:text-emerald-400 font-mono mb-2">
                        {experiences[selectedExperience].position}
                      </h3>
                      <div className="space-y-2 text-sm text-muted-foreground font-mono">
                        <div className="flex items-center gap-2">
                          <Building2 className="w-4 h-4" />
                          {experiences[selectedExperience].company} • {experiences[selectedExperience].description}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {experiences[selectedExperience].location} • {experiences[selectedExperience].type}
                        </div>
                        <div className="flex items-center gap-2">
                          <Briefcase className="w-4 h-4" />
                          {experiences[selectedExperience].period} • {experiences[selectedExperience].duration}
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 font-mono text-emerald-500 dark:text-emerald-400">
                        Key Responsibilities:
                      </h4>
                      <ul className="space-y-2">
                        {experiences[selectedExperience].responsibilities.map((responsibility, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="text-sm text-muted-foreground font-mono leading-relaxed flex items-start gap-2"
                          >
                            <span className="text-emerald-500 dark:text-emerald-400 mt-1">•</span>
                            <span>{responsibility}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 font-mono text-emerald-500 dark:text-emerald-400">
                        Technologies:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experiences[selectedExperience].technologies.map((tech, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            <Badge
                              variant="outline"
                              className="font-mono text-xs border-emerald-500 dark:border-emerald-400 text-emerald-600 dark:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/20"
                            >
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>
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
