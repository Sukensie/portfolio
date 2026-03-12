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
            Let's connect! 🤝
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-12">
            I'm looking for my next opportunity and would love to hear from you — 
            whether it's about a role, a project, or just to geek out about tech.
          </p>

          <a
            href="mailto:hello@yourdomain.com"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-4 rounded-xl font-medium text-lg hover:opacity-90 transition-all hover:scale-[1.02] active:scale-[0.98] group"
          >
            <Mail className="w-5 h-5" />
            hello@yourdomain.com
            <ArrowUpRight className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" />
          </a>

          <div className="flex items-center justify-center gap-6 mt-12">
            {[
              { icon: Github, label: "GitHub", href: "https://github.com" },
              { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
            ].map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-mono text-sm"
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
