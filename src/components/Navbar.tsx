import { trackEvent } from "@/lib/analytics";

const Navbar = () => {
  const handleNavClick = (item: string) => {
    trackEvent({
      category: "Navigation",
      action: "nav_link_click",
      label: item,
    });
  };

  const handleResumeClick = () => {
    trackEvent({
      category: "Navigation",
      action: "resume_click",
      label: "header_resume",
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-bold text-lg tracking-tight">
          Tomáš Souček
        </a>

        <div className="hidden md:flex items-center gap-8">
          {["Projects", "Skills", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => handleNavClick(item)}
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href="/tomas-soucek-cv.pdf"
          target="_blank"
          className="font-mono text-xs tracking-wider bg-secondary px-4 py-2 rounded-lg text-foreground hover:bg-primary hover:text-primary-foreground transition-all"
          onClick={handleResumeClick}
        >
          📄 Resume
        </a>
      </div>
  );
};

export default Navbar;
