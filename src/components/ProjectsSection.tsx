import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Folkæt — People Matching Platform",
    description: "I drove full-stack product development from concept to delivery. I elevated UX and performance in our React frontend while building and operating a scalable, resilient cloud-native backend with Flask and PostgreSQL. Translated product goals into clear scope, influenced direction, and aligned the team around focused, high-impact iterations.",
    role: "Fullstack Product Engineer",
    impact: "TODO: 50k+ monthly active users, 99.9% uptime, 40% faster checkout flow",
    tags: ["React", "Flask", "PostgreSQL", "CI/CD", "TailwindCSS", "Docker", "SW Architecture", "GitOps"],
    image: "folkaet-1-100.jpg",
    link: "https://www.folkaet.com",
  },
  {
    title: "Nabogo — DevOps & Architecture Transformation",
    description: "Researched and tackled the scalability bottlenecks of a growing carpooling startup. Transformed a monolithic backend into a distributed, event-driven architecture while introducing DevOps practices, automated infrastructure scaling, and full system observability.",
    role: "DevOps Engineer · MSc Thesis Project",
    impact: "Reduced average request latencies by over 450%, automated deployment pipelines, and gave the team real-time visibility into their infrastructure for the first time.",
    tags: ["SW Architecture", "DevOps", "Microservices", "Kubernetes", "CI/CD", "Monitoring", "Python", "Laravel"],
    image: "nabogo.jpg",
    link: "https://nabogo.com/en/",
  },
  {
    title: "Real-time Bitcoin Price Prediction",
    description: "Built a real-time Bitcoin price prediction system combining live market data with social media sentiment analysis. Part of an MSc Big Data course, the project explored how public sentiment influences crypto markets.",
    role: "Fullstack Developer · DevOps Engineer",
    impact: "Demonstrated a measurable correlation between sentiment signals and short-term price movements, using a full real-time data pipeline from ingestion to prediction.",
    tags: ["Python", "Apache Kafka", "Apache Spark", "HDFS", "Big Data", "AI/ML"],
    image: "BTC.jpg",
    link: "https://github.com/Sukensie/bicoin-price-prediction",
  },
  {
    title: "Intelligent Banker — Fintech Platform",
    description: "I worked across multiple fintech products, both customer-facing and internal tooling. I contributed to visual identities, UX improvements, third-party API integrations, and cleaning up legacy systems.",
    role: "Junior Web Developer",
    impact: "Sub-100ms sync latency, 99.95% data consistency",
    tags: ["Nuxt", "Vue", "Node.js", "TypeScript", "AWS Lambda", "Tailwind", "REST API", "GitOps"],
    image: "ib.jpg",
    link: "https://intelligentbanker.com/",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <p className="font-mono text-sm tracking-[0.3em] uppercase text-primary mb-4">
            What I've Built
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Selected Projects I've worked on<span className="text-primary">.</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl">
            A selection of production systems I've designed, built, and shipped. 
            Each one taught me something new.
          </p>
        </div>

        <div className="space-y-4 md:space-y-24">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} {...project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
