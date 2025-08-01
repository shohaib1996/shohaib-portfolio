"use client";

import { motion, easeOut } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Clock,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";

export function BlogSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const blogPosts = [
    {
      title: "Building Scalable React Applications",
      summary:
        "Learn best practices for structuring and scaling React applications for enterprise-level projects.",
      image:
        "https://webdesignretainer.com/wp-content/uploads/2018/06/Best-Web-Development-Blogs-Every-Developer-Must-Follow.jpg",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "React",
      url: "/blog/scalable-react-apps",
    },
    {
      title: "The Future of Web Development",
      summary:
        "Exploring emerging trends and technologies that will shape the future of web development.",
      image:
        "https://www.creativeitinstitute.com/images/course/course_1663052056.jpg",
      date: "2024-01-08",
      readTime: "6 min read",
      category: "Web Dev",
      url: "/blog/future-web-dev",
    },
    {
      title: "Optimizing Performance in Next.js",
      summary:
        "Advanced techniques for improving performance and user experience in Next.js applications.",
      image:
        "https://primathon.in/blog/wp-content/uploads/2024/05/image-2-2.jpg",
      date: "2024-01-01",
      readTime: "10 min read",
      category: "Next.js",
      url: "/blog/nextjs-performance",
    },
    {
      title: "Modern CSS Techniques",
      summary:
        "Discover the latest CSS features and techniques for creating stunning web interfaces.",
      image:
        "https://blog.zegocloud.com/wp-content/uploads/2024/03/types-of-web-development-services.jpg",
      date: "2023-12-20",
      readTime: "5 min read",
      category: "CSS",
      url: "/blog/modern-css",
    },
    {
      title: "JavaScript ES2024 Features",
      summary:
        "Explore the newest JavaScript features and how they can improve your development workflow.",
      image:
        "https://www.creative-tim.com/blog/content/images/size/w960/2022/01/which-development-job-is-right-for-you.jpg",
      date: "2023-12-15",
      readTime: "7 min read",
      category: "JavaScript",
      url: "/blog/js-es2024",
    },
  ];

  const handleReadMore = (url: string) => {
    toast.success(
      "Blog posts will be added later. Stay tuned for amazing content!"
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % blogPosts.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + blogPosts.length) % blogPosts.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Get visible posts based on screen size
  const getVisiblePosts = () => {
    const posts = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentSlide + i) % blogPosts.length;
      posts.push({ ...blogPosts[index], originalIndex: index });
    }
    return posts;
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
    <section id="blog" className="py-8">
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
                    className="absolute top-0 right-0 w-28 h-28 bg-emerald-500/15 dark:bg-emerald-400/20 rounded-full"
                  />
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
                <div className="absolute inset-0 bg-gradient-to-bl from-emerald-500/5 via-transparent to-transparent dark:from-emerald-400/10 rounded-3xl" />
                <div className="relative z-10 p-8">
                  {/* Header */}
                  <motion.div
                    variants={itemVariants}
                    className="text-center mb-12"
                  >
                    <h2 className="text-4xl md:text-5xl font-bold font-mono">
                      Latest Blog Posts
                    </h2>
                  </motion.div>

                  {/* Blog Slider */}
                  <motion.div variants={itemVariants} className="relative">
                    {/* Desktop View - 3 cards */}
                    <div className="hidden md:grid md:grid-cols-3 gap-6">
                      {getVisiblePosts().map((post, index) => (
                        <motion.div
                          key={`${post.originalIndex}-${currentSlide}`}
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="group"
                        >
                          <div className="subtle-glow-border">
                            <div className="subtle-glow-border-content bg-background rounded-3xl">
                              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 h-full border border-border hover:border-primary/50 pt-0">
                                <div className="relative overflow-hidden">
                                  <Image
                                    src={post.image || "/placeholder.svg"}
                                    alt={post.title}
                                    width={300}
                                    height={200}
                                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                  />
                                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                                    {post.category}
                                  </Badge>
                                </div>

                                <CardHeader>
                                  <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors font-mono">
                                    {post.title}
                                  </CardTitle>
                                  <div className="flex items-center gap-4 text-sm text-muted-foreground font-mono">
                                    <div className="flex items-center gap-1">
                                      <Calendar className="h-4 w-4" />
                                      {new Date(post.date).toLocaleDateString()}
                                    </div>
                                    <div className="flex items-center gap-1">
                                      <Clock className="h-4 w-4" />
                                      {post.readTime}
                                    </div>
                                  </div>
                                </CardHeader>

                                <CardContent className="space-y-4">
                                  <p className="text-muted-foreground line-clamp-3 font-mono text-sm">
                                    {post.summary}
                                  </p>

                                  <Button
                                    variant="ghost"
                                    className="p-0 h-auto font-semibold group/btn font-mono"
                                    onClick={() => handleReadMore(post.url)}
                                  >
                                    Read More
                                    <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                  </Button>
                                </CardContent>
                              </Card>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Mobile/Tablet View - 1 card */}
                    <div className="md:hidden">
                      <motion.div
                        key={`mobile-${currentSlide}`}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="group"
                      >
                        <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 h-full border border-border hover:border-primary/50">
                          <div className="relative overflow-hidden">
                            <Image
                              src={
                                blogPosts[currentSlide].image ||
                                "/placeholder.svg"
                              }
                              alt={blogPosts[currentSlide].title}
                              width={300}
                              height={200}
                              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                              {blogPosts[currentSlide].category}
                            </Badge>
                          </div>

                          <CardHeader>
                            <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors font-mono">
                              {blogPosts[currentSlide].title}
                            </CardTitle>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground font-mono">
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                {new Date(
                                  blogPosts[currentSlide].date
                                ).toLocaleDateString()}
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                {blogPosts[currentSlide].readTime}
                              </div>
                            </div>
                          </CardHeader>

                          <CardContent className="space-y-4">
                            <p className="text-muted-foreground line-clamp-3 font-mono text-sm">
                              {blogPosts[currentSlide].summary}
                            </p>

                            <Button
                              variant="ghost"
                              className="p-0 h-auto font-semibold group/btn font-mono"
                              onClick={() =>
                                handleReadMore(blogPosts[currentSlide].url)
                              }
                            >
                              Read More
                              <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                            </Button>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </div>

                    {/* Navigation Controls */}
                    <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={prevSlide}
                        className="bg-background/80 backdrop-blur-sm hover:bg-background pointer-events-auto shadow-lg"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={nextSlide}
                        className="bg-background/80 backdrop-blur-sm hover:bg-background pointer-events-auto shadow-lg"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>

                    {/* Slide Indicators */}
                    <div className="flex justify-center mt-8 gap-2">
                      {blogPosts.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => goToSlide(index)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            index === currentSlide
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
