import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

interface ProjectCardProps {
  title: string;
  description: ReactNode;
  role: string;
  impact: ReactNode;
  tags: string[];
  index: number;
  image: string;
  link?: string;
}

const ProjectCard = ({ title, description, role, impact, tags, index, image, link }: ProjectCardProps) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="w-full"
    >
      {index > 0 && <div className="project-divider w-full mb-16" />}
      
      <div className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${isEven ? '' : 'lg:direction-rtl'}`}>
        {/* Image */}
        <div className={`${isEven ? '' : 'lg:order-2'}`}>
          <a
            href={link || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="block group rounded-xl overflow-hidden border border-border hover-glow"
          >
            <div className="aspect-[16/10] overflow-hidden bg-secondary">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </a>
        </div>

        {/* Content */}
        <div className={`${isEven ? '' : 'lg:order-1'}`}>
          <span className="font-mono text-xs text-primary tracking-[0.2em] uppercase mb-4 block">
            Project {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            {description}
          </p>
          
          <div className="space-y-3 mb-6 text-sm">
            <div className="flex gap-3">
              <span className="font-mono text-primary shrink-0">Role:</span>
              <span className="text-muted-foreground">{role}</span>
            </div>
            <div className="flex gap-3">
              <span className="font-mono text-primary shrink-0">Impact:</span>
              <span className="text-muted-foreground">{impact}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-xs px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground border border-border"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
