"use client";

import { useEffect, useRef } from "react";

export default function HexagonCanvas({
  size = 50,
  offset = 0,
  baseOpacity = 0.2,
  maxOpacity = 1,
  color = "#ffffff",
  glowColor = "0,0,100",
  glowMagnitude = 150,
  mouseRadius = 200,
  lagSpeed = 0.1, // smaller = more lag
}: {
  size?: number;
  offset?: number;
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

  class Hex {
    x: number;
    y: number;
    baseOpacity: number;
    outlineOpacity: number;
    baseColor: string;
    outlineColor: string;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.baseOpacity = 0;
        this.outlineOpacity = 100;
        this.baseColor = "black";
        this.outlineColor = "white";
    }
  }

  const hexagons = new Map()
  function createHexagons(height: number, width: number) {
    if (hexagons.size != 0) return;
    let x = 0;
    let y = 0;
    for (let canvasY = 0; canvasY < height; canvasY += 3/2 * size) {
      x=0;
      for (let canvasX = 0; canvasX < width; canvasX += Math.sqrt(3) * size) {
        const newHex = new Hex(x, y);
        hexagons.set(`${x},${y}`, newHex)
        console.log(`Created Hexagon: ${x},${y}`)
        x++;
      }
      y++;
    }
    return hexagons
  }

  function getPointCoordinates(canvasX: number, canvasY: number, vertexIndex: number): Array<number> {
    const angle_deg = 60 * vertexIndex - 30
    const angle_rad = Math.PI / 180 * angle_deg
    const pointX = canvasX + size * Math.cos(angle_rad)
    const pointY = canvasY + size * Math.sin(angle_rad)
    return [pointX, pointY]
  }

  function drawSingleHexagon(hex: Hex, ctx: CanvasRenderingContext2D) {    
    console.log(`Drawing Hexagon: ${[hex.x, hex.y]}`)
    const canvasX = hex.x * Math.sqrt(3) * size + (hex.y % 2 ? 0 : Math.sqrt(3) * size / 2);
    const canvasY = hex.y * 3/2 * size;

    let alpha = 1;
    if (displayMouseRef.current) {
      const dx = displayMouseRef.current.x - canvasX;
      const dy = displayMouseRef.current.y - canvasY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const influence = Math.max(0, 1 - dist / mouseRadius);
      alpha = baseOpacity + influence * (maxOpacity - baseOpacity);
    }

    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
      const [pointX, pointY] = getPointCoordinates(canvasX, canvasY, i)
      const [nextPointX, nextPointY] = getPointCoordinates(canvasX, canvasY, (i+1) % 6)
      if (i == 0) ctx.moveTo(pointX, pointY);
      ctx.lineTo(nextPointX, nextPointY);
    }
    // ctx.fillStyle = color;
    ctx.strokeStyle = color;
    ctx.globalAlpha = alpha;
    ctx.stroke();
    // ctx.fill();
    ctx.globalAlpha = 1;
  }

  function drawAllHexagons(ctx: CanvasRenderingContext2D) {
    hexagons.forEach((value, key) => {
      drawSingleHexagon(value, ctx);
    });
  }

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

      // Create hexagons
      createHexagons(height, width);
      drawAllHexagons(ctx);

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
    size,
    offset,
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
