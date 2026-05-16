"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Cloud, Cpu, Server, GitBranch, Layers, Zap } from "lucide-react"

const focuses = [
  {
    icon: Cloud,
    title: "Cloud-Native Systems",
    description: "Designing and deploying applications built for the cloud from the ground up, leveraging containerization and orchestration.",
  },
  {
    icon: Cpu,
    title: "Artificial Intelligence",
    description: "Building intelligent systems using machine learning, deep learning, and NLP to solve complex real-world problems.",
  },
  {
    icon: GitBranch,
    title: "DevOps Engineering",
    description: "Implementing CI/CD pipelines, infrastructure as code, and automated testing for reliable software delivery.",
  },
  {
    icon: Server,
    title: "Microservices",
    description: "Architecting distributed systems with loosely coupled services for scalability and maintainability.",
  },
  {
    icon: Layers,
    title: "Backend Engineering",
    description: "Developing robust APIs and server-side applications using modern frameworks and best practices.",
  },
  {
    icon: Zap,
    title: "Distributed Systems",
    description: "Building fault-tolerant, highly available systems that can handle millions of requests.",
  },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 lg:py-32 relative" ref={ref}>
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
              <span className="text-primary font-mono text-sm">01.</span>
              <h2 className="text-3xl sm:text-4xl font-bold">About Me</h2>
              <div className="h-px flex-1 bg-border max-w-xs" />
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-6"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                I&apos;m a <span className="text-foreground font-medium">Cloud-Native Software Engineer</span> currently 
                pursuing my Master&apos;s degree in Computer Engineering at Faculty of Sciences, Abdelmalek Essaadi University. 
                My journey in tech has led me through the fascinating worlds of artificial intelligence, DevOps automation, and distributed computing.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                I have a solid understanding of software engineering principles, DevOps practices, and cloud platforms 
                such as AWS and GCP. Currently working as an R&D Intern at 3D Smart Factory, designing and developing 
                incident prediction systems for cloud-native applications using Python, FastAPI, Next.js, deep learning, 
                Prometheus, and Kubernetes.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Beyond engineering, I&apos;m passionate about teaching. I&apos;ve taught programming fundamentals 
                to students aged 11-18 and delivered advanced training to adults on data structures, 
                image processing, and web development.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">6+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">Certificates</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">Technologies</div>
                </div>
              </div>
            </motion.div>

            {/* Focus Areas */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid sm:grid-cols-2 gap-4"
            >
              {focuses.map((focus, index) => (
                <motion.div
                  key={focus.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  className="p-4 rounded-xl bg-secondary/50 border border-border hover:border-primary/30 transition-colors group"
                >
                  <focus.icon className="w-8 h-8 text-primary mb-3 transition-transform group-hover:scale-110" />
                  <h3 className="font-semibold text-foreground mb-1">{focus.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{focus.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
