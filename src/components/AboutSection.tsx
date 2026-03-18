import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-32 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-0 items-start">
          <div>
            <p className="font-mono text-sm tracking-[0.3em] uppercase text-primary mb-4">
              About Me
            </p>
          
            {/* Photo placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative w-full max-w-[14rem] md:max-w-[22rem] aspect-[3/4] rounded-2xl border-2 border-border/90 bg-card overflow-hidden flex items-center justify-center group"
            >
              <img src="tomas.webp" alt="Tomáš Souček" className="w-full h-full object-cover transition-transform" />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
              Who's behind the code
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              I'm a Czech-born fullstack developer who ended up in Denmark to chase his dream of Scandinavian life. I've spent the last few years working across fintech, mobility, and product startups, picking up an MSc in Software Engineering from SDU and (almost) profficiency in Danish along the way.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I enjoy the full stack because understanding the whole system is what lets me spot the real problem early. I've helped teams reduce latencies, untangle architectures, and ship UIs people actually enjoy using — and I've learned that the best solution is usually the simpler one.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not in the code, I'm probably skiing, playing bass, planning a camping trip, or deep in a rabbit hole about cars. Sometimes all four at once 😅
            </p>


            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              {[
                { value: "3+", label: "Years of Experience" },
                { value: "11+", label: "Programming Languages" },
                { value: "4", label: "Industries" },
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
