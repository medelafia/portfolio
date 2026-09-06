"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import {
  motion,
  useInView,
  AnimatePresence,
} from "framer-motion"
import {
  ExternalLink,
  Github,
  ChevronRight,
  ChevronLeft,
  ArrowUpRight,
  Sparkles,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type ProjectCategory =
  | "all"
  | "ai"
  | "devops"
  | "backend"
  | "fullstack"

interface Project {
  title: string
  description: string
  longDescription: string
  techStack: string[]
  category: ProjectCategory[]
  github: string
  demo?: string
  images: string[]
  featured?: boolean
}

const projects: Project[] = [
  {
    title: "OUMA - AI Monitoring & Predictive System",
    description:
      "Incident prediction system for cloud-native applications using modern technologies.",
    longDescription:
      "Design and develop an incident prediction system for cloud-native applications using Python, FastAPI, Next.js, deep learning, Prometheus, and Kubernetes. Features real-time monitoring, anomaly detection, and predictive analytics for infrastructure optimization.",
    techStack: [
      "Python",
      "FastAPI",
      "Next.js",
      "Deep Learning",
      "Prometheus",
      "Kubernetes",
    ],
    category: ["ai", "devops"],
    github: "https://github.com/medelafia/ouma",
    images: [
      "/projects/ouma/1.png",
      "/projects/ouma/2.png",
      "/projects/ouma/3.png",
      "/projects/ouma/4.png",
      "/projects/ouma/5.png",
      "/projects/ouma/6.png",
      "/projects/ouma/7.png",
      "/projects/ouma/8.png",
    ],
    featured: true,
  },

  {
    title: "Movie Recommendation System",
    description:
      "AI-powered recommendation engine with sentiment analysis and real-time personalization.",
    longDescription:
      "Movie Recommendation System built with an Angular frontend, a Spring Boot backend secured with JWT, and a Python (FastAPI) recommendation engine using a KNN machine learning model. The system integrates sentiment analysis to classify user reviews, Kafka for event-driven communication, Redis for caching user preferences, and MySQL for persistent storage.",
    techStack: [
      "Angular",
      "Spring Boot",
      "FastAPI",
      "KNN",
      "Kafka",
      "Redis",
      "MySQL",
      "JWT",
    ],
    category: ["ai", "fullstack"],
    github:
      "https://github.com/medelafia/Movie-recommendation-system",
    images: [
      "/projects/movie_recommendation/1.png",
      "/projects/movie_recommendation/2.png",
      "/projects/movie_recommendation/3.png",
      "/projects/movie_recommendation/4.png",
      "/projects/movie_recommendation/5.png",
      "/projects/movie_recommendation/6.png",
      "/projects/movie_recommendation/7.png",
    ],
    featured: true,
  },

  {
    title: "Library Management System",
    description:
      "Full-stack library solution with Keycloak authentication and AWS deployment.",
    longDescription:
      "Full-stack application built with Angular and PrimeNG on the frontend, secured via Keycloak authentication; a Jakarta EE backend using JAX-RS and Hibernate with MySQL; containerized using Docker, automated with GitHub Actions CI/CD, and deployed on AWS using ECR, EC2, and S3.",
    techStack: [
      "Angular",
      "PrimeNG",
      "Keycloak",
      "Jakarta EE",
      "JAX-RS",
      "Hibernate",
      "MySQL",
      "Docker",
      "AWS",
    ],
    category: ["fullstack", "backend"],
    github:
      "https://github.com/medelafia/Library-management-backend",
    images: [],
  },

  {
    title: "Fitness Tracker Mobile App",
    description:
      "Cross-platform fitness application with motion detection and workout tracking.",
    longDescription:
      "A mobile fitness tracking application developed using Flutter, with a FastAPI backend for storing workout history. The app utilizes the device's accelerometer and gyroscope to detect movements during workouts and tracks distance traveled during courses.",
    techStack: [
      "Flutter",
      "FastAPI",
      "Accelerometer",
      "Gyroscope",
      "Python",
    ],
    category: ["fullstack"],
    github:
      "https://github.com/medelafia/fitness-tracker",
    images: [],
  },

  {
    title: "Hospital Management System",
    description:
      "AI-driven disease prediction platform using deep learning models.",
    longDescription:
      "Personal project featuring a React.js frontend styled with Bootstrap, a FastAPI backend for high-performance asynchronous APIs, and AI-driven disease prediction models built in Python using TensorFlow and Scikit-learn.",
    techStack: [
      "React.js",
      "Bootstrap",
      "FastAPI",
      "TensorFlow",
      "Scikit-learn",
      "Python",
    ],
    category: ["ai", "fullstack"],
    github:
      "https://github.com/medelafia/ai-doctor-backend",
    images: [
      "/projects/hospital_management/1.png",
      "/projects/hospital_management/2.png",
      "/projects/hospital_management/3.png",
      "/projects/hospital_management/4.png",
      "/projects/hospital_management/5.png",
    ],
  },

  {
    title: "UGTM Essaouira Portal",
    description:
      "Digital membership and service-request platform for a teachers' union.",
    longDescription:
      "A full-stack Arabic-first RTL digital platform for a Moroccan teachers' union, handling membership renewal, multi-type service requests, article publishing, and an admin dashboard with role-based access, file uploads, and PDF document generation with QR-code verification.",
    techStack: [
      "Next.js",
      "PostgreSQL",
      "Prisma",
      "Tailwind CSS",
    ],
    category: ["fullstack", "backend"],
    github: "", 
    demo:
      "https://ugtm-portal.vercel.app",
    images: [
      "/projects/ugtm_essaouira_portal/1.png",
      "/projects/ugtm_essaouira_portal/2.png",
      "/projects/ugtm_essaouira_portal/3.png",
      "/projects/ugtm_essaouira_portal/4.png",
      "/projects/ugtm_essaouira_portal/5.png",
    ],
  },
  {
    title: "Resumind",
    description:
    "AI-powered tool for evaluating and improving the ATS compatibility score of resumes.",
    longDescription:
    "An AI-powered resume analysis platform that evaluates resumes against Applicant Tracking System (ATS) criteria. It analyzes resume structure, keywords, formatting, skills, and job-description alignment to generate an ATS score and provide actionable recommendations for improving the resume’s chances of passing automated screening systems.",
    techStack: [
      "React.js",
      "AI",
    ],
    category: ["fullstack", "ai"],
    github:
      "https://github.com/medelafia/Resumind",
    images: [
      "/projects/resumind/1.png",
      "/projects/resumind/2.png",
      "/projects/resumind/3.png",
      "/projects/resumind/4.png",
      "/projects/resumind/5.png",
    ],
  },{
    title: "AI-Diagno",
    description:
      "AI-powered tool for preliminary symptom analysis and diagnostic insights.", 
    longDescription:
      "Ai-Doctor combines physician expertise with machine learning to provide accurate, evidence‑based diagnostic suggestions based on your selected symptoms and lab results. Users can add symptoms, and the system analyzes them against clinical data to generate condition explanations, recommended precautions, and relevant medical insights. The platform is designed for educational purposes only — it helps you understand possible causes and next steps, but always reminds you to consult a healthcare provider for official diagnosis and treatment.", 
    techStack: [
      "React.js",
      "AI",
      "Neural networks" , 
      "FastApi", 
      "Deep learning"
    ],
    category: ["fullstack", "ai"],
    github:
      "https://github.com/medelafia/AI-Diagno",
    demo : 
      "https://ai-doctor-wgkb.vercel.app/",
    images: [
      "/projects/ai_diagno/1.png",
      "/projects/ai_diagno/2.png",
      "/projects/ai_diagno/3.png",
      "/projects/ai_diagno/4.png",
      "/projects/ai_diagno/5.png",
    ],
  }
]

const categories: {
  value: ProjectCategory
  label: string
}[] = [
  { value: "all", label: "All" },
  { value: "ai", label: "AI / ML" },
  { value: "devops", label: "DevOps" },
  { value: "backend", label: "Backend" },
  { value: "fullstack", label: "Full Stack" },
]

/* ============================================================
   PROJECT IMAGE SLIDER
============================================================ */

function ProjectImageSlider({
  images,
  title,
}: {
  images: string[]
  title: string
}) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex(
        (prev) => (prev + 1) % images.length
      )
    }, 4000)

    return () => clearInterval(interval)
  }, [images.length])

  const previousImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    )
  }

  const nextImage = () => {
    setCurrentIndex(
      (prev) => (prev + 1) % images.length
    )
  }

  if (!images.length) {
    return (
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.12),transparent_65%)]" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <div className="absolute inset-0 scale-150 rounded-full bg-primary/5 blur-3xl" />

            <span className="relative text-7xl font-black tracking-tighter text-primary/20">
              {title.charAt(0)}
            </span>
          </div>
        </div>

        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>
    )
  }

  return (
    <div className="group/slider absolute inset-0 overflow-hidden">
      <AnimatePresence mode="sync">
        <motion.div
          key={images[currentIndex]}
          initial={{
            opacity: 0,
            scale: 1.04,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 0.98,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentIndex]}
            alt={`${title} screenshot ${currentIndex + 1}`}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 70vw"
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark overlay */}

      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />

      <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover/slider:bg-black/0" />

      {/* Image number */}

      <div className="absolute left-5 top-5 z-20 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
        {String(currentIndex + 1).padStart(2, "0")}{" "}
        <span className="text-white/40">/</span>{" "}
        {String(images.length).padStart(2, "0")}
      </div>

      {/* Navigation */}

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={previousImage}
            aria-label="Previous image"
            className="
              absolute
              left-4
              top-1/2
              z-20
              flex
              h-10
              w-10
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-black/40
              text-white
              opacity-0
              backdrop-blur-md
              transition-all
              duration-300
              hover:scale-110
              hover:bg-black/70
              group-hover/slider:opacity-100
              max-md:opacity-100
            "
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={nextImage}
            aria-label="Next image"
            className="
              absolute
              right-4
              top-1/2
              z-20
              flex
              h-10
              w-10
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-black/40
              text-white
              opacity-0
              backdrop-blur-md
              transition-all
              duration-300
              hover:scale-110
              hover:bg-black/70
              group-hover/slider:opacity-100
              max-md:opacity-100
            "
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </>
      )}

      {/* Progress indicators */}

      {images.length > 1 && (
        <div className="absolute bottom-5 left-5 right-5 z-20 flex gap-1.5">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to image ${index + 1}`}
              className="group/dot relative h-1 flex-1 overflow-hidden rounded-full bg-white/20"
            >
              <span
                className={cn(
                  "absolute inset-y-0 left-0 rounded-full bg-white transition-all duration-300",
                  index === currentIndex
                    ? "w-full"
                    : "w-0 group-hover/dot:w-full"
                )}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

/* ============================================================
   PROJECT CARD
============================================================ */

function ProjectCard({
  project,
  index,
}: {
  project: Project
  index: number
}) {
  return (
    <motion.article
      layout
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 20,
      }}
      transition={{
        duration: 0.45,
        delay: index * 0.06,
      }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border/60 bg-card/60 backdrop-blur-sm",
        "transition-all duration-500",
        "hover:-translate-y-1 hover:border-primary/30",
        "hover:shadow-2xl hover:shadow-primary/5",
      )}
    >
      {/* Featured glow */}

      {project.featured && (
        <div className="pointer-events-none absolute -right-32 -top-32 h-64 w-64 rounded-full bg-primary/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      )}

      {/* Image */}

      <div
        className={cn(
          "relative overflow-hidden",
          project.featured
            ? "h-[240px] sm:h-[300px]"
            : "h-[190px]"
        )}
      >
        <ProjectImageSlider
          images={project.images}
          title={project.title}
        />

        {/* Featured label */}

        {project.featured && (
          <div className="absolute right-5 top-5 z-30">
            <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
              <Sparkles className="h-3 w-3 text-primary" />
              Featured
            </div>
          </div>
        )}
      </div>

      {/* Content */}

      <div className="relative p-6 sm:p-7">
        {/* Project number */}

        <div className="mb-4 flex items-center gap-3">
          <span className="font-mono text-xs font-medium text-primary">
            {String(index + 1).padStart(2, "0")}
          </span>

          <div className="h-px w-8 bg-border" />

          <span className="text-xs uppercase tracking-widest text-muted-foreground">
            {project.featured
              ? "Featured Project"
              : "Project"}
          </span>
        </div>

        {/* Title + actions */}

        <div className="flex items-start justify-between gap-4">
          <h3
            className="
              max-w-xl
              text-xl
              font-bold
              tracking-tight
              text-foreground
              transition-colors
              duration-300
              group-hover:text-primary
              sm:text-2xl
            "
          >
            {project.title}
          </h3>

          <div className="flex shrink-0 items-center gap-1">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} on GitHub`}
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-transparent
                  text-muted-foreground
                  transition-all
                  hover:border-border
                  hover:bg-secondary
                  hover:text-foreground
                "
              >
                <Github className="h-[18px] w-[18px]" />
              </a>
            )}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} live demo`}
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-transparent
                  text-muted-foreground
                  transition-all
                  hover:border-border
                  hover:bg-secondary
                  hover:text-primary
                "
              >
                <ArrowUpRight className="h-[18px] w-[18px]" />
              </a>
            )}
          </div>
        </div>

        {/* Description */}

        <p
          className={cn(
            "mt-4 max-w-3xl leading-7 text-muted-foreground",
            project.featured
              ? "text-sm sm:text-[15px]"
              : "text-sm"
          )}
        >
          {project.featured
            ? project.longDescription
            : project.description}
        </p>

        {/* Technologies */}

        <div className="mt-6 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="
                rounded-md
                border
                border-border/60
                bg-secondary/50
                px-2.5
                py-1
                text-[11px]
                font-medium
                text-muted-foreground
                transition-colors
                group-hover:border-primary/10
                group-hover:text-foreground
              "
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}

/* ============================================================
   PROJECTS SECTION
============================================================ */

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] =
    useState<ProjectCategory>("all")

  const ref = useRef(null)

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  })

  const filteredProjects = projects.filter(
    (project) =>
      activeCategory === "all" ||
      project.category.includes(activeCategory)
  )

  return (
    <section
      id="projects"
      ref={ref}
      className="relative overflow-hidden py-24 lg:py-32"
    >
      {/* Background decoration */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/[0.025] blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">

          {/* ==================================================
              HEADER
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {}
            }
            transition={{
              duration: 0.6,
            }}
            className="mb-14"
          >
            <div className="mb-5 flex items-center gap-4">
              <span className="font-mono text-sm text-primary">
                03.
              </span>

              <div className="h-px w-10 bg-primary/50" />

              <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Selected Work
              </span>
            </div>

            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  Featured{" "}
                  <span className="text-muted-foreground">
                    Projects
                  </span>
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                  A selection of projects showcasing my
                  experience across AI, cloud-native
                  systems, backend engineering, and
                  full-stack development.
                </p>
              </div>

              <div className="hidden shrink-0 font-mono text-xs text-muted-foreground md:block">
                {String(filteredProjects.length).padStart(
                  2,
                  "0"
                )}{" "}
                PROJECTS
              </div>
            </div>
          </motion.div>

          {/* ==================================================
              FILTERS
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {}
            }
            transition={{
              duration: 0.5,
              delay: 0.1,
            }}
            className="mb-10 overflow-x-auto pb-1"
          >
            <div className="inline-flex min-w-max rounded-xl border border-border/60 bg-secondary/30 p-1 backdrop-blur-sm">
              {categories.map((category) => {
                const active =
                  activeCategory === category.value

                return (
                  <button
                    key={category.value}
                    type="button"
                    onClick={() =>
                      setActiveCategory(
                        category.value
                      )
                    }
                    className={cn(
                      "relative rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300",
                      active
                        ? "text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {active && (
                      <motion.div
                        layoutId="active-project-filter"
                        className="absolute inset-0 rounded-lg bg-primary"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}

                    <span className="relative z-10">
                      {category.label}
                    </span>
                  </button>
                )
              })}
            </div>
          </motion.div>

          {/* ==================================================
              PROJECT GRID
          ================================================== */}

          <motion.div
            layout
            className="grid gap-6 md:grid-cols-2"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map(
                (project, index) => (
                  <ProjectCard
                    key={project.title}
                    project={project}
                    index={index}
                  />
                )
              )}
            </AnimatePresence>
          </motion.div>

          {/* ==================================================
              EMPTY STATE
          ================================================== */}

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              className="rounded-2xl border border-dashed border-border p-16 text-center"
            >
              <p className="text-muted-foreground">
                No projects found in this category.
              </p>
            </motion.div>
          )}

          {/* ==================================================
              VIEW ALL
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {}
            }
            transition={{
              duration: 0.5,
              delay: 0.4,
            }}
            className="mt-14 flex justify-center"
          >
            <Button
              variant="outline"
              size="lg"
              asChild
              className="
                group
                rounded-xl
                border-border/70
                px-6
                transition-all
                hover:border-primary/40
                hover:bg-primary/5
              "
            >
              <a
                href="https://github.com/medelafia"
                target="_blank"
                rel="noopener noreferrer"
              >
                View all projects
                <ChevronRight
                  className="
                    ml-2
                    h-4
                    w-4
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
