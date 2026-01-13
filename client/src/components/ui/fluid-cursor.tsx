import { useEffect, useRef } from "react";

/**
 * A lightweight fluid-like cursor trail effect using Canvas 2D.
 * Simulates the "blob" look with fading trails and velocity-based size.
 */
const FluidCursor = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const points = useRef<{ x: number; y: number; age: number; force: number }[]>([]);
  const mouse = useRef({ x: 0, y: 0 });
  const rafId = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    resize();

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      // Add new point on move
      points.current.push({
        x: e.clientX,
        y: e.clientY,
        age: 0,
        force: Math.random() * 0.5 + 0.5, // Variance in size
      });
    };
    window.addEventListener("mousemove", handleMouseMove);

    const render = () => {
      // Clear with fade effect for trails
      // ctx.fillStyle = "rgba(0, 0, 0, 0.1)"; // Not transparent for "eraser" effect
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Filter out old points
      // Increase age
      points.current.forEach((p) => (p.age += 1));
      points.current = points.current.filter((p) => p.age < 50);

      // Draw fluid blob trail
      ctx.beginPath();
      // Use line joining for smoother look
      if (points.current.length > 2) {
        ctx.moveTo(points.current[0].x, points.current[0].y);
        for (let i = 1; i < points.current.length - 1; i++) {
          const p1 = points.current[i];
          const p2 = points.current[i + 1];
          const midX = (p1.x + p2.x) / 2;
          const midY = (p1.y + p2.y) / 2;
          ctx.quadraticCurveTo(p1.x, p1.y, midX, midY);
        }
      }
      
      // Styling to match Lando Norris "Liquid" feel (Neon Lime / White)
      // The Lando site uses a masking effect, but here we use additive blending for a "glow"
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      
      // Outer Glow (Lime)
      ctx.shadowBlur = 20;
      ctx.shadowColor = "#D2FF00"; // Neon Lime
      ctx.strokeStyle = "rgba(210, 255, 0, 0.5)";
      ctx.lineWidth = 20;
      ctx.stroke();
      
      // Inner Core (White/Bright)
      ctx.shadowBlur = 10;
      ctx.shadowColor = "#FFFFFF";
      ctx.strokeStyle = "rgba(255, 255, 255, 0.8)";
      ctx.lineWidth = 8;
      ctx.stroke();
      
      // Draw individual blobs for "dripping" effect at the end
      points.current.forEach((p) => {
         const radius = (1 - p.age / 50) * 15 * p.force;
         if (radius > 0) {
             ctx.beginPath();
             ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
             ctx.fillStyle = `rgba(210, 255, 0, ${1 - p.age/50})`;
             ctx.fill();
         }
      });

      rafId.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999] mix-blend-screen opacity-80"
    />
  );
};

export default FluidCursor;
