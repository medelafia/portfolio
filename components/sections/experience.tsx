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
    title: "Cloud-Native Software Engineer",
    organization: "Freelance / Open Source",
    location: "Remote",
    period: "2023 - Present",
    description: "Building scalable cloud-native applications and contributing to open-source projects in the DevOps and AI ecosystem.",
    highlights: [
      "Architected microservices systems handling 100K+ requests/day",
      "Implemented CI/CD pipelines reducing deployment time by 70%",
      "Developed AI-powered monitoring tools for infrastructure optimization",
      "Mentored junior developers on cloud-native best practices",
    ],
    current: true,
  },
  {
    type: "work",
    title: "Teaching Assistant",
    organization: "University",
    location: "Morocco",
    period: "2022 - 2023",
    description: "Assisted in teaching software engineering courses, helping students understand complex programming concepts and best practices.",
    highlights: [
      "Conducted lab sessions on Java, Python, and web development",
      "Helped students with practical projects and assignments",
      "Created supplementary learning materials and tutorials",
      "Provided one-on-one mentoring for struggling students",
    ],
  },
  {
    type: "education",
    title: "Software Engineering",
    organization: "Engineering School",
    location: "Morocco",
    period: "2020 - 2025",
    description: "Comprehensive software engineering program focusing on distributed systems, cloud computing, and artificial intelligence.",
    highlights: [
      "Specialized in Cloud Computing and AI/ML",
      "Completed 10+ real-world projects",
      "Dean's List recognition for academic excellence",
      "Active member of the Computer Science club",
    ],
  },
  {
    type: "education",
    title: "Self-Directed Learning",
    organization: "Online Platforms",
    location: "Remote",
    period: "2019 - Present",
    description: "Continuous learning through online courses, certifications, and hands-on projects to stay current with emerging technologies.",
    highlights: [
      "Completed 20+ courses on Coursera, Udemy, and other platforms",
      "Earned professional certifications in AWS, Kubernetes, and Docker",
      "Built numerous personal projects to apply learned skills",
      "Contributed to open-source projects on GitHub",
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
