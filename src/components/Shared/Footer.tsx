"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export function Footer() {
  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Mail, href: "mailto:john@example.com", label: "Email" },
  ]

  const quickLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#blog", label: "Blog" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <footer className="bg-background border-t mt-8 font-mono">
      <div className="container mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Shohaib Hossain</h3>
            <p className="text-muted-foreground">
              Full Stack Developer passionate about creating amazing digital experiences.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="icon"
                  asChild
                  className="hover:bg-primary hover:text-primary-foreground transition-colors bg-transparent"
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                    <social.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              {quickLinks.map((link, index) => (
                <a key={index} href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>khanshohaibhossain@gmail.com</p>
              <p>+88 0130-3429-044</p>
              <p>Dhaka, Bangladesh</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="border-t mt-12 pt-8 text-center text-muted-foreground"
        >
          <p>&copy; {new Date().getFullYear()} Shohaib Hossain. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
