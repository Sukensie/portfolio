import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Led development of a full-featured e-commerce platform serving 50k+ MAU. Designed the real-time inventory system and integrated Stripe payment flows. Architected the admin dashboard from scratch with role-based access control.",
    role: "Lead Fullstack Developer",
    impact: "50k+ monthly active users, 99.9% uptime, 40% faster checkout flow",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    link: "#",
  },
  {
    title: "SaaS Analytics Dashboard",
    description: "Built the entire frontend and data visualization layer for a B2B analytics product. Implemented complex D3.js charts, real-time data streaming, and an automated reporting pipeline that reduced manual reporting by 80%.",
    role: "Senior Frontend Engineer",
    impact: "80% reduction in manual reporting, 3x faster data loading",
    tags: ["TypeScript", "Next.js", "D3.js", "AWS", "WebSockets"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    link: "#",
  },
  {
    title: "Healthcare Booking System",
    description: "Designed and implemented a HIPAA-compliant patient scheduling system. Built the real-time availability engine, automated reminder system, and patient-facing booking interface handling 10k+ appointments monthly.",
    role: "Fullstack Developer",
    impact: "10k+ monthly appointments, 60% reduction in no-shows",
    tags: ["React", "Python", "FastAPI", "Redis", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    link: "#",
  },
  {
    title: "Real-Time Collaboration Tool",
    description: "Core engineer on a multiplayer document editor. Implemented conflict resolution using CRDTs, built the WebSocket infrastructure for live cursors and presence, and designed the offline-first sync architecture.",
    role: "Backend / Infrastructure Engineer",
    impact: "Sub-100ms sync latency, 99.95% data consistency",
    tags: ["Go", "WebSockets", "CRDTs", "Vue.js", "Docker"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    link: "#",
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
            Projects I'm proud of.
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl">
            A selection of production systems I've designed, built, and shipped. 
            Each one taught me something new.
          </p>
        </div>

        <div className="space-y-16 md:space-y-24">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} {...project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
