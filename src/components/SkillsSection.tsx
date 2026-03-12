import { motion } from "framer-motion";
import { Code2, Server, Cloud, Wrench } from "lucide-react";

const skillGroups = [
  {
    label: "Frontend",
    icon: Code2,
    color: "155 55% 50%",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 92 },
      { name: "Vue.js", level: 75 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Framer Motion", level: 80 },
    ],
  },
  {
    label: "Backend",
    icon: Server,
    color: "175 50% 55%",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Python", level: 85 },
      { name: "Go", level: 70 },
      { name: "PostgreSQL", level: 88 },
      { name: "Redis", level: 78 },
      { name: "GraphQL", level: 82 },
    ],
  },
  {
    label: "DevOps & Cloud",
    icon: Cloud,
    color: "195 45% 55%",
    skills: [
      { name: "AWS", level: 82 },
      { name: "Docker", level: 88 },
      { name: "CI/CD", level: 85 },
      { name: "Terraform", level: 65 },
      { name: "Vercel", level: 90 },
      { name: "Linux", level: 80 },
    ],
  },
  {
    label: "Practices",
    icon: Wrench,
    color: "140 40% 55%",
    skills: [
      { name: "System Design", level: 85 },
      { name: "Testing", level: 88 },
      { name: "Agile", level: 90 },
      { name: "Code Review", level: 92 },
      { name: "Performance", level: 82 },
      { name: "Security", level: 75 },
    ],
  },
];

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => (
  <div className="space-y-1.5">
    <div className="flex justify-between items-center">
      <span className="text-sm text-foreground">{name}</span>
      <span className="font-mono text-xs text-muted-foreground">{level}%</span>
    </div>
    <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay, ease: "easeOut" }}
        className="h-full rounded-full bg-primary"
      />
    </div>
  </div>
);

const SkillsSection = () => {
  return (
    <section id="skills" className="py-32 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="font-mono text-sm tracking-[0.3em] uppercase text-primary mb-4">
            Tech Stack
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            My toolkit 🧰
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg">
            Here's what I reach for when building things. Always happy to pick up new tools when the project calls for it.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group, groupIndex) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
                className="skill-card"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: `hsl(${group.color} / 0.12)` }}
                  >
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{group.label}</h3>
                </div>
                <div className="space-y-4">
                  {group.skills.map((skill, i) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      delay={groupIndex * 0.1 + i * 0.05}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
