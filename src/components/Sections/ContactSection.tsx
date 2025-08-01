"use client";

import type React from "react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion, easeOut } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Loader2,
} from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";

export function ContactSection() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    user_name: "",
    phone: "",
    user_email: "",
    to_subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (form.current) {
        await emailjs.sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          form.current,
          { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! }
        );
        toast.success("Message sent successfully!");
        setFormData({
          user_name: "",
          phone: "",
          user_email: "",
          to_subject: "",
          message: "",
        });
        form.current.reset();
      }
    } catch (error) {
      console.error("Failed to send message:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: easeOut },
    },
  };

  return (
    <section id="contact" className="relative overflow-hidden font-mono">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glowing-border">
          <div className="glowing-border-content bg-background rounded-3xl">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className=" px-4 sm:px-6 lg:px-8 relative z-10 border border-border rounded-3xl backdrop-blur-sm py-6"
            >
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                <motion.div variants={itemVariants} className="lg:col-span-7">
                  <div className="subtle-glow-border">
                    <div className="subtle-glow-content bg-background rounded-3xl">
                      <Card className="border border-border rounded-3xl">
                        <CardHeader>
                          <CardTitle className="text-3xl md:text-4xl font-bold text-emerald-500 dark:text-emerald-400 mb-4">
                            Let's Connect
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <form
                            ref={form}
                            onSubmit={handleSubmit}
                            className="space-y-6"
                          >
                            <div className="grid md:grid-cols-2 gap-4">
                              <Input
                                name="user_name"
                                placeholder="Your name"
                                value={formData.user_name}
                                onChange={handleChange}
                                className="bg-muted/50 border border-border rounded-2xl h-12"
                                required
                              />
                              <Input
                                name="phone"
                                placeholder="Phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="bg-muted/50 border border-border rounded-2xl h-12"
                              />
                            </div>
                            <div className="grid md:grid-cols-2 gap-4">
                              <Input
                                name="user_email"
                                type="email"
                                placeholder="Email"
                                value={formData.user_email}
                                onChange={handleChange}
                                className="bg-muted/50 border border-border rounded-2xl h-12"
                                required
                              />
                              <Input
                                name="to_subject"
                                placeholder="Subject"
                                value={formData.to_subject}
                                onChange={handleChange}
                                className="bg-muted/50 border border-border rounded-2xl h-12"
                                required
                              />
                            </div>
                            <Textarea
                              name="message"
                              placeholder="Message"
                              rows={6}
                              value={formData.message}
                              onChange={handleChange}
                              className="bg-muted/50 border border-border rounded-2xl resize-none"
                              required
                            />
                            <Button
                              type="submit"
                              size="lg"
                              disabled={isSubmitting}
                              className="bg-emerald-500 hover:bg-emerald-400 text-white rounded-2xl group"
                            >
                              {isSubmitting ? (
                                <div className="flex items-center gap-2">
                                  <Loader2 className="h-5 w-5 animate-spin" />
                                  Sending...
                                </div>
                              ) : (
                                <div className="flex items-center gap-2">
                                  <Send className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                  Send Message
                                </div>
                              )}
                            </Button>
                          </form>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  variants={itemVariants}
                  className="lg:col-span-5 lg:pl-8"
                >
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
                          target={
                            info.href.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            info.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="block"
                        >
                          <div className="subtle-glow-border">
                            <div className="subtle-glow-content bg-background rounded-2xl">
                              <Card className="p-4 hover:shadow-lg transition-all duration-300 group-hover:border-primary/50 cursor-pointer">
                                <div className="flex items-center gap-4">
                                  <div className="p-3 bg-muted rounded-2xl group-hover:bg-emerald-500/10 transition-colors">
                                    <info.icon className="h-6 w-6 text-emerald-500 group-hover:scale-110 transition-transform" />
                                  </div>
                                  <div className="flex-1">
                                    <p className="text-sm text-muted-foreground font-medium">
                                      {info.label}
                                    </p>
                                    <h6 className="font-semibold text-foreground group-hover:text-emerald-500 transition-colors">
                                      {info.value}
                                    </h6>
                                  </div>
                                </div>
                              </Card>
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
