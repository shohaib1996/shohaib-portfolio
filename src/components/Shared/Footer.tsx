"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/shohaib1996", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/shohaib-hossain-0792041ba/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:khanshohaibhossain@gmail.com", label: "Email" },
  ];

  const quickLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#blog", label: "Blog" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer className="relative bg-background border-t mt-8 font-mono overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-emerald-500/5 dark:from-emerald-400/10 dark:via-transparent dark:to-emerald-400/10 rounded-3xl" />
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-50">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* Light mode pattern */}
            <pattern
              id="grid-light"
              width="32"
              height="32"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 32 0 L 0 0 0 32"
                fill="none"
                stroke="rgb(16 185 129)"
                strokeWidth="2"
                opacity="0.5"
              />
            </pattern>

            {/* Dark mode pattern with glow */}
            <pattern
              id="grid-dark"
              width="32"
              height="32"
              patternUnits="userSpaceOnUse"
            >
              <defs>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <path
                d="M 32 0 L 0 0 0 32"
                fill="none"
                stroke="rgba(255, 255, 255, 0.4)"
                strokeWidth="2"
                filter="url(#glow)"
              />
            </pattern>
          </defs>

          {/* Background rectangles for each mode */}
          <rect
            width="100%"
            height="100%"
            fill="url(#grid-light)"
            className="dark:hidden"
          />
          <rect
            width="100%"
            height="100%"
            fill="url(#grid-dark)"
            className="hidden dark:block"
          />
        </svg>
      </div>

      {/* Animated grid overlay for extra glow effect in dark mode */}
      <div className="absolute inset-0 opacity-20 hidden dark:block">
        <div className="w-full h-full bg-gradient-to-br from-transparent via-white/5 to-transparent animate-pulse"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {/* Brand */}
          <div className="space-y-4">
            <motion.h3
              className="text-2xl font-bold relative text-emerald-500 dark:text-emerald-400"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Shohaib Hossain
            </motion.h3>
            <p className="text-muted-foreground relative z-10">
              Full Stack Developer passionate about creating amazing digital
              experiences.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Button
                    variant="outline"
                    size="icon"
                    asChild
                    className="hover:bg-emerald-500 hover:text-primary-foreground transition-colors bg-transparent hover:shadow-lg hover:shadow-emerald-500/25 dark:hover:shadow-white/25 dark:hover:text-white border-emerald-200 dark:border-white/20"
                  >
                    <Link
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </Link>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold relative text-emerald-500 dark:text-emerald-400">
              Quick Links
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-transparent group-hover:w-full transition-all duration-300 dark:from-white"></div>
            </h4>
            <div className="flex flex-col space-y-2">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors relative group w-fit"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="relative z-10">{link.label}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 dark:from-white/10"></div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-emerald-500 dark:text-emerald-400">
              Get In Touch
            </h4>
            <div className="space-y-2 text-muted-foreground">
              <motion.p
                className="hover:text-primary transition-colors cursor-pointer"
                whileHover={{ x: 5 }}
              >
                khanshohaibhossain@gmail.com
              </motion.p>
              <motion.p
                className="hover:text-primary transition-colors cursor-pointer"
                whileHover={{ x: 5 }}
              >
                +88 0130-3429-044
              </motion.p>
              <motion.p
                className="hover:text-primary transition-colors cursor-pointer"
                whileHover={{ x: 5 }}
              >
                Dhaka, Bangladesh
              </motion.p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className=" mt-12 pt-8 text-center text-muted-foreground relative"
        >
          <div className=""></div>
          <p className="relative z-10">
            &copy; {new Date().getFullYear()} Shohaib Hossain. All rights
            reserved.
          </p>
        </motion.div>
      </div>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-emerald-500/10 to-transparent dark:from-white/10 rounded-br-full"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-emerald-500/10 to-transparent dark:from-white/10 rounded-tl-full"></div>
    </footer>
  );
}
