"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Heart } from "lucide-react"

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/medelafia",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/mohamed-el-afia-bb5047286",
    icon: Linkedin,
  },
  {
    name: "Email",
    href: "mailto:mohamed.elafia8@etu.uae.ac.ma",
    icon: Mail,
  },
]

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certificates", href: "#certificates" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="py-12 border-t border-border bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }}
                className="text-xl font-bold tracking-tight inline-block mb-4"
              >
                <span className="text-foreground">M</span>
                <span className="text-primary">.</span>
                <span className="text-muted-foreground">El Afia</span>
              </a>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Cloud-Native Software Engineer specializing in AI, DevOps, and distributed systems.
                Building the future, one commit at a time.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
                Quick Links
              </h3>
              <nav className="flex flex-wrap gap-x-6 gap-y-2">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </button>
                ))}
              </nav>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
                Connect
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target={link.name !== "Email" ? "_blank" : undefined}
                    rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors"
                    aria-label={link.name}
                  >
                    <link.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Mohamed El Afia. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              Built with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> using Next.js & Tailwind
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
