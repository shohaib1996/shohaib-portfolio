"use client"

import type React from "react"

import { motion, easeOut } from "framer-motion" // <-- import easeOut
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone Number",
      value: "+880 1234-567890",
      href: "tel:+8801234567890",
    },
    {
      icon: Mail,
      label: "Email",
      value: "james.dev@example.com",
      href: "mailto:james.dev@example.com",
    },
    {
      icon: MessageSquare,
      label: "WhatsApp",
      value: "+880 1234-567890",
      href: "https://wa.me/8801234567890",
    },
    {
      icon: MapPin,
      label: "Address",
      value: "Dhaka, Bangladesh",
      href: "https://maps.google.com/maps?q=Dhaka,Bangladesh",
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
    <section id="contact" className=" relative overflow-hidden font-mono">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 border border-border rounded-3xl backdrop-blur-sm py-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className=""
        >
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Contact Form */}
            <motion.div variants={itemVariants} className="lg:col-span-7">
              <div className="relative">
                <Card className="border border-border rounded-3xl backdrop-blur-sm relative z-10">
                  <CardHeader>
                    <CardTitle className="text-3xl md:text-4xl font-bold text-emerald-500 dark:text-emerald-400 mb-4">Let's Connect</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Input
                            name="name"
                            placeholder="Your name"
                            value={formData.name}
                            onChange={handleChange}
                            className="bg-muted/50 border border-border rounded-2xl h-12"
                            required
                          />
                        </div>
                        <div>
                          <Input
                            name="phone"
                            placeholder="Phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="bg-muted/50 border border-border rounded-2xl h-12"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Input
                            name="email"
                            type="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="bg-muted/50 border border-border rounded-2xl h-12"
                            required
                          />
                        </div>
                        <div>
                          <Input
                            name="subject"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="bg-muted/50 border border-border rounded-2xl h-12"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <Textarea
                          name="message"
                          placeholder="Message"
                          rows={6}
                          value={formData.message}
                          onChange={handleChange}
                          className="bg-muted/50 border border-border rounded-2xl resize-none"
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="bg-emerald-500 hover:bg-emerald-400 text-white rounded-2xl group"
                      >
                        Send Message
                        <Send className="h-5 w-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={itemVariants} className="lg:col-span-5 lg:pl-8">
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <Link
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="block"
                    >
                      <Card className="p-4 hover:shadow-lg transition-all duration-300 group-hover:border-primary/50 cursor-pointer relative overflow-hidden">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-muted rounded-2xl group-hover:bg-emerald-500/10 transition-colors">
                            <info.icon className="h-6 w-6 text-emerald-500 group-hover:scale-110 transition-transform" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm text-muted-foreground font-medium">{info.label}</p>
                            <h6 className="font-semibold text-foreground group-hover:text-emerald-500 transition-colors">
                              {info.value}
                            </h6>
                          </div>
                        </div>
                      </Card>
                    </Link>
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
