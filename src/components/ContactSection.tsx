import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm tracking-[0.3em] uppercase text-primary mb-4">
            Let's Work Together
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Got a project in mind?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-12">
            I'm currently available for freelance work and full-time positions.
            Let's build something great together.
          </p>

          <a
            href="mailto:hello@yourdomain.com"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-4 rounded-lg font-medium text-lg hover:opacity-90 transition-opacity group"
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
