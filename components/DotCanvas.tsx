"use client";

import { useEffect, useRef } from "react";

export default function DotCanvas({
  xSpacing = 50,
  ySpacing = 50,
  baseRadius = 3,
  maxRadius = 12,
  baseOpacity = 0.2,
  maxOpacity = 1,
  color = "#ffffff",
  glowColor = "0,0,100",
  glowMagnitude = 150,
  mouseRadius = 200,
  lagSpeed = 0.1, // smaller = more lag
}: {
  xSpacing?: number;
  ySpacing?: number;
  baseRadius?: number;
  maxRadius?: number;
  baseOpacity?: number;
  maxOpacity?: number;
  color?: string;
  glowColor?: string;
  glowMagnitude?: number;
  mouseRadius?: number;
  lagSpeed?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const targetMouseRef = useRef<{ x: number; y: number } | null>(null);
  const displayMouseRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const draw = () => {
      const dpr = window.devicePixelRatio || 1;
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      ctx.clearRect(0, 0, width, height);

      // Lerp display mouse towards target mouse
      if (targetMouseRef.current) {
        if (!displayMouseRef.current) {
          displayMouseRef.current = { ...targetMouseRef.current };
        } else {
          displayMouseRef.current.x +=
            (targetMouseRef.current.x - displayMouseRef.current.x) * lagSpeed;
          displayMouseRef.current.y +=
            (targetMouseRef.current.y - displayMouseRef.current.y) * lagSpeed;
        }
      }

      // Draw glow around the lagging cursor
      if (displayMouseRef.current) {
        const gradient = ctx.createRadialGradient(
          displayMouseRef.current.x,
          displayMouseRef.current.y,
          0,
          displayMouseRef.current.x,
          displayMouseRef.current.y,
          glowMagnitude
        );
        gradient.addColorStop(0, `rgba(${glowColor},0.15)`);
        gradient.addColorStop(1, `rgba(${glowColor},0)`);
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      }

      // Draw dots
      for (let y = 0; y < height; y += ySpacing) {
        for (let x = 0; x < width; x += xSpacing) {
          let radius = baseRadius;
          let alpha = baseOpacity;

          if (displayMouseRef.current) {
            const dx = displayMouseRef.current.x - x;
            const dy = displayMouseRef.current.y - y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const influence = Math.max(0, 1 - dist / mouseRadius);

            radius = baseRadius + influence * (maxRadius - baseRadius);
            alpha = baseOpacity + influence * (maxOpacity - baseOpacity);
          }

          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fillStyle = color;
          ctx.globalAlpha = alpha;
          ctx.fill();
          ctx.globalAlpha = 1;
        }
      }

      requestAnimationFrame(draw);
    };

    draw();

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", draw);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", draw);
    };
  }, [
    xSpacing,
    ySpacing,
    baseRadius,
    maxRadius,
    baseOpacity,
    maxOpacity,
    color,
    glowColor,
    glowMagnitude,
    mouseRadius,
    lagSpeed,
  ]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        display: "block",
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    />
  );
}
