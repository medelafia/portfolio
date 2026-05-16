import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about"
import { SkillsSection } from "@/components/sections/skills"
import { ProjectsSection } from "@/components/sections/projects"
import { CertificatesSection } from "@/components/sections/certificates"
import { ExperienceSection } from "@/components/sections/experience"
import { GitHubStatsSection } from "@/components/sections/github-stats"
import { ContactSection } from "@/components/sections/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificatesSection />
      <ExperienceSection />
      <GitHubStatsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
