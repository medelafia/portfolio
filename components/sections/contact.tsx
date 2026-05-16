"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Mail, Github, Linkedin, Send, CheckCircle2, AlertCircle, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

const socialLinks = [
  {
    name: "Email",
    href: "mailto:mohamed.elafia8@etu.uae.ac.ma",
    icon: Mail,
    value: "mohamed.elafia8@etu.uae.ac.ma",
  },
  {
    name: "GitHub",
    href: "https://github.com/medelafia",
    icon: Github,
    value: "github.com/medelafia",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/mohamed-el-afia-bb5047286",
    icon: Linkedin,
    value: "linkedin.com/in/mohamed-el-afia",
  },
]

export function ContactSection() {
  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState("loading")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Failed to send message")
      }

      setFormState("success")
      setFormData({ name: "", email: "", message: "" })
      
      // Reset after 3 seconds
      setTimeout(() => setFormState("idle"), 3000)
    } catch (error) {
      console.error("Contact form error:", error)
      setFormState("error")
      setTimeout(() => setFormState("idle"), 3000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section id="contact" className="py-24 lg:py-32" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-mono text-sm">07. What&apos;s Next?</span>
            <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6">Get In Touch</h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              I&apos;m currently looking for new opportunities. Whether you have a question or just want 
              to say hi, my inbox is always open!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-8"
            >
              {/* Quick Info */}
              <div className="p-6 rounded-xl bg-secondary/50 border border-border">
                <h3 className="text-lg font-semibold mb-4">Quick Info</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>Essaouira, Morocco (Open to Remote)</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Clock className="w-5 h-5 text-primary" />
                    <span>Response within 24 hours</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Connect With Me</h3>
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target={link.name !== "Email" ? "_blank" : undefined}
                    rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <link.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{link.name}</div>
                      <div className="text-sm text-muted-foreground">{link.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={formState === "loading"}
                      className="bg-secondary/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={formState === "loading"}
                      className="bg-secondary/50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your message..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={formState === "loading"}
                    rows={6}
                    className={cn(
                      "w-full px-3 py-2 rounded-lg border border-border bg-secondary/50",
                      "text-foreground placeholder:text-muted-foreground",
                      "focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent",
                      "resize-none transition-colors",
                      "disabled:opacity-50 disabled:cursor-not-allowed"
                    )}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={formState === "loading" || formState === "success"}
                >
                  {formState === "loading" ? (
                    <>
                      <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
                      Sending...
                    </>
                  ) : formState === "success" ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 mr-2" />
                      Message Sent!
                    </>
                  ) : formState === "error" ? (
                    <>
                      <AlertCircle className="w-4 h-4 mr-2" />
                      Try Again
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>

                {formState === "success" && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-sm text-green-500"
                  >
                    Thanks for reaching out! I&apos;ll get back to you soon.
                  </motion.p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
