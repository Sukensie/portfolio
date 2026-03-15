import { motion } from "framer-motion";
import SkillWeb from "./SkillWeb";

const SkillsSection = () => {
  return (
    <section id="skills" className="py-32 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="font-mono text-sm tracking-[0.3em] uppercase text-primary mb-4">
            Tech Stack
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            My toolkit 🧰
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg">
            Hover around to explore how my skills connect. The web shows the relationships between tools I use daily.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SkillWeb />
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
