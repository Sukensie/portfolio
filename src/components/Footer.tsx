const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} · Your Name
        </p>
        <p className="font-mono text-xs text-muted-foreground">
          Built with React + TypeScript
        </p>
      </div>
    </footer>
  );
};

export default Footer;
