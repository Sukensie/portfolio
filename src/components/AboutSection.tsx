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
              The person behind<br />
              the code 🙂
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
              I'm a fullstack developer who genuinely enjoys the craft of building 
              software. I've spent years shipping production systems — from late-night 
              debugging sessions to those satisfying moments when everything just clicks.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I've worked across startups moving at breakneck speed and larger teams 
              where stability and process matter. What stays consistent is my focus on 
              writing code that's clean, testable, and kind to whoever reads it next.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Outside of work, I'm usually tinkering with side projects, reading about 
              distributed systems, or going down rabbit holes on Hacker News. I'm always 
              up for a good technical conversation over coffee ☕
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
