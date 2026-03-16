import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm tracking-[0.3em] uppercase text-primary mb-4">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Open to work - let's talk!
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-12">
            I'm currently looking for fullstack, frontend, or backend roles&nbsp;—&nbsp;ideally in a place that values lean thinking as much as clean code. If you're building something interesting and need someone who won't over-engineer your MVP, I'm also all ears. <br/>My inbox is open 24/7 😉 

          </p>

          <a
            href="mailto:hello@yourdomain.com"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-4 rounded-xl font-medium text-lg hover:opacity-90 transition-all hover:scale-[1.02] active:scale-[0.98] group"
          >
            <Mail className="w-5 h-5" />
            tomas@soucek.dk
            <ArrowUpRight className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" />
          </a>

          <div className="flex items-center justify-center gap-6 mt-12">
            {[
              { icon: Github, label: "GitHub", href: "https://github.com/sukensie" },
              { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/soucek-tomas/" },
            ].map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-mono text-sm bg-secondary px-2 py-1 rounded-lg"
              >
                <Icon className="w-4 h-4" />
                {label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
