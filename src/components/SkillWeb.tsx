import { useRef, useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SkillNode {
  id: string;
  label: string;
  group: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

interface SkillEdge {
  source: string;
  target: string;
}

const GROUPS: Record<string, { color: string; hsl: string }> = {
  Frontend: { color: "hsl(155, 55%, 50%)", hsl: "155 55% 50%" },
  Backend: { color: "hsl(175, 50%, 55%)", hsl: "175 50% 55%" },
  "DevOps & Cloud": { color: "hsl(195, 45%, 55%)", hsl: "195 45% 55%" },
  "Data & Testing": { color: "hsl(140, 40%, 55%)", hsl: "140 40% 55%" },
  "Architecture & Quality": { color: "hsl(260, 40%, 65%)", hsl: "260 40% 65%" },
};

const skills: Omit<SkillNode, "x" | "y" | "vx" | "vy">[] = [
  // Frontend
  { id: "react", label: "React", group: "Frontend", radius: 44 },
  { id: "vue", label: "Vue / Nuxt", group: "Frontend", radius: 40 },
  { id: "angular", label: "Angular", group: "Frontend", radius: 27 },
  { id: "typescript", label: "TypeScript", group: "Frontend", radius: 48 },
  { id: "tailwind", label: "Tailwind", group: "Frontend", radius: 36 },
  { id: "html-css", label: "HTML / CSS", group: "Frontend", radius: 32 },
  // Backend
  { id: "nodejs", label: "Node.js", group: "Backend", radius: 42 },
  { id: "python", label: "Python", group: "Backend", radius: 45 },
  { id: "flask", label: "Flask", group: "Backend", radius: 30 },
  { id: "php", label: "PHP", group: "Backend", radius: 28 },
  { id: "laravel", label: "Laravel", group: "Backend", radius: 22 },
  { id: "c-cpp", label: "C / C++", group: "Backend", radius: 24 },
  { id: "csharp", label: "C#", group: "Backend", radius: 26 },
  { id: "rest-api", label: "REST API", group: "Backend", radius: 38 },
  // DevOps & Cloud
  { id: "aws", label: "Cloud Computing", group: "DevOps & Cloud", radius: 44 },
  { id: "kubernetes", label: "Kubernetes", group: "DevOps & Cloud", radius: 35 },
  { id: "cicd", label: "GitHub Actions (CI/CD)", group: "DevOps & Cloud", radius: 40 },
  { id: "linux", label: "Linux", group: "DevOps & Cloud", radius: 30 },
  { id: "grafana", label: "Grafana", group: "DevOps & Cloud", radius: 25 },
  { id: "prometheus", label: "Prometheus", group: "DevOps & Cloud", radius: 23 },
  // Data & Testing
  { id: "postgresql", label: "PostgreSQL", group: "Data & Testing", radius: 40 },
  { id: "mysql", label: "MySQL", group: "Data & Testing", radius: 27 },
  { id: "mongodb", label: "MongoDB", group: "Data & Testing", radius: 33 },
  { id: "playwright", label: "Playwright", group: "Data & Testing", radius: 36 },
  { id: "vitest", label: "Vitest", group: "Data & Testing", radius: 24 },
  { id: "figma", label: "Figma", group: "Frontend", radius: 24 },
  { id: "spark", label: "Apache Spark", group: "Data & Testing", radius: 30 },
  // Architecture & Quality
  { id: "sw-arch", label: "SW Architecture", group: "Architecture & Quality", radius: 44 },
  { id: "clean-code", label: "Clean Code", group: "Architecture & Quality", radius: 31 },
  { id: "uml", label: "UML", group: "Architecture & Quality", radius: 25 },
  { id: "eda", label: "Event Driven Architecture", group: "Architecture & Quality", radius: 39 },
  { id: "microservices", label: "Microservices", group: "Architecture & Quality", radius: 35 },
];

const edges: SkillEdge[] = [
  // Frontend - complete graph (21 edges)
  { source: "angular", target: "figma" },
  { source: "angular", target: "html-css" },
  { source: "angular", target: "react" },
  { source: "angular", target: "tailwind" },
  { source: "angular", target: "typescript" },
  { source: "angular", target: "vue" },
  { source: "figma", target: "html-css" },
  { source: "figma", target: "react" },
  { source: "figma", target: "tailwind" },
  { source: "figma", target: "typescript" },
  { source: "figma", target: "vue" },
  { source: "html-css", target: "react" },
  { source: "html-css", target: "tailwind" },
  { source: "html-css", target: "typescript" },
  { source: "html-css", target: "vue" },
  { source: "react", target: "tailwind" },
  { source: "react", target: "typescript" },
  { source: "react", target: "vue" },
  { source: "tailwind", target: "typescript" },
  { source: "tailwind", target: "vue" },
  { source: "typescript", target: "vue" },
  // Backend - complete graph (28 edges)
  { source: "c-cpp", target: "csharp" },
  { source: "c-cpp", target: "flask" },
  { source: "c-cpp", target: "laravel" },
  { source: "c-cpp", target: "nodejs" },
  { source: "c-cpp", target: "php" },
  { source: "c-cpp", target: "python" },
  { source: "c-cpp", target: "rest-api" },
  { source: "csharp", target: "flask" },
  { source: "csharp", target: "laravel" },
  { source: "csharp", target: "nodejs" },
  { source: "csharp", target: "php" },
  { source: "csharp", target: "python" },
  { source: "csharp", target: "rest-api" },
  { source: "flask", target: "laravel" },
  { source: "flask", target: "nodejs" },
  { source: "flask", target: "php" },
  { source: "flask", target: "python" },
  { source: "flask", target: "rest-api" },
  { source: "laravel", target: "nodejs" },
  { source: "laravel", target: "php" },
  { source: "laravel", target: "python" },
  { source: "laravel", target: "rest-api" },
  { source: "nodejs", target: "php" },
  { source: "nodejs", target: "python" },
  { source: "nodejs", target: "rest-api" },
  { source: "php", target: "python" },
  { source: "php", target: "rest-api" },
  { source: "python", target: "rest-api" },
  // DevOps & Cloud - complete graph (15 edges)
  { source: "aws", target: "cicd" },
  { source: "aws", target: "grafana" },
  { source: "aws", target: "kubernetes" },
  { source: "aws", target: "linux" },
  { source: "aws", target: "prometheus" },
  { source: "cicd", target: "grafana" },
  { source: "cicd", target: "kubernetes" },
  { source: "cicd", target: "linux" },
  { source: "cicd", target: "prometheus" },
  { source: "grafana", target: "kubernetes" },
  { source: "grafana", target: "linux" },
  { source: "grafana", target: "prometheus" },
  { source: "kubernetes", target: "linux" },
  { source: "kubernetes", target: "prometheus" },
  { source: "linux", target: "prometheus" },
  // Data & Testing - complete graph (15 edges)
  { source: "mongodb", target: "mysql" },
  { source: "mongodb", target: "playwright" },
  { source: "mongodb", target: "postgresql" },
  { source: "mongodb", target: "spark" },
  { source: "mongodb", target: "vitest" },
  { source: "mysql", target: "playwright" },
  { source: "mysql", target: "postgresql" },
  { source: "mysql", target: "spark" },
  { source: "mysql", target: "vitest" },
  { source: "playwright", target: "postgresql" },
  { source: "playwright", target: "spark" },
  { source: "playwright", target: "vitest" },
  { source: "postgresql", target: "spark" },
  { source: "postgresql", target: "vitest" },
  { source: "spark", target: "vitest" },
  // Architecture & Quality - complete graph (10 edges)
  { source: "clean-code", target: "eda" },
  { source: "clean-code", target: "microservices" },
  { source: "clean-code", target: "sw-arch" },
  { source: "clean-code", target: "uml" },
  { source: "eda", target: "microservices" },
  { source: "eda", target: "sw-arch" },
  { source: "eda", target: "uml" },
  { source: "microservices", target: "sw-arch" },
  { source: "microservices", target: "uml" },
  { source: "sw-arch", target: "uml" },
];

const SkillWeb = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<SkillNode[]>([]);
  const animFrameRef = useRef<number>(0);
  const mouseRef = useRef<{ x: number; y: number } | null>(null);
  const hoveredRef = useRef<string | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<{ node: SkillNode; connections: string[] } | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const sizeRef = useRef({ w: 0, h: 0 });
  const dprRef = useRef(1);

  const initNodes = useCallback((w: number, h: number) => {
    const groupCenters: Record<string, { cx: number; cy: number }> = {
      Frontend: { cx: w * 0.22, cy: h * 0.26 },
      Backend: { cx: w * 0.78, cy: h * 0.26 },
      "DevOps & Cloud": { cx: w * 0.78, cy: h * 0.76 },
      "Data & Testing": { cx: w * 0.22, cy: h * 0.76 },
      "Architecture & Quality": { cx: w * 0.50, cy: h * 0.50 },
    };

    nodesRef.current = skills.map((s) => {
      const gc = groupCenters[s.group];
      return {
        ...s,
        x: gc.cx + (Math.random() - 0.5) * w * 0.26,
        y: gc.cy + (Math.random() - 0.5) * h * 0.22,
        vx: 0,
        vy: 0,
      };
    });
  }, []);

  const getConnections = useCallback((nodeId: string) => {
    return edges
      .filter((e) => e.source === nodeId || e.target === nodeId)
      .map((e) => (e.source === nodeId ? e.target : e.source));
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    const dpr = window.devicePixelRatio || 1;
    dprRef.current = dpr;

    const resize = () => {
      const rect = canvas.parentElement!.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;

      if (nodesRef.current.length === 0 || Math.abs(sizeRef.current.w - w) > 100) {
        initNodes(w, h);
      }
      sizeRef.current = { w, h };
    };

    resize();
    window.addEventListener("resize", resize);

    const simulate = () => {
      const { w, h } = sizeRef.current;
      const nodes = nodesRef.current;
      const mouse = mouseRef.current;
      const hovered = hoveredRef.current;

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];

        // Repulsion between all nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;
          const minDist = a.radius + b.radius + 35;

          if (dist < minDist) {
            const force = (minDist - dist) * 0.015;
            const fx = (dx / dist) * force;
            const fy = (dy / dist) * force;
            a.vx -= fx;
            a.vy -= fy;
            b.vx += fx;
            b.vy += fy;
          }
        }

        // Edge spring forces
        for (const edge of edges) {
          if (edge.source !== a.id && edge.target !== a.id) continue;
          const otherId = edge.source === a.id ? edge.target : edge.source;
          const other = nodes.find((n) => n.id === otherId)!;
          const dx = other.x - a.x;
          const dy = other.y - a.y;
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;
          const targetDist = 180;
          const force = (dist - targetDist) * 0.0008;
          a.vx += (dx / dist) * force;
          a.vy += (dy / dist) * force;
        }

        // Center gravity
        const cx = w / 2;
        const cy = h / 2;
        a.vx += (cx - a.x) * 0.00008;
        a.vy += (cy - a.y) * 0.00008;

        // Very gentle drift (much less wobbly)
        a.vx += (Math.random() - 0.5) * 0.005;
        a.vy += (Math.random() - 0.5) * 0.005;

        // Stronger damping = less wobbly
        a.vx *= 0.92;
        a.vy *= 0.92;

        // Update position
        a.x += a.vx;
        a.y += a.vy;

        // Boundaries
        const pad = a.radius + 10;
        if (a.x < pad) { a.x = pad; a.vx *= -0.3; }
        if (a.x > w - pad) { a.x = w - pad; a.vx *= -0.3; }
        if (a.y < pad) { a.y = pad; a.vy *= -0.3; }
        if (a.y > h - pad) { a.y = h - pad; a.vy *= -0.3; }
      }
    };

    const draw = () => {
      const { w, h } = sizeRef.current;
      const nodes = nodesRef.current;
      const hovered = hoveredRef.current;
      const hoveredConns = hovered ? getConnections(hovered) : [];

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      // Draw edges
      for (const edge of edges) {
        const a = nodes.find((n) => n.id === edge.source)!;
        const b = nodes.find((n) => n.id === edge.target)!;

        const isHighlighted =
          hovered && (edge.source === hovered || edge.target === hovered);
        const isDimmed = hovered && !isHighlighted;

        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);

        if (isHighlighted) {
          ctx.strokeStyle = GROUPS[a.group].color.replace(")", ", 0.6)").replace("hsl(", "hsla(");
          ctx.lineWidth = 2;
        } else if (isDimmed) {
          ctx.strokeStyle = "hsla(210, 12%, 30%, 0.15)";
          ctx.lineWidth = 0.5;
        } else {
          ctx.strokeStyle = "hsla(210, 12%, 30%, 0.3)";
          ctx.lineWidth = 1;
        }

        ctx.stroke();
      }

      // Draw nodes
      for (const node of nodes) {
        const isHovered = node.id === hovered;
        const isConnected = hoveredConns.includes(node.id);
        const isDimmed = hovered && !isHovered && !isConnected;
        const groupColor = GROUPS[node.group];

        const r = isHovered ? node.radius * 1.3 : isConnected ? node.radius * 1.1 : node.radius;

        // Glow for hovered
        if (isHovered) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, r + 14, 0, Math.PI * 2);
          const glow = ctx.createRadialGradient(node.x, node.y, r, node.x, node.y, r + 14);
          glow.addColorStop(0, groupColor.color.replace(")", ", 0.25)").replace("hsl(", "hsla("));
          glow.addColorStop(1, "transparent");
          ctx.fillStyle = glow;
          ctx.fill();
        }

        // Opaque background circle — masks any edges passing underneath
        ctx.beginPath();
        ctx.arc(node.x, node.y, r, 0, Math.PI * 2);
        ctx.fillStyle = "hsl(210, 14%, 15%)";
        ctx.fill();

        // Node circle (colored / dimmed overlay)
        ctx.beginPath();
        ctx.arc(node.x, node.y, r, 0, Math.PI * 2);

        if (isDimmed) {
          ctx.fillStyle = "hsla(210, 14%, 15%, 0.6)";
          ctx.strokeStyle = "hsla(210, 12%, 23%, 0.3)";
        } else {
          ctx.fillStyle = isHovered
            ? groupColor.color.replace(")", ", 0.25)").replace("hsl(", "hsla(")
            : "hsla(210, 14%, 15%, 0.9)";
          ctx.strokeStyle = isHovered || isConnected
            ? groupColor.color.replace(")", ", 0.7)").replace("hsl(", "hsla(")
            : "hsla(210, 12%, 22%, 0.6)";
        }
        ctx.lineWidth = isHovered ? 2.5 : isConnected ? 2 : 1;
        ctx.fill();
        ctx.stroke();

        // Label
        const fontSize = isHovered ? 12 : 11;
        ctx.font = `${isHovered ? "600" : "500"} ${fontSize}px 'Space Grotesk', sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = isDimmed
          ? "hsla(210, 10%, 52%, 0.4)"
          : isHovered
            ? "hsla(45, 15%, 95%, 1)"
            : "hsla(45, 15%, 82%, 0.9)";
        ctx.fillText(node.label, node.x, node.y);
      }
    };

    const loop = () => {
      simulate();
      draw();
      animFrameRef.current = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, [initNodes, getConnections]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLCanvasElement>) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      mouseRef.current = { x, y };

      let found: SkillNode | null = null;
      for (const node of nodesRef.current) {
        const dx = node.x - x;
        const dy = node.y - y;
        if (Math.sqrt(dx * dx + dy * dy) < node.radius + 5) {
          found = node;
          break;
        }
      }

      if (found) {
        hoveredRef.current = found.id;
        setHoveredSkill({ node: found, connections: getConnections(found.id) });
        setTooltipPos({ x: e.clientX, y: e.clientY });
        canvas.style.cursor = "pointer";
      } else {
        hoveredRef.current = null;
        setHoveredSkill(null);
        canvas.style.cursor = "default";
      }
    },
    [getConnections]
  );

  const handleMouseLeave = useCallback(() => {
    mouseRef.current = null;
    hoveredRef.current = null;
    setHoveredSkill(null);
  }, []);

  return (
    <div className="relative w-full h-[700px]">
      <canvas
        ref={canvasRef}
        className="w-full h-full rounded-xl"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      />

      {/* Tooltip */}
      <AnimatePresence>
        {hoveredSkill && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            transition={{ duration: 0.15 }}
            className="fixed z-50 pointer-events-none px-3 py-2 rounded-lg border border-border bg-card shadow-lg"
            style={{
              left: tooltipPos.x + 16,
              top: tooltipPos.y - 10,
            }}
          >
            <div className="flex items-center gap-2 mb-1">
              <div
                className="w-2 h-2 rounded-full"
                style={{ background: GROUPS[hoveredSkill.node.group].color }}
              />
              <span className="font-semibold text-sm text-foreground">
                {hoveredSkill.node.label}
              </span>
              <span className="text-xs text-muted-foreground">
                {hoveredSkill.node.group}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SkillWeb;
