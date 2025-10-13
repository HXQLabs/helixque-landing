"use client";

import { useEffect, useRef, useState, useCallback } from "react";

// Complete Particle class
class Particle {
  x: number;
  y: number;
  size: number;
  speed: number;
  type: 'pumpkin' | 'leaf' | 'confetti';
  color: string;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  sway: number;
  swaySpeed: number;
  swayAmplitude: number;

  constructor(canvasWidth: number) {
    this.x = Math.random() * canvasWidth;
    this.y = Math.random() * -200 - 20;
    this.size = Math.random() * 15 + 8;
    this.speed = Math.random() * 1.5 + 0.5;
    this.type = ['pumpkin', 'leaf', 'confetti'][Math.floor(Math.random() * 3)] as 'pumpkin' | 'leaf' | 'confetti';
    this.color = this.getColor();
    this.rotation = Math.random() * Math.PI * 2;
    this.rotationSpeed = (Math.random() - 0.5) * 0.03;
    this.opacity = Math.random() * 0.6 + 0.4;
    this.sway = Math.random() * Math.PI * 2;
    this.swaySpeed = Math.random() * 0.02 + 0.01;
    this.swayAmplitude = Math.random() * this.size * 0.2;
  }

  getColor() {
    const colors = {
      pumpkin: ['#FF7518', '#FF8C42', '#FFA366'],
      leaf: ['#8B4513', '#A0522D', '#CD853F'],
      confetti: ['#FF6B35', '#FFAA7A', '#FFFFFF']
    };
    const palette = colors[this.type];
    return palette[Math.floor(Math.random() * palette.length)];
  }

  update(canvasWidth: number, canvasHeight: number) {
    this.y += this.speed;
    this.sway += this.swaySpeed;
    this.x += Math.sin(this.sway) * this.swayAmplitude;
    this.rotation += this.rotationSpeed;

    if (this.y > canvasHeight + this.size) {
      this.y = -this.size;
      this.x = Math.random() * canvasWidth;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);
    ctx.globalAlpha = this.opacity;

    switch (this.type) {
      case 'pumpkin':
        this.drawPumpkin(ctx);
        break;
      case 'leaf':
        this.drawLeaf(ctx);
        break;
      case 'confetti':
        ctx.fillStyle = this.color;
        ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size * 0.6);
        break;
    }
    ctx.restore();
  }

  drawPumpkin(ctx: CanvasRenderingContext2D) {
    const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, this.size);
    gradient.addColorStop(0, this.color);
    gradient.addColorStop(1, '#D35400');
    ctx.fillStyle = gradient;

    ctx.beginPath();
    ctx.ellipse(0, 0, this.size, this.size * 0.9, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Pumpkin stem
    ctx.fillStyle = '#5D4037';
    ctx.fillRect(-this.size * 0.1, -this.size, this.size * 0.2, this.size * 0.3);
    
    // Pumpkin face
    ctx.fillStyle = '#2C3E50';
    ctx.beginPath();
    ctx.arc(-this.size * 0.3, -this.size * 0.2, this.size * 0.1, 0, Math.PI * 2);
    ctx.arc(this.size * 0.3, -this.size * 0.2, this.size * 0.1, 0, Math.PI * 2);
    ctx.moveTo(-this.size * 0.4, this.size * 0.2);
    ctx.quadraticCurveTo(0, this.size * 0.5, this.size * 0.4, this.size * 0.2);
    ctx.fill();
  }

  drawLeaf(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.moveTo(0, -this.size);
    ctx.bezierCurveTo(this.size, -this.size * 0.5, this.size * 0.5, this.size * 0.5, 0, this.size);
    ctx.bezierCurveTo(-this.size * 0.5, this.size * 0.5, -this.size, -this.size * 0.5, 0, -this.size);
    ctx.fill();
    
    // Leaf vein
    ctx.strokeStyle = 'rgba(0,0,0,0.2)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, -this.size);
    ctx.lineTo(0, this.size);
    ctx.stroke();
  }
}

// Complete Trail class
class Trail {
  x: number;
  y: number;
  life: number;
  size: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.life = 1;
    this.size = Math.random() * 4 + 2;
  }

  update() {
    this.life -= 0.04;
  }

  draw(ctx: CanvasRenderingContext2D) {
    const hue = 25 + (1 - this.life) * 20;
    ctx.fillStyle = `hsla(${hue}, 100%, 60%, ${this.life * 0.7})`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

export function FestiveCanvasAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const trailsRef = useRef<Trail[]>([]);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!ctx || !canvas) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Update and draw particles
    particlesRef.current.forEach(p => {
      p.update(canvas.width, canvas.height);
      p.draw(ctx);
    });

    // Update and draw trails
    trailsRef.current = trailsRef.current.filter(t => t.life > 0);
    trailsRef.current.forEach(t => {
      t.update();
      t.draw(ctx);
    });

    animationRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    setIsClient(true);
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleMotionChange = (e: MediaQueryListEvent) => {
      setReduceMotion(e.matches);
      if (e.matches && animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      } else if (!e.matches) {
        animate();
      }
    };
    
    setReduceMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleMotionChange);

    // Don't start animations if reduced motion is preferred
    if (mediaQuery.matches) return;

    // Handle mouse movement for trails
    const handleMouseMove = (e: MouseEvent) => {
      trailsRef.current.push(new Trail(e.clientX, e.clientY));
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Resize canvas and initialize particles
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.scale(dpr, dpr);
      }
      
      // Initialize particles based on screen size
      const particleCount = window.innerWidth < 768 ? 20 : 40;
      particlesRef.current = Array.from({ length: particleCount }, () => new Particle(window.innerWidth));
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Start animation
    animationRef.current = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      mediaQuery.removeEventListener('change', handleMotionChange);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate]);

  // Don't render if on server or reduced motion is preferred
  if (!isClient || reduceMotion) {
    return null;
  }

  return (
    <canvas 
      ref={canvasRef} 
      className="pointer-events-none absolute inset-0 -z-10 opacity-80" 
    />
  );
}