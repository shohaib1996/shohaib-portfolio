"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Github, Code2 } from "lucide-react";
import { ModeToggle } from "../ModeToggle";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#education", label: "Education" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#blog", label: "Blog" },
    { href: "#contact", label: "Contact" },
  ];

  const socialLinks = [
    { href: "https://www.facebook.com/ananta.asim.5/", icon: Facebook },
    {
      href: "https://www.linkedin.com/in/shohaib-hossain-0792041ba/",
      icon: Linkedin,
    },
    { href: "https://github.com/shohaib1996", icon: Github },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="relative">
          <div className="glowing-border">
            <div className="glowing-border-content bg-background rounded-3xl">
              <nav className="flex items-center justify-between border border-border rounded-2xl bg-background/90 backdrop-blur-md p-0">
                {/* Main Content Container */}
                <div className="flex-1 flex flex-row-reverse lg:flex-row items-center justify-between py-4 px-4 gap-4">
                  {/* Logo */}
                  <Link href="/" className="flex items-center">
                    <Code2
                      className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-500 dark:text-emerald-400 rounded mr-2"
                      style={{ backgroundColor: "transparent" }}
                    />
                    <span className="text-lg sm:text-xl font-semibol">
                      Shohaib.dev
                    </span>
                  </Link>

                  {/* Desktop Navigation */}
                  <div className="hidden lg:flex">
                    <ul className="flex items-center space-x-4 xl:space-x-6">
                      {navItems.map((item, index) => (
                        <li key={item.href}>
                          <motion.a
                            href={item.href}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index }}
                            className="text-sm font-medium hover:text-primary transition-colors"
                          >
                            {item.label}
                          </motion.a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Social Links & Mobile Menu */}
                  <div className="flex items-center space-x-3">
                    {/* Social Links - Hidden on mobile */}
                    <div className="hidden md:flex items-center space-x-2 xl:space-x-3">
                      {socialLinks.map((social, index) => (
                        <Link
                          key={index}
                          href={social.href}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <social.icon className="w-4 h-4" />
                        </Link>
                      ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                      onClick={() => setIsMobileMenu(!isMobileMenu)}
                      className="lg:hidden border border-border rounded-lg p-2 hover:bg-muted transition-colors"
                    >
                      <div className="w-5 h-4 flex flex-col justify-between">
                        <span
                          className={`block h-0.5 bg-current transition-transform ${
                            isMobileMenu ? "rotate-45 translate-y-1.5" : ""
                          }`}
                        />
                        <span
                          className={`block h-0.5 bg-current transition-opacity ${
                            isMobileMenu ? "opacity-0" : ""
                          }`}
                        />
                        <span
                          className={`block h-0.5 bg-current transition-transform ${
                            isMobileMenu ? "-rotate-45 -translate-y-1.5" : ""
                          }`}
                        />
                      </div>
                    </button>
                  </div>
                </div>

                {/* Theme Switch */}
                <div className="border-l border-border pl-3 pr-3">
                  <ModeToggle />
                </div>
              </nav>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenu && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-2 bg-background/95 backdrop-blur-md border border-border rounded-2xl p-4"
            >
              <div className="space-y-3">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block py-2 text-sm font-medium hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenu(false)}
                  >
                    {item.label}
                  </a>
                ))}

                {/* Mobile Social Links */}
                <div className="flex items-center space-x-4 pt-3 border-t border-border">
                  {socialLinks.map((social, index) => (
                    <Link
                      target="_blank"
                      key={index}
                      href={social.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <social.icon className="w-4 h-4" />
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.header>
  );
}
