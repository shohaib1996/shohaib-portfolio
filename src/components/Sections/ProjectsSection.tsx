"use client";

import { motion, easeOut } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export function ProjectsSection() {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      id: 0,
      title: "AI Form Builder",
      description:
        "An intelligent form builder that uses AI to create dynamic forms with advanced validation and customization options.",
      image: "https://i.imgur.com/i4d1PUs.png",
      liveUrl: "https://form-ai-builder.vercel.app/",
      frontendUrl: "https://github.com/shohaib1996/AI-Form-Builder-Client",
      backendUrl: "https://github.com/shohaib1996/AI-Form-Builder-Backend",
      client: "Personal Project",
      completionTime: "10 days",
      technologies: "Next.js, TypeScript, OpenAI API, MongoDB, Express.js, OAuth2",
      category: "AI & Machine Learning",
      challenges:
        "Integrating AI for real-time form validation, optimizing API response times, ensuring cross-browser compatibility",
    },
    {
      id: 1,
      title: "NeoChat",
      description:
        "A modern real-time chat application with advanced messaging features, file sharing, and user management.",
      image: "https://i.imgur.com/HqajMlV.png",
      liveUrl: "https://neochat-two.vercel.app",
      frontendUrl: "https://github.com/shohaib1996/chat-app-client",
      backendUrl: "https://github.com/shohaib1996/chat-app-backend",
      client: "Personal Project",
      completionTime: "2 months",
      technologies: "Next.js, Socket.io, MongoDB, Express.js",
      category: "Real-time Communication",
      challenges:
        "Maintaining WebSocket connection stability, handling large file uploads, implementing end-to-end encryption",
    },
    {
      id: 2,
      title: "MeetHUb",
      description:
        "A comprehensive meeting room booking system with calendar integration and resource management.",
      image: "https://i.imgur.com/BcA4VUa.png",
      liveUrl: "https://dazzling-mooncake-242921.netlify.app/",
      frontendUrl: "https://github.com/shohaib1996/meethub-client",
      backendUrl: "https://github.com/shohaib1996/meeting-room-system",
      client: "Business Solution",
      completionTime: "4 months",
      technologies: "React, TypeScript, Node.js, MongoDB, Express.js, Redux",
      category: "Meeting Management",
      challenges:
        "Managing concurrent bookings, optimizing database queries",
    },
    {
      id: 3,
      title: "DormDineHub",
      description:
        "A student dining management system for dormitories with meal planning and ordering capabilities.",
      image: "https://i.imgur.com/hPSOT1F.png",
      liveUrl: "https://amazing-lamington-f5fdd2.netlify.app/",
      frontendUrl: "https://github.com/shohaib1996/Dorm-dine-hub-Client",
      backendUrl: "https://github.com/shohaib1996/Dorm-dine-hub-server",
      client: "Educational Project",
      completionTime: "3 months",
      technologies: "React, Node.js, MongoDB, Express.js, Stripe, Tailwind CSS, Firebase",
      category: "Food & Dining",
      challenges:
        "Integrating payment gateways, handling high concurrent orders, ensuring menu data consistency",
    },
    {
      id: 4,
      title: "MeckKey Heaven",
      description:
        "An e-commerce platform specialized in mechanical keyboards with detailed product customization.",
      image: "https://i.imgur.com/lpbETWU.png",
      liveUrl: "https://mechkey-heaven.vercel.app/",
      frontendUrl: "https://github.com/shohaib1996/mechkey-heaven",
      backendUrl: "https://github.com/shohaib1996/mechanicalKeyboard-backend",
      client: "E-commerce Project",
      completionTime: "4 months",
      technologies: "React, TypeScript, MongoDB, Express.js, Redux, Tailwind CSS",
      category: "E-commerce",
      challenges:
        "Implementing complex product customization, optimizing image loading, redux state management",
    },
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

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
    <section id="projects" className="">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glowing-border">
          <div className="glowing-border-content bg-background rounded-3xl">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className=""
            >
              <div className="border border-border rounded-3xl backdrop-blur-sm relative overflow-hidden">
                <div className="relative z-10 p-8">
                  {/* Header */}
                  <motion.div variants={itemVariants} className="mb-8">
                    <h2 className="text-4xl md:text-5xl font-bold text-center text-emerald-500 dark:text-emerald-400 font-mono">
                      My Recent Works
                    </h2>
                  </motion.div>

                  {/* Project Slider */}
                  <motion.div variants={itemVariants} className="relative">
                    <Card className="border border-border bg-muted/30 overflow-hidden">
                      <CardContent className="p-6">
                        <div className="grid lg:grid-cols-2 gap-8 items-center">
                          {/* Project Image with Scrolling Animation */}
                          <div className="relative overflow-hidden rounded-2xl bg-background border border-border">
                            <div className="aspect-[4/3] relative overflow-hidden">
                              <div className="scroll-container">
                                <Image
                                  key={currentProject}
                                  src={
                                    projects[currentProject].image ||
                                    "/placeholder.svg"
                                  }
                                  alt={projects[currentProject].title}
                                  height={800}
                                  width={500}
                                  className="w-full h-auto object-cover scroll"
                                />
                              </div>
                            </div>
                          </div>

                          {/* Project Details */}
                          <div className="space-y-6 font-mono">
                            <motion.div
                              key={`title-${currentProject}`}
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.6 }}
                            >
                              <h3 className="text-2xl md:text-3xl font-bold mb-2 text-emerald-500 dark:text-emerald-400">
                                {projects[currentProject].title}
                              </h3>
                              <p className="text-muted-foreground leading-relaxed">
                                {projects[currentProject].description}
                              </p>
                            </motion.div>

                            {/* Project Info */}
                            <motion.div
                              key={`info-${currentProject}`}
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.6, delay: 0.1 }}
                              className="space-y-4 font-mono"
                            >
                              <div className="border-b border-border pb-2">
                                <h4 className="text-primary font-semibold mb-3">
                                  Project Info
                                </h4>
                              </div>

                              <div className="space-y-3">
                                <div className="flex justify-between items-center border-b border-border/50 pb-2">
                                  <span className="font-medium">Client</span>
                                  <span className="text-muted-foreground">
                                    {projects[currentProject].client}
                                  </span>
                                </div>
                                <div className="flex justify-between items-center border-b border-border/50 pb-2">
                                  <span className="font-medium">
                                    Completion Time
                                  </span>
                                  <span className="text-muted-foreground">
                                    {projects[currentProject].completionTime}
                                  </span>
                                </div>
                                <div className="flex justify-between items-start border-b border-border/50 pb-2">
                                  <span className="font-medium">
                                    Technologies
                                  </span>
                                  <span className="text-muted-foreground text-right max-w-[60%]">
                                    {projects[currentProject].technologies}
                                  </span>
                                </div>
                                <div className="flex justify-between items-start border-b border-border/50 pb-2">
                                  <span className="font-medium">
                                    Challenges Faced
                                  </span>
                                  <span className="text-muted-foreground text-right max-w-[60%]">
                                    {projects[currentProject].challenges}
                                  </span>
                                </div>
                                <div className="flex justify-between items-center">
                                  <span className="font-medium">Category</span>
                                  <span className="text-primary font-medium">
                                    {projects[currentProject].category}
                                  </span>
                                </div>
                              </div>
                            </motion.div>

                            {/* Project Links */}
                            <motion.div
                              key={`links-${currentProject}`}
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.6, delay: 0.2 }}
                              className="flex flex-wrap gap-4 font-mono"
                            >
                              <Button variant="outline" size="sm" asChild>
                                <Link
                                  href={projects[currentProject].liveUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-2"
                                >
                                  <ExternalLink className="h-4 w-4" />
                                  Live Demo
                                </Link>
                              </Button>
                              <Button variant="outline" size="sm" asChild>
                                <Link
                                  href={projects[currentProject].frontendUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-2"
                                >
                                  <Github className="h-4 w-4" />
                                  Frontend
                                </Link>
                              </Button>
                              <Button variant="outline" size="sm" asChild>
                                <Link
                                  href={projects[currentProject].backendUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-2"
                                >
                                  <Github className="h-4 w-4" />
                                  Backend
                                </Link>
                              </Button>
                            </motion.div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Navigation Controls */}
                    <div className="absolute bottom-12 right-6 flex gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={prevProject}
                        className="bg-background/80 backdrop-blur-sm hover:bg-emerald-500"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={nextProject}
                        className="bg-emerald-500 dark:bg-emerald-400 text-primary-foreground hover:bg-emerald-500 hover:text-background transition-colors"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>

                    {/* Project Indicators */}
                    <div className="flex justify-center mt-6 gap-2">
                      {projects.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentProject(index)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            index === currentProject
                              ? "bg-primary w-8"
                              : "bg-muted-foreground/30"
                          }`}
                        />
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
