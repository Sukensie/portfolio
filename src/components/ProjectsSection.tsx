import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Folkæt — People Matching Platform",
    description: "I drove full-stack product development from concept to delivery. I elevated UX and performance in our React frontend while building and operating a scalable, resilient cloud-native backend with Flask and PostgreSQL. Translated product goals into clear scope, influenced direction, and aligned the team around focused, high-impact iterations.",
    role: "Fullstack Product Engineer",
    impact: (
      <>
        As one of the <strong>core developers</strong>, I was responsible for the <strong>full-stack implementation</strong> of the platform, moving it from a prototype to a stable production environment. My work focused on practical scalability: reducing backend latencies through targeted <strong>PostgreSQL</strong> and <strong>Python optimizations</strong> and refactoring the <strong>React frontend</strong> for better state management. I worked closely with the product side to ensure we build features that are technically viable and provide clear value to users <strong>without over-engineering</strong>.
      </>
    ),
    tags: ["React", "Flask", "PostgreSQL", "CI/CD", "TailwindCSS", "Docker", "SW Architecture", "GitOps"],
    image: "folkaet.webp",
    link: "https://www.folkaet.com",
  },
  {
    title: "Nabogo — DevOps & Architecture Transformation",
    description: "Researched and tackled the scalability bottlenecks of a growing carpooling startup. Transformed a monolithic backend into a distributed, event-driven architecture while introducing DevOps practices, automated infrastructure scaling, and full system observability.",
    role: "DevOps Engineer · MSc Thesis Project",
    impact: (
      <>
        In collaboration with Nabogo, I identified and resolved <strong>scalability bottlenecks</strong> in their monolithic backend. I migrated core services to a <strong>microservices</strong> architecture on Kubernetes, which resulted in a measured <strong>450% reduction in latency</strong>. Additionally, I automated their deployment process, replacing manual steps with <strong>CI/CD pipelines</strong> to ensure more reliable and frequent releases.
      </>
    ),
    tags: ["SW Architecture", "DevOps", "Microservices", "Kubernetes", "CI/CD", "Monitoring", "Python", "Laravel"],
    image: "nabogo.webp",
    link: "https://nabogo.com/en/",
  },
  {
    title: "Real-time Bitcoin Price Prediction",
    description: "Built a real-time Bitcoin price prediction system combining live market data with social media sentiment analysis. Part of an MSc Big Data course, the project explored how public sentiment influences crypto markets.",
    role: "Fullstack Developer · DevOps Engineer",
    impact: (
      <>
        Architected a distributed pipeline to process and correlate <strong>16 million records (5GB+)</strong> of social media data with real-time market metrics. Using <strong>Apache Kafka</strong> and <strong>Spark Streaming</strong>, we achieved sub-second latency for sentiment analysis while ensuring fault tolerance. Optimized analytical queries by deploying <strong>Apache Druid</strong> and <strong>HDFS</strong> on a <strong>Kubernetes cluster</strong>, maintaining high performance under simulated 'burst' traffic scenarios.
      </>
    ),
    tags: ["Kubernetes", "Apache Kafka", "Apache Spark", "Apache Druid (HDFS)", "AI/ML", "Python", "Data Analysis", "Distributed Systems"],
    image: "BTC.webp",
    link: "https://github.com/Sukensie/bicoin-price-prediction",
  },
  {
    title: "Intelligent Banker — Fintech Platform",
    description: "I worked across multiple fintech products, both customer-facing and internal tooling. I contributed to visual identities, UX improvements, third-party API integrations, and cleaning up legacy systems.",
    role: "Junior Web Developer",
    impact: (
      <>
        I focused on improving the long-term maintainability of core fintech products by <strong>refactoring legacy systems</strong> and applying <strong>clean code</strong> principles to reduce technical debt. I developed features for internal administrative tools and user-facing financial dashboards, focusing on <strong>UX clarity</strong> and reliable <strong>third-party API integrations</strong>. Additionally, I implemented data collection points for business intelligence, helping the team move toward more <strong>data-driven product decisions</strong>.
      </>
    ),
    tags: ["Nuxt", "Vue", "Node.js", "TypeScript", "AWS Lambda", "Tailwind", "REST API", "GitOps"],
    image: "ib.webp",
    link: "https://intelligentbanker.com/",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <p className="font-mono text-sm tracking-[0.3em] uppercase text-primary mb-4">
            What I've Built
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Selected Projects I've worked on
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
