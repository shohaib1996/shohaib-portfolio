"use client"

import { motion, easeOut } from "framer-motion" // <-- import easeOut
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Image from "next/image"

export function BlogSection() {
  const blogPosts = [
    {
      title: "Building Scalable React Applications",
      summary: "Learn best practices for structuring and scaling React applications for enterprise-level projects.",
      image: "/placeholder.svg?height=200&width=300",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "React",
      url: "/blog/scalable-react-apps",
    },
    {
      title: "The Future of Web Development",
      summary: "Exploring emerging trends and technologies that will shape the future of web development.",
      image: "/placeholder.svg?height=200&width=300",
      date: "2024-01-08",
      readTime: "6 min read",
      category: "Web Dev",
      url: "/blog/future-web-dev",
    },
    {
      title: "Optimizing Performance in Next.js",
      summary: "Advanced techniques for improving performance and user experience in Next.js applications.",
      image: "/placeholder.svg?height=200&width=300",
      date: "2024-01-01",
      readTime: "10 min read",
      category: "Next.js",
      url: "/blog/nextjs-performance",
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
    <section id="blog" className="py-8 font-mono">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className=""
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-center mb-16">
            Latest Blog Posts
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group h-full">
                  <div className="relative overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4">{post.category}</Badge>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
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
                    <p className="text-muted-foreground line-clamp-3">{post.summary}</p>

                    <Button variant="ghost" className="p-0 h-auto font-semibold group/btn" asChild>
                      <a href={post.url}>
                        Read More
                        <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <a href="/blog">
                View All Posts
                <ArrowRight className="h-5 w-5 ml-2" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
