"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Briefcase, GraduationCap, Calendar, MapPin, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface TimelineItem {
  type: "work" | "education"
  title: string
  organization: string
  location: string
  period: string
  description: string
  highlights: string[]
  current?: boolean
}

const timeline: TimelineItem[] = [
  {
    type: "work",
    title: "Backend Engineer Intern",
    organization: "S B Solutions",
    location: "Morocco",
    period: "July 2026 - Aug 2026",
    description: "Developed 12+ REST APIs handling 5K+ daily requests with <200ms average response time..",
    highlights: [
      "Integrate Redis, RabbitMQ, MinIO, Spring Security, and JWT for caching, asynchronous communication, file storage, and access control.",
      "Contribute to API testing, database migrations, pull-request reviews, CI/CD practices, monitoring, and backend documentation in a collaborative team."
    ],
    current: false,
  }, 
  {
    type: "work",
    title: "Research & Development Intern",
    organization: "3D Smart Factory",
    location: "Morocco",
    period: "Feb 2026 - July 2026",
    description: "Designing and developing incident prediction systems for cloud-native applications using modern technologies.",
    highlights: [
      "Developed incident prediction system using Python and FastAPI",
      "Built frontend interfaces with Next.js for monitoring dashboards",
      "Implemented deep learning models for predictive analytics",
      "Deployed solutions on Kubernetes with Prometheus monitoring",
    ],
    current: false,
  },
  {
    type: "work",
    title: "Computer Science Teacher",
    organization: "Ministry of National Education",
    location: "Morocco",
    period: "Dec 2024 - Present",
    description: "Teaching core curriculum subjects at the secondary (college) level in accordance with national education standards.",
    highlights: [
      "Taught programming fundamentals to students aged 11-18",
      "Covered conditional statements, loops, OOP, and Turtle graphics",
      "Instructed adult learners on data structures and core concepts",
      "Delivered advanced training on image processing and web development",
    ],
    current: true,
  },
  {
    type: "work",
    title: "Python Programming Instructor",
    organization: "Safari Institute, Martil",
    location: "Morocco",
    period: "Oct 2024 - Aug 2025",
    description: "Delivered programming training to various age groups, from children to adults, covering fundamental to advanced topics.",
    highlights: [
      "Taught Python basics including data structures and OOP",
      "Advanced training on image processing with Python",
      "Web development using Streamlit library",
      "Advanced mathematical problem-solving with programming",
    ],
  },
  {
    type: "education",
    title: "Master&apos;s Degree in Computer Engineering",
    organization: "Faculty of Sciences, Abdelmalek Essaadi University",
    location: "Morocco",
    period: "2024 - 2026",
    description: "Advanced studies in computer engineering with focus on cloud computing, AI/ML, and distributed systems.",
    highlights: [
      "Specialized in Cloud-Native Systems and AI",
      "Research on incident prediction for cloud applications",
      "Advanced coursework in machine learning and DevOps",
      "Hands-on projects with Kubernetes and Docker",
    ],
  },
  {
    type: "education",
    title: "Licence Degree in Mathematics & Computer Sciences",
    organization: "Faculty of Sciences, Abdelmalek Essaadi University",
    location: "Morocco",
    period: "2023 - 2024",
    description: "Specialized degree combining mathematical foundations with practical computer science applications.",
    highlights: [
      "Strong foundation in algorithms and data structures",
      "Database design and management",
      "Software engineering principles",
      "Web development fundamentals",
    ],
  },
  {
    type: "education",
    title: "DEUG in Mathematics & Computer Sciences",
    organization: "Faculty of Sciences, Abdelmalek Essaadi University",
    location: "Morocco",
    period: "2021 - 2024",
    description: "General academic studies providing comprehensive foundation in mathematics and computer science.",
    highlights: [
      "Core programming with C, Java, and Python",
      "Mathematical foundations for computing",
      "Introduction to databases and SQL",
      "Computer architecture and systems",
    ],
  },
]

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-24 lg:py-32" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="text-primary font-mono text-sm">05.</span>
              <h2 className="text-3xl sm:text-4xl font-bold">Experience & Education</h2>
              <div className="h-px flex-1 bg-border max-w-xs" />
            </div>
            <p className="text-muted-foreground max-w-2xl">
              My professional journey and educational background in software engineering.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            {timeline.map((item, index) => (
              <motion.div
                key={`${item.title}-${item.period}`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={cn(
                  "relative mb-12 last:mb-0",
                  "pl-8 md:pl-0",
                  index % 2 === 0 ? "md:pr-[50%] md:text-right" : "md:pl-[50%]"
                )}
              >
                {/* Timeline Dot */}
                <div
                  className={cn(
                    "absolute top-0 w-10 h-10 rounded-full border-4 border-background flex items-center justify-center",
                    "left-0 md:left-1/2 md:-translate-x-1/2",
                    item.current
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground"
                  )}
                >
                  {item.type === "work" ? (
                    <Briefcase className="w-4 h-4" />
                  ) : (
                    <GraduationCap className="w-4 h-4" />
                  )}
                </div>

                {/* Content Card */}
                <div
                  className={cn(
                    "p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors",
                    index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  )}
                >
                  {/* Header */}
                  <div className={cn("mb-4", index % 2 === 0 && "md:text-right")}>
                    {item.current && (
                      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded-full mb-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                        Current
                      </span>
                    )}
                    <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                    <p className="text-primary font-medium">{item.organization}</p>
                  </div>

                  {/* Meta */}
                  <div
                    className={cn(
                      "flex flex-wrap gap-4 text-sm text-muted-foreground mb-4",
                      index % 2 === 0 ? "md:justify-end" : "justify-start"
                    )}
                  >
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {item.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {item.location}
                    </span>
                  </div>

                  {/* Description */}
                  <p
                    className={cn(
                      "text-muted-foreground mb-4",
                      index % 2 === 0 && "md:text-right"
                    )}
                  >
                    {item.description}
                  </p>

                  {/* Highlights */}
                  <ul className={cn("space-y-2", index % 2 === 0 && "md:text-right")}>
                    {item.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className={cn(
                          "flex items-start gap-2 text-sm text-muted-foreground",
                          index % 2 === 0 && "md:flex-row-reverse"
                        )}
                      >
                        <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
