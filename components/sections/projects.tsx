"use client"

import { useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type ProjectCategory = "all" | "ai" | "devops" | "backend" | "fullstack"

interface Project {
  title: string
  description: string
  longDescription: string
  techStack: string[]
  category: ProjectCategory[]
  github: string
  demo?: string
  image: string
  featured?: boolean
}

const projects: Project[] = [
  {
    title: "OUMA — AI Monitoring & Predictive System",
    description: "Intelligent infrastructure monitoring platform with predictive analytics for proactive issue detection.",
    longDescription: "A comprehensive AI-powered monitoring solution that analyzes system metrics in real-time, predicts potential failures before they occur, and provides actionable insights for infrastructure optimization. Features include anomaly detection, automated alerting, and predictive maintenance scheduling.",
    techStack: ["Python", "TensorFlow", "Kubernetes", "Prometheus", "Grafana", "FastAPI", "PostgreSQL", "Redis"],
    category: ["ai", "devops"],
    github: "https://github.com/mohamedelafia/ouma",
    image: "/projects/ouma.png",
    featured: true,
  },
  {
    title: "Banking Microservices System",
    description: "Scalable banking platform built with microservices architecture for high availability and fault tolerance.",
    longDescription: "A production-grade banking system implementing core banking operations through loosely coupled microservices. Includes account management, transaction processing, fraud detection, and real-time notifications with event-driven architecture.",
    techStack: ["Spring Boot", "Kafka", "Docker", "Kubernetes", "PostgreSQL", "Redis", "gRPC", "Istio"],
    category: ["backend", "devops"],
    github: "https://github.com/mohamedelafia/banking-microservices",
    image: "/projects/banking.png",
    featured: true,
  },
  {
    title: "Movie Recommendation System",
    description: "AI-powered recommendation engine using collaborative filtering and content-based algorithms.",
    longDescription: "An intelligent movie recommendation platform that combines collaborative filtering with content-based approaches to deliver personalized suggestions. Features include user preference learning, real-time recommendations, and a modern Angular frontend.",
    techStack: ["Spring Boot", "Angular", "Python", "Scikit-learn", "PostgreSQL", "Docker", "Redis"],
    category: ["ai", "fullstack"],
    github: "https://github.com/mohamedelafia/movie-recommender",
    demo: "https://movies.mohamedelafia.dev",
    image: "/projects/movies.png",
    featured: true,
  },
  {
    title: "Fitness Tracker App",
    description: "Cross-platform fitness application with AI-powered workout recommendations and progress tracking.",
    longDescription: "A comprehensive fitness tracking solution built with Flutter for seamless cross-platform experience. Features workout logging, nutrition tracking, AI-generated workout plans, and detailed analytics with FastAPI backend.",
    techStack: ["Flutter", "FastAPI", "Python", "TensorFlow", "PostgreSQL", "Firebase", "Docker"],
    category: ["ai", "fullstack"],
    github: "https://github.com/mohamedelafia/fitness-tracker",
    image: "/projects/fitness.png",
  },
  {
    title: "Sales Analytics API",
    description: "RESTful API for real-time sales data analysis with advanced reporting capabilities.",
    longDescription: "A high-performance analytics API designed for processing and analyzing large volumes of sales data. Features include real-time aggregations, custom report generation, data visualization endpoints, and integration with popular BI tools.",
    techStack: ["Node.js", "Express", "PostgreSQL", "Redis", "Docker", "AWS", "GraphQL"],
    category: ["backend"],
    github: "https://github.com/mohamedelafia/sales-analytics-api",
    image: "/projects/analytics.png",
  },
  {
    title: "Library Management System",
    description: "Full-stack library management solution with inventory tracking and member management.",
    longDescription: "A complete library management system featuring book cataloging, member management, borrowing workflows, fine calculations, and reporting. Built with modern technologies for scalability and ease of use.",
    techStack: ["Spring Boot", "React", "PostgreSQL", "Docker", "Redis", "Elasticsearch"],
    category: ["fullstack", "backend"],
    github: "https://github.com/mohamedelafia/library-management",
    image: "/projects/library.png",
  },
]

const categories: { value: ProjectCategory; label: string }[] = [
  { value: "all", label: "All Projects" },
  { value: "ai", label: "AI / ML" },
  { value: "devops", label: "DevOps" },
  { value: "backend", label: "Backend" },
  { value: "fullstack", label: "Full Stack" },
]

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const filteredProjects = projects.filter(
    (project) => activeCategory === "all" || project.category.includes(activeCategory)
  )

  return (
    <section id="projects" className="py-24 lg:py-32" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="text-primary font-mono text-sm">03.</span>
              <h2 className="text-3xl sm:text-4xl font-bold">Featured Projects</h2>
              <div className="h-px flex-1 bg-border max-w-xs" />
            </div>
            <p className="text-muted-foreground max-w-2xl">
              A selection of projects that showcase my expertise in building scalable, production-ready applications.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap gap-2 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setActiveCategory(category.value)}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-lg transition-all",
                  activeCategory === category.value
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                )}
              >
                {category.label}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.article
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={cn(
                    "group relative rounded-xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-all hover:shadow-xl hover:shadow-primary/5",
                    project.featured && "md:col-span-2"
                  )}
                >
                  {/* Project Image Placeholder */}
                  <div className={cn(
                    "relative bg-gradient-to-br from-primary/10 via-secondary to-primary/5",
                    project.featured ? "h-64" : "h-48"
                  )}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl font-bold text-primary/20">
                        {project.title.charAt(0)}
                      </div>
                    </div>
                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 right-4 px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                        Featured
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2 shrink-0">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg hover:bg-secondary transition-colors"
                          aria-label={`View ${project.title} on GitHub`}
                        >
                          <Github className="w-5 h-5 text-muted-foreground hover:text-foreground" />
                        </a>
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg hover:bg-secondary transition-colors"
                            aria-label={`View ${project.title} live demo`}
                          >
                            <ExternalLink className="w-5 h-5 text-muted-foreground hover:text-foreground" />
                          </a>
                        )}
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.featured ? project.longDescription : project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs font-medium bg-secondary text-muted-foreground rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>

          {/* View More */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://github.com/mohamedelafia"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                View All on GitHub
                <ChevronRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
