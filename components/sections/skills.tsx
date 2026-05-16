"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Java", "Python", "TypeScript", "Go", "JavaScript", "C/C++", "SQL"],
  },
  {
    title: "Backend",
    skills: ["Spring Boot", "FastAPI", "Node.js", "Express", "NestJS", "Django", "gRPC"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Angular", "Vue.js", "Tailwind CSS", "Flutter"],
  },
  {
    title: "DevOps & Cloud",
    skills: ["Docker", "Kubernetes", "AWS", "GCP", "Azure", "Terraform", "Jenkins", "GitHub Actions", "ArgoCD"],
  },
  {
    title: "AI / Machine Learning",
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "OpenCV", "NLP", "LangChain", "Hugging Face"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Elasticsearch", "Cassandra", "Neo4j"],
  },
  {
    title: "Monitoring & Observability",
    skills: ["Prometheus", "Grafana", "ELK Stack", "Jaeger", "Datadog", "New Relic"],
  },
  {
    title: "Message Queues & Streaming",
    skills: ["Apache Kafka", "RabbitMQ", "Redis Streams", "AWS SQS"],
  },
]

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-24 lg:py-32 bg-secondary/30" ref={ref}>
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
              <span className="text-primary font-mono text-sm">02.</span>
              <h2 className="text-3xl sm:text-4xl font-bold">Skills & Technologies</h2>
              <div className="h-px flex-1 bg-border max-w-xs" />
            </div>
            <p className="text-muted-foreground max-w-2xl">
              A comprehensive toolkit built over years of hands-on experience with modern technologies.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/5"
              >
                <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ 
                        duration: 0.2, 
                        delay: categoryIndex * 0.1 + skillIndex * 0.03 
                      }}
                      className="px-3 py-1.5 text-xs font-medium bg-secondary text-secondary-foreground rounded-md border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
