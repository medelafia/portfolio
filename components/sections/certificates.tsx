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
    title: "AWS Solutions Architect Associate",
    issuer: "Amazon Web Services",
    date: "2024",
    credentialId: "AWS-SAA-2024",
    verifyUrl: "https://aws.amazon.com/verification",
    skills: ["Cloud Architecture", "AWS Services", "Security", "Cost Optimization"],
  },
  {
    title: "Certified Kubernetes Administrator (CKA)",
    issuer: "Cloud Native Computing Foundation",
    date: "2024",
    credentialId: "CKA-2024",
    verifyUrl: "https://www.cncf.io/certification/cka/",
    skills: ["Kubernetes", "Container Orchestration", "Cluster Management", "Networking"],
  },
  {
    title: "Docker Certified Associate",
    issuer: "Docker Inc.",
    date: "2023",
    credentialId: "DCA-2023",
    verifyUrl: "https://docker.com/certification",
    skills: ["Docker", "Containerization", "Docker Swarm", "Security"],
  },
  {
    title: "TensorFlow Developer Certificate",
    issuer: "Google",
    date: "2023",
    credentialId: "TF-DEV-2023",
    verifyUrl: "https://www.tensorflow.org/certificate",
    skills: ["TensorFlow", "Deep Learning", "Computer Vision", "NLP"],
  },
  {
    title: "Professional Spring Developer",
    issuer: "VMware",
    date: "2023",
    credentialId: "SPRING-2023",
    verifyUrl: "https://spring.io/certification",
    skills: ["Spring Boot", "Spring Cloud", "Microservices", "REST APIs"],
  },
  {
    title: "DevOps Engineering Professional",
    issuer: "Linux Foundation",
    date: "2023",
    credentialId: "DEVOPS-2023",
    verifyUrl: "https://training.linuxfoundation.org",
    skills: ["CI/CD", "Infrastructure as Code", "Automation", "Monitoring"],
  },
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
