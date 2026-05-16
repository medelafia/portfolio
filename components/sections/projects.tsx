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
    title: "OUMA - AI Monitoring & Predictive System",
    description: "Incident prediction system for cloud-native applications using modern technologies.",
    longDescription: "Design and develop an incident prediction system for cloud-native applications using Python, FastAPI, Next.js, deep learning, Prometheus, and Kubernetes. Features real-time monitoring, anomaly detection, and predictive analytics for infrastructure optimization.",
    techStack: ["Python", "FastAPI", "Next.js", "Deep Learning", "Prometheus", "Kubernetes"],
    category: ["ai", "devops"],
    github: "https://github.com/medelafia",
    image: "/projects/ouma.png",
    featured: true,
  },
  {
    title: "Movie Recommendation System",
    description: "AI-powered recommendation engine with sentiment analysis and real-time personalization.",
    longDescription: "Movie Recommendation System built with an Angular frontend, a Spring Boot backend secured with JWT, and a Python (FastAPI) recommendation engine using a KNN machine learning model. The system integrates sentiment analysis to classify user reviews, leverages Kafka for event-driven communication, Redis for caching user preferences to reduce latency, and MySQL for persistent storage.",
    techStack: ["Angular", "Spring Boot", "FastAPI", "KNN", "Kafka", "Redis", "MySQL", "JWT"],
    category: ["ai", "fullstack"],
    github: "https://github.com/medelafia",
    image: "/projects/movies.png",
    featured: true,
  },
  {
    title: "Travel Management & Recommendation Platform",
    description: "Full-stack travel platform with collaborative filtering recommendation system.",
    longDescription: "Final Year Project featuring a React.js frontend with responsive UI design, a Spring Boot backend secured with Spring Security for RESTful services, a collaborative filtering recommendation system built in Python using Pandas and TensorFlow, deployed via FastAPI, and hosted on Google Cloud Platform with Cloudinary for image storage.",
    techStack: ["React.js", "Spring Boot", "Spring Security", "Python", "Pandas", "TensorFlow", "FastAPI", "GCP", "Cloudinary"],
    category: ["ai", "fullstack"],
    github: "https://github.com/medelafia",
    image: "/projects/travel.png",
    featured: true,
  },
  {
    title: "Ecommerce Web Application",
    description: "Full-stack e-commerce platform with CI/CD pipeline and Kubernetes deployment.",
    longDescription: "Academic project featuring a JSP-based frontend with HTML, CSS, and JavaScript; a Jakarta EE backend following MVC architecture with Hibernate and a MySQL database hosted on Aiven; containerized with Docker, automated via GitHub Actions CI/CD, orchestrated using Kubernetes, and deployed on AWS with EKS, ECR, EC2, and S3.",
    techStack: ["JSP", "Jakarta EE", "Hibernate", "MySQL", "Docker", "GitHub Actions", "Kubernetes", "AWS"],
    category: ["fullstack", "devops"],
    github: "https://github.com/medelafia",
    image: "/projects/ecommerce.png",
  },
  {
    title: "Library Management System",
    description: "Full-stack library solution with Keycloak authentication and AWS deployment.",
    longDescription: "Full-stack application built with Angular and PrimeNG on the frontend, secured via Keycloak authentication; a Jakarta EE backend using JAX-RS and Hibernate with MySQL; containerized using Docker, automated with GitHub Actions CI/CD, and deployed on AWS using ECR, EC2, and S3.",
    techStack: ["Angular", "PrimeNG", "Keycloak", "Jakarta EE", "JAX-RS", "Hibernate", "MySQL", "Docker", "AWS"],
    category: ["fullstack", "backend"],
    github: "https://github.com/medelafia",
    image: "/projects/library.png",
  },
  {
    title: "Fitness Tracker Mobile App",
    description: "Cross-platform fitness application with motion detection and workout tracking.",
    longDescription: "A mobile fitness tracking application developed using Flutter, with a FastAPI backend for storing workout history. The app utilizes the device's accelerometer and gyroscope to detect movements during workouts, such as squats, and tracks distance traveled during courses.",
    techStack: ["Flutter", "FastAPI", "Accelerometer", "Gyroscope", "Python"],
    category: ["fullstack"],
    github: "https://github.com/medelafia",
    image: "/projects/fitness.png",
  },
  {
    title: "Disease Prediction Web Application",
    description: "AI-driven disease prediction platform using deep learning models.",
    longDescription: "Personal project featuring a React.js frontend styled with Bootstrap, a FastAPI backend for high-performance asynchronous APIs, and AI-driven disease prediction models built in Python using TensorFlow and Scikit-learn.",
    techStack: ["React.js", "Bootstrap", "FastAPI", "TensorFlow", "Scikit-learn", "Python"],
    category: ["ai", "fullstack"],
    github: "https://github.com/medelafia",
    image: "/projects/disease.png",
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
                href="https://github.com/medelafia"
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
