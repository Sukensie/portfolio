import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with real-time inventory management, payment processing, and an admin dashboard. Built for scale with 50k+ monthly active users.",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    link: "#",
  },
  {
    title: "SaaS Analytics Dashboard",
    description: "Real-time analytics dashboard for a B2B SaaS product. Complex data visualizations, role-based access control, and automated reporting pipelines.",
    tags: ["TypeScript", "Next.js", "D3.js", "AWS"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    link: "#",
  },
  {
    title: "Healthcare Booking System",
    description: "Patient scheduling and management system handling 10k+ appointments monthly. HIPAA-compliant with real-time availability and automated reminders.",
    tags: ["React", "Python", "FastAPI", "Redis"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    link: "#",
  },
  {
    title: "Real-Time Collaboration Tool",
    description: "Multiplayer document editor with live cursors, version history, and conflict resolution. WebSocket-powered with offline-first architecture.",
    tags: ["Vue.js", "Go", "WebSockets", "CRDTs"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    link: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="font-mono text-sm tracking-[0.3em] uppercase text-primary mb-4">
            Selected Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Projects that shipped.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} {...project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
