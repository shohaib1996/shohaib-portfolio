"use client"

import { motion, easeOut } from "framer-motion" // <-- import easeOut
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, Code, Lightbulb, Target, Heart } from "lucide-react"
import Link from "next/link"

export function AboutSection() {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code following best practices.",
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "Turning complex challenges into simple, elegant solutions.",
    },
    {
      icon: Target,
      title: "Goal Oriented",
      description: "Focused on delivering results that exceed expectations.",
    },
    {
      icon: Heart,
      title: "Passionate",
      description: "Genuinely love what I do and continuously learning new technologies.",
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
    <section id="about" className="">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="border border-border rounded-3xl bg-background/50 backdrop-blur-sm p-4 lg:p-8"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-center mb-16 text-emerald-500 dark:text-emerald-400">
            About Me
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Main Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold font-mono">Hello! I'm Shohaib 👋</h3>

                <p className="text-md text-muted-foreground leading-relaxed font-mono">
                  A passionate Full Stack Developer with{" "}
                  <span className="text-emerald-500 dark:text-emerald-400 font-semibold">1.5 years of experience</span> in creating digital
                  solutions that make a difference. Despite being relatively new to the field, I've quickly developed a
                  strong foundation in modern web technologies and have a genuine enthusiasm for learning.
                </p>

                <p className="text-md text-muted-foreground leading-relaxed font-mono">
                  My journey began with curiosity about how websites work, and it has evolved into a deep passion for
                  crafting user-centric applications. I specialize in{" "}
                  <span className="text-emerald-500 dark:text-emerald-400 font-semibold">React, Node.js, and TypeScript, NextJs etc</span>, and I'm always
                  eager to explore new technologies and frameworks.
                </p>

                <p className="text-md text-muted-foreground leading-relaxed font-mono">
                  What sets me apart is my <span className="text-emerald-500 dark:text-emerald-400 font-semibold">fresh perspective</span>,
                  eagerness to learn, and commitment to writing clean, maintainable code. I believe that great software
                  is built through collaboration, continuous learning, and attention to detail.
                </p>
              </div>

              <div className="pt-4">
                <Button size="lg" className="group bg-emerald-600 hover:bg-emerald-700" asChild>
                  <Link href="/resume.pdf" download className="text-white">
                    <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                    Download Resume
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* Right Column - Highlights Grid */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6 font-mono">What I Bring</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full hover:shadow-lg transition-all duration-300 group cursor-pointer">
                      <CardContent className="p-2 text-center">
                        <div className="mb-4">
                          <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto group-hover:bg-primary/20 transition-colors">
                            <highlight.icon className="h-6 w-6 text-emerald-500 dark:text-emerald-400" />
                          </div>
                        </div>
                        <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors font-mono">
                          {highlight.title}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{highlight.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
