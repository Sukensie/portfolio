import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="font-mono text-sm tracking-[0.3em] uppercase text-primary mb-4">
              About Me
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Engineer first,<br />
              everything else second.
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed">
              I'm a fullstack developer who's spent years in the trenches of 
              production systems. I've debugged race conditions at 2 AM, 
              migrated databases without downtime, and refactored codebases 
              that everyone else was afraid to touch.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I've worked across startups moving fast and larger companies 
              where reliability matters. I care about writing code that the 
              next person can actually understand and maintain — because I've 
              been that next person too many times.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I learn quickly, communicate clearly, and I'm at my best 
              when solving hard problems with a good team.
            </p>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              {[
                { value: "5+", label: "Years of Experience" },
                { value: "30+", label: "Projects Shipped" },
                { value: "3", label: "Industries" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="font-mono text-xs text-muted-foreground mt-1 tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
