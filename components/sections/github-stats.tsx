"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Github, Star, GitFork, Code2, Activity } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

const GITHUB_USERNAME = "medelafia"

export function GitHubStatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { resolvedTheme } = useTheme()

  const statsTheme = resolvedTheme === "dark" ? "dark" : "default"

  return (
    <section id="github" className="py-24 lg:py-32 bg-secondary/30" ref={ref}>
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
              <span className="text-primary font-mono text-sm">06.</span>
              <h2 className="text-3xl sm:text-4xl font-bold">GitHub Activity</h2>
              <div className="h-px flex-1 bg-border max-w-xs" />
            </div>
            <p className="text-muted-foreground max-w-2xl">
              My open-source contributions and coding activity on GitHub.
            </p>
          </motion.div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {[
              { icon: GitFork, label: "Repositories", value: "50+" },
              { icon: Code2, label: "Contributions", value: "5+" },
              { icon: Activity, label: "Commits", value: "200+" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors text-center"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
          {/* Contribution Graph */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-4 rounded-xl bg-card border border-border overflow-hidden mb-12"
          >
            <img
              src={`https://github-readme-activity-graph.vercel.app/graph?username=${GITHUB_USERNAME}&theme=${resolvedTheme === "dark" ? "react-dark" : "minimal"}&hide_border=true&bg_color=00000000`}
              alt="Contribution Graph"
              className="w-full h-auto"
              loading="lazy"
            />
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center"
          >
            <Button size="lg" asChild>
              <a
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Github className="w-5 h-5 mr-2" />
                Follow on GitHub
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
