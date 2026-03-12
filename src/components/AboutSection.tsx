import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="font-mono text-sm tracking-[0.3em] uppercase text-primary mb-4">
              About
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Building for the web since day one.
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
              I'm a fullstack developer who thrives at the intersection of design
              and engineering. With years of experience shipping production
              applications, I bring a pragmatic approach to solving complex
              technical challenges.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I've worked across startups and established companies, building
              everything from MVPs to systems handling millions of requests.
              My focus is always on delivering clean, maintainable code that
              scales.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, I'm exploring new technologies, contributing
              to open source, and writing about software engineering.
            </p>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              {[
                { value: "5+", label: "Years Experience" },
                { value: "30+", label: "Projects Shipped" },
                { value: "100%", label: "Client Satisfaction" },
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
