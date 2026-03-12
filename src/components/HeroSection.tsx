import { motion } from "framer-motion";
import { ArrowDown, Coffee } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Soft gradient blobs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-[0.035]"
        style={{ background: 'radial-gradient(circle, hsl(155 55% 50%), transparent 70%)' }}
      />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-[0.025]"
        style={{ background: 'radial-gradient(circle, hsl(175 50% 55%), transparent 70%)' }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-secondary rounded-full px-4 py-2 mb-8"
        >
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <p className="font-mono text-xs tracking-wide text-muted-foreground">
            Open to opportunities — let's chat!
          </p>
          <Coffee className="w-3.5 h-3.5 text-muted-foreground" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-4"
        >
          Hey there! 👋
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-8"
        >
          I'm <span className="text-gradient">Your Name</span>,{" "}
          <span className="text-muted-foreground font-medium">
            a fullstack engineer who loves building things.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-12"
        >
          I turn ideas into reliable, well-crafted software — from sleek frontends 
          to robust backends. I enjoy solving tricky problems and working with 
          people who care about getting things right.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-xl font-medium hover:opacity-90 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            See What I've Built ↓
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-border px-8 py-3.5 rounded-xl font-medium text-foreground hover-glow"
          >
            Say Hello 💬
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
