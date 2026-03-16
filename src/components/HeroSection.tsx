import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, Coffee } from "lucide-react";

const HeroSection = () => {
  const [displayName, setDisplayName] = useState(() => getRandomName(danishNames));

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setDisplayName((current) => {
        let next = current;
        let attempts = 0;

        while (next === current && attempts < 6) {
          next = getRandomName(danishNames);
          attempts += 1;
        }

        return next;
      });
    }, 2000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      {/* Soft gradient blobs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-[0.035]"
        style={{ background: 'radial-gradient(circle, hsl(155 55% 50%), transparent 70%)' }}
      />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-[0.025]"
        style={{ background: 'radial-gradient(circle, hsl(175 50% 55%), transparent 70%)' }}
      />

      <div className="relative z-10 max-w-4xl mx-auto top-2 md:top-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-secondary brightness-150 rounded-full px-4 py-2 mb-8"
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
          Hej{" "}
          <span className="inline-block align-baseline [perspective:800px]">
            <span className="relative inline-block h-[1em] min-w-[8ch] overflow-hidden align-bottom">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={displayName}
                  initial={{ rotateX: -90, y: "42%", opacity: 0 }}
                  animate={{ rotateX: 0, y: "0%", opacity: 1 }}
                  exit={{ rotateX: 90, y: "-42%", opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inline-flex origin-center items-center"
                >
                  {displayName}
                </motion.span>
              </AnimatePresence>
            </span>
          </span>
          <span className="relative -top-10 right-5 md:-top-20 opacity-50 select-none" aria-hidden="true">👋</span>
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-8"
        >
          I'm <span className="text-gradient">Tomáš</span>,{" "}
          <span className="text-muted-foreground font-medium">
            a fullstack engineer who ships what customers actually need.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-12"
        >
         Most engineering problems aren't really technical, they're scope problems. I help product teams turn unclear requirements into focused, working software, covering everything from modern frontends and scalable backends to cloud infrastructure. My real value comes from building the right thing, not just the next thing.
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
        className="absolute md:bottom-20 left-1/2 -translate-x-1/2"
      >
        <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;


const danishNames = [
  // Girls' names
  { name: "Anne", weight: 43021 }, { name: "Mette", weight: 37932 },
  { name: "Kirsten", weight: 34588 }, { name: "Hanne", weight: 34482 },
  { name: "Anna", weight: 33441 }, { name: "Helle", weight: 32720 },
  { name: "Maria", weight: 30400 }, { name: "Susanne", weight: 29668 },
  { name: "Lene", weight: 29290 }, { name: "Marianne", weight: 25598 },
  { name: "Camilla", weight: 24494 }, { name: "Lone", weight: 23918 },
  { name: "Louise", weight: 23824 }, { name: "Charlotte", weight: 23455 },
  { name: "Pia", weight: 23359 }, { name: "Tina", weight: 22855 },
  { name: "Emma", weight: 22590 }, { name: "Ida", weight: 22571 },
  { name: "Gitte", weight: 22382 }, { name: "Julie", weight: 21912 },
  // Boys' names
  { name: "Peter", weight: 45777 }, { name: "Michael", weight: 43976 },
  { name: "Lars", weight: 42596 }, { name: "Thomas", weight: 41800 },
  { name: "Jens", weight: 40558 }, { name: "Henrik", weight: 40416 },
  { name: "Søren", weight: 38087 }, { name: "Christian", weight: 37349 },
  { name: "Martin", weight: 36799 }, { name: "Jan", weight: 35210 },
  { name: "Morten", weight: 33384 }, { name: "Jesper", weight: 33139 },
  { name: "Anders", weight: 32980 }, { name: "Mads", weight: 32239 },
  { name: "Niels", weight: 30836 }, { name: "Rasmus", weight: 30222 },
  { name: "Mikkel", weight: 29280 }, { name: "Kim", weight: 27770 },
  { name: "Per", weight: 27640 }, { name: "Ole", weight: 26195 }
];

/**
 * Function to get a random name based on weights
 */
function getRandomName(nameList: ReadonlyArray<{ name: string; weight: number }>): string {
  const totalWeight = nameList.reduce((sum, item) => sum + item.weight, 0);
  let random = Math.random() * totalWeight;
  
  for (const entry of nameList) {
    if (random < entry.weight) return entry.name;
    random -= entry.weight;
  }

  return nameList[nameList.length - 1]?.name ?? "there";
}