"use client";

import { useEffect, useRef } from "react";
import { useAnimation } from "./AnimationContext";

export default function HexagonCanvas({
  layer = "bottom",
  size = 50,
  offset = 0,
  baseOpacity = 0.2,
  maxOpacity = 1,
  color = "#ffffff",
  animationSpeed = 0.01,
  tileDelayRatio = 1/2,
  glowColor = "0,0,100",
  glowMagnitude = 150,
  mouseRadius = 200,
  lagSpeed = 0.1, // smaller = more lag
}: {
  layer?: string;
  size?: number;
  offset?: number;
  baseOpacity?: number;
  maxOpacity?: number;
  color?: string;
  animationSpeed?: number;
  tileDelayRatio?: number;
  glowColor?: string;
  glowMagnitude?: number;
  mouseRadius?: number;
  lagSpeed?: number;
}) {

  let animationStartTime = useRef(-1);
  let animationStartX = useRef(-1);
  let animationStartY = useRef(-1);

  const [animationState, setAnimationState] = useAnimation();
  const animationStateRef = useRef(animationState);

  useEffect(() => {
    animationStateRef.current = animationState;
    animationStartTime.current = -1
    if (animationState == 0) {
      animationStartX.current = -1;
      animationStartY.current = -1;
    }
  }, [animationState]);

  const toAnimate = useRef<Hex[]>([])
  const animating = useRef<Hex[]>([])

  // Set appropriate values for current animation
  useEffect(() => {
    toAnimate.current = [];
    animating.current = [];

    hexagons.current.forEach((value, key) => {
      switch (animationState) {
        case 0:
          value.animationSpeed = 0;
          value.opacity = 0;
          break;
        case 1:
          value.animationSpeed = animationSpeed;
          value.opacity = 0;
          break;
        case 2:
          value.animationSpeed = 0;
          value.opacity = 1;
          break;
        case 3:
          value.animationSpeed = -animationSpeed;
          value.opacity = 1;
          break;
        default:
          return;
      }
      toAnimate.current.push(value);
    });
  }, [animationState])

  const bottomCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const topCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const targetMouseRef = useRef<{ x: number; y: number } | null>(null);
  const displayMouseRef = useRef<{ x: number; y: number } | null>(null);

  enum Canvas {
    Bottom,
    Top
  }

  class Hex {
    x: number;
    y: number;
    animationSpeed: number;
    opacity: number;
    color: string;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.animationSpeed = 0.01;
        this.opacity = 0;
        this.color = color;
    }
  }

  const hexagons = useRef(new Map<String, Hex>());
  let currentWidth = 0;
  let currentHeight = 0;

  // Create a hashmap of hexagons that cover the screen
  function createHexagons(height: number, width: number) {
    if (hexagons.current.size != 0) return;
    let x = 0;
    let y = 0;
    const vert = 3/2 * size;
    const horiz = Math.sqrt(3) * size;
    for (let canvasY = 0; canvasY < height + vert; canvasY += vert) {
      x=0;
      for (let canvasX = 0; canvasX < width + horiz; canvasX += horiz) {
        const newHex = new Hex(x, y);
        hexagons.current.set(`${x},${y}`, newHex)
        x++;
      }
      y++;
    }
    return hexagons
  }

  // Get 1 of 6 coordinates for the vertices of a hexagon. Apply a slight additional size when using top canvas
  function getPointCoordinates(canvasX: number, canvasY: number, vertexIndex: number, selectedCanvas: Canvas = Canvas.Bottom): Array<number> {
    const adjustedSize = (selectedCanvas == Canvas.Top) ? size + 0.25 : size;
    const angle_deg = 60 * vertexIndex - 30
    const angle_rad = Math.PI / 180 * angle_deg
    const pointX = canvasX + adjustedSize * Math.cos(angle_rad)
    const pointY = canvasY + adjustedSize * Math.sin(angle_rad)
    return [pointX, pointY]
  }

  // Draw 1 hexagon's outline or interior, for bottom and top canvases respectively
  function drawSingleHexagon(hex: Hex, ctx: CanvasRenderingContext2D, selectedCanvas: Canvas) {    
    const canvasX = hex.x * Math.sqrt(3) * size + (hex.y % 2 ? 0 : Math.sqrt(3) * size / 2);
    const canvasY = hex.y * 3/2 * size;
    
    let alpha = 1;
    if (selectedCanvas == Canvas.Bottom) {
      if (displayMouseRef.current) {
        const dx = displayMouseRef.current.x - canvasX;
        const dy = displayMouseRef.current.y - canvasY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const influence = Math.max(0, 1 - dist / mouseRadius);
        alpha = baseOpacity + influence * (maxOpacity - baseOpacity);
      } else {
        alpha = (baseOpacity * 2 + maxOpacity * 1) / 3;
      }
    } else if (selectedCanvas == Canvas.Top) {
      // Hexagons on the top canvas are only displayed for certain animations
      if ([1,3].indexOf(animationStateRef.current) > -1) {
        const now = performance.now();
        if (animationStartTime.current == -1) animationStartTime.current = now
        const elapsed = now - animationStartTime.current;

        // Capture the mouse position when animation started
        if (animationStartX.current == -1 && targetMouseRef.current) animationStartX.current = targetMouseRef.current.x
        if (animationStartY.current == -1 && targetMouseRef.current) animationStartY.current = targetMouseRef.current.y
        const canvasX = hex.x * Math.sqrt(3) * size + (hex.y % 2 ? 0 : Math.sqrt(3) * size / 2);
        const canvasY = hex.y * 3/2 * size;

        // Delay hex animation based on distance from starting location
        if (elapsed >= (Math.abs(animationStartX.current - canvasX) + Math.abs(animationStartY.current - canvasY)) * tileDelayRatio) {
          const index = toAnimate.current.indexOf(hex);
          if (index > -1) {
            toAnimate.current.splice(index, 1);
            animating.current.push(hex)
          }
        }
      }

      // Adjust opacity if in animating group
      const index = animating.current.indexOf(hex)
      if (index > -1) {
        hex.opacity += hex.animationSpeed;

        // Remove from animating group when done
        if (animationStateRef.current == 1 && hex.opacity >= 1) {
          animating.current.splice(index, 1);
          if (animating.current.length == 0) setAnimationState(2);
        } else if (animationStateRef.current == 3 && hex.opacity <= 0) {
          hex.opacity = 0;
          animating.current.splice(index, 1);
          if (animating.current.length == 0) setAnimationState(0);
        }
      }
      alpha = hex.opacity;
    }

    // Trace the current hexagon
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
      const [pointX, pointY] = getPointCoordinates(canvasX, canvasY, i, selectedCanvas)
      const [nextPointX, nextPointY] = getPointCoordinates(canvasX, canvasY, (i+1) % 6, selectedCanvas)
      if (i == 0) ctx.moveTo(pointX, pointY);
      ctx.lineTo(nextPointX, nextPointY);
    }

    // Use strokes for the outline or fill for the whole hexagon
    if (selectedCanvas == Canvas.Bottom) {
      ctx.strokeStyle = color;
      ctx.globalAlpha = alpha;
      ctx.stroke();
    } else if (selectedCanvas == Canvas.Top) {
      ctx.fillStyle = hex.color;
      ctx.globalAlpha = alpha;
      ctx.fill();
    }
    ctx.globalAlpha = 1;
  }

  // Call drawSingleHexagon for every hexagon
  function drawAllHexagons(ctx: CanvasRenderingContext2D, selectedCanvas: Canvas) {
    hexagons.current.forEach((value, key) => {
      drawSingleHexagon(value, ctx, selectedCanvas);
    });
  }

  function handleCanvas(selectedCanvas: Canvas) {
    let canvas;
    if (selectedCanvas == Canvas.Bottom) canvas = bottomCanvasRef.current;
    else if (selectedCanvas == Canvas.Top) canvas = topCanvasRef.current;
    else return;
    
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const draw = () => {
      const dpr = window.devicePixelRatio || 1;
      const width = window.innerWidth;
      const height = window.innerHeight;

      if (width != currentWidth || height != currentHeight) {
        currentWidth = width;
        currentHeight = height;
        hexagons.current.clear();
      }

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      ctx.clearRect(0, 0, width, height);

      if (selectedCanvas == Canvas.Bottom) {
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
      }

      // Create hexagons
      createHexagons(height, width);
      drawAllHexagons(ctx, selectedCanvas);

      requestAnimationFrame(draw);
    }
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
  }

  useEffect(() => {
    handleCanvas(Canvas.Bottom);
    handleCanvas(Canvas.Top);
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

  if (layer == "bottom") 
    return (
      <canvas
        ref={bottomCanvasRef}
        style={{
          display: "block",
          width: "100vw",
          height: "100vh",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: -1,
          pointerEvents: "none",
        }}
      />
    );
  else if (layer == "top")
    return (
      <canvas
        ref={topCanvasRef}
        style={{
          display: "block",
          width: "100vw",
          height: "100vh",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 1,
          pointerEvents: "none",
        }}
      />
    );
}
