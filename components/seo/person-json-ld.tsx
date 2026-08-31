export function PersonJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",

    name: "Mohamed El Afia",

    url: "https://mohamedelafia.vercel.app",

    jobTitle: "Cloud-Native Software Engineer",

    description:
      "Cloud-Native Software Engineer specializing in AI, DevOps, Kubernetes, distributed systems, microservices, and full-stack development.",

    knowsAbout: [
      "Software Engineering",
      "Cloud Computing",
      "Cloud-Native Development",
      "DevOps",
      "Artificial Intelligence",
      "Machine Learning",
      "Kubernetes",
      "Docker",
      "Microservices",
      "Distributed Systems",
      "Spring Boot",
      "Next.js",
      "FastAPI",
      "Python",
      "Java",
      "TypeScript",
    ],

    sameAs: [
      "https://github.com/medelafia",
      "https://www.linkedin.com/in/YOUR-LINKEDIN",
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  )
}
