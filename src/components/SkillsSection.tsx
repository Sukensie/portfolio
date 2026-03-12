import { motion } from "framer-motion";

const skillGroups = [
  {
    label: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Vue.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    label: "Backend",
    skills: ["Node.js", "Python", "Go", "PostgreSQL", "Redis", "GraphQL"],
  },
  {
    label: "DevOps & Cloud",
    skills: ["AWS", "Docker", "CI/CD", "Terraform", "Vercel", "Linux"],
  },
  {
    label: "Practices",
    skills: ["System Design", "Testing", "Agile", "Code Review", "Performance", "Security"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-32 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="font-mono text-sm tracking-[0.3em] uppercase text-primary mb-4">
            Tech Stack
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            What I work with.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
            >
              <h3 className="font-mono text-xs tracking-[0.2em] uppercase text-primary mb-6 pb-3 border-b border-border">
                {group.label}
              </h3>
              <ul className="space-y-3">
                {group.skills.map((skill) => (
                  <li key={skill} className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
