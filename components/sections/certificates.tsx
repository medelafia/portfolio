"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Award, ExternalLink, Download, Calendar, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Certificate {
  title: string
  issuer: string
  date: string
  credentialId?: string
  verifyUrl?: string
  downloadUrl?: string
  skills: string[]
}

const certificates: Certificate[] = [
  {
    title: "Oracle Certified Professional - Java SE 17 Developer",
    issuer: "Oracle",
    date: "2024",
    verifyUrl: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=641F71A7E95A5EBBA290B115F1A045B119EF4E4693EF105CE5B43DC88C0D6D1C",
    skills: ["Java", "OOP", "Design Patterns", "Java SE 17"],
  },
  {
    title: "Azure Fundamentals",
    issuer: "Microsoft",
    date: "2024",
    verifyUrl: "https://learn.microsoft.com/en-us/certifications/",
    skills: ["Azure", "Cloud Computing", "Cloud Services", "DevOps"],
  },
  {
    title: "Docker Essentials & Containers & Kubernetes Essentials",
    issuer: "IBM",
    date: "2024",
    verifyUrl: "https://www.credly.com/badges/604e85ce-2695-4ee9-8ab1-550a9f6a7746",
    skills: ["Docker", "Kubernetes", "Containers", "Orchestration"],
  },
  {
    title: "Relational Databases with SQL",
    issuer: "IBM",
    date: "2024",
    verifyUrl: "https://courses.cognitiveclass.ai/certificates/21222f17d7af429fa469fd75f3bf04b4",
    skills: ["Data Science", "SQL", "Databases"],
  },
  {
    title: "Python for Data Science",
    issuer: "IBM",
    date: "2024",
    verifyUrl: "https://www.credly.com/badges/af1d1b8e-1977-4e3e-8095-a814ff38de7e",
    skills: ["Python", "Data Science"],
  },
  {
    title: "Problem Solving, Python, Java & JavaScript",
    issuer: "HackerRank",
    date: "2024",
    verifyUrl: "https://www.hackerrank.com/certificates/731e6f5bbf20",
    skills: ["Problem Solving", "Python", "Java", "JavaScript"],
  },
  {
    title: "JavaScript",
    issuer: "HackerRank",
    date: "2025",
    verifyUrl: "https://www.hackerrank.com/certificates/731e6f5bbf20",
    skills: ["JavaScript"],
  },
  {
    title: "Python",
    issuer: "HackerRank",
    date: "2024",
    verifyUrl: "https://www.hackerrank.com/certificates/b1df84252357",
    skills: ["Problem Solving", "Python"],
  },
  {
    title: "Problem Solving",
    issuer: "HackerRank",
    date: "2025",
    verifyUrl: "https://www.hackerrank.com/certificates/3e3ef715a64a",
    skills: ["Problem Solving", "Python"],
  },
  {
    title: "Java",
    issuer: "HackerRank",
    date: "2024",
    verifyUrl: "https://www.hackerrank.com/certificates/1c01a406b2fd",
    skills: ["Java"],
  },
  {
    title: "Advanced Git",
    issuer: "DataCamp",
    date: "2024",
    verifyUrl: "https://www.datacamp.com/completed/statement-of-accomplishment/course/f4b68fd4957fc5e66af49ee682953b9bf9c4da82",
    skills: ["Git", "Version Control" ,"DevOps"],
  },
  {
    title: "Docker Intermediate",
    issuer: "DataCamp",
    date: "2024",
    verifyUrl: "https://www.datacamp.com/completed/statement-of-accomplishment/course/43c76694e3e22ff69f33df4761978727cbc2e70f",
    skills: ["Docker", "DevOps"],
  }
  
]

export function CertificatesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="certificates" className="py-24 lg:py-32 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="text-primary font-mono text-sm">04.</span>
              <h2 className="text-3xl sm:text-4xl font-bold">Certifications</h2>
              <div className="h-px flex-1 bg-border max-w-xs" />
            </div>
            <p className="text-muted-foreground max-w-2xl">
              Professional certifications that validate my expertise in cloud technologies, DevOps, and AI/ML.
            </p>
          </motion.div>

          {/* Certificates Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all hover:shadow-xl hover:shadow-primary/5"
              >
                {/* Badge Icon */}
                <div className="absolute -top-3 -right-3 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center border border-primary/20">
                  <Award className="w-6 h-6 text-primary" />
                </div>

                {/* Certificate Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1 pr-8 leading-tight">
                      {cert.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Building2 className="w-4 h-4" />
                      <span>{cert.issuer}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>Issued {cert.date}</span>
                  </div>

                  {cert.credentialId && (
                    <p className="text-xs text-muted-foreground/70 font-mono">
                      ID: {cert.credentialId}
                    </p>
                  )}

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 text-xs font-medium bg-secondary text-muted-foreground rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 pt-2">
                    {cert.verifyUrl && (
                      <Button variant="ghost" size="sm" asChild className="h-8 text-xs">
                        <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3 h-3 mr-1" />
                          Verify
                        </a>
                      </Button>
                    )}
                    {cert.downloadUrl && (
                      <Button variant="ghost" size="sm" asChild className="h-8 text-xs">
                        <a href={cert.downloadUrl} download>
                          <Download className="w-3 h-3 mr-1" />
                          Download
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                {/* Hover gradient */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
