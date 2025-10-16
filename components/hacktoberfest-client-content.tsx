'use client';

import { CleanCountdown } from "@/components/utils/clean-countdown";
import { Badge } from "@/components/ui/badge";
import { AuroraText } from "@/components/ui/aurora-text";
import { BookOpen, Bug } from "lucide-react";
import { Icons } from "@/components/utils/icons";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

interface HacktoberfestClientContentProps {
  active: boolean;
  eventYear: number;
  hacktoberfestEnd: Date;
}

export default function HacktoberfestClientContent({
  active,
  eventYear,
  hacktoberfestEnd,
}: HacktoberfestClientContentProps) {
  const glowControls = useAnimation();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    // Gradient glow animation
    const animateGlow = async () => {
      await glowControls.start({
        opacity: [0.2, 0.5, 0.2],
        scale: [1, 1.1, 1],
        transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
      });
    };
    animateGlow();

    // Canvas setup
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Falling particles (pumpkins and leaves)
    const particles: Particle[] = [];
    const particleCount = 15;

    class Particle {
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      rotation: number;
      type: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 20 + 10;
        this.speedY = Math.random() * 2 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.rotation = Math.random() * 360;
        this.type = Math.random() > 0.5 ? "🍂" : "🎃";
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate((this.rotation * Math.PI) / 180);
        ctx.fillStyle = this.type === "🍂" ? `rgba(255, ${Math.random() * 100 + 100}, 0, 0.8)` : `rgba(255, 100, 0, 0.8)`;
        ctx.fillText(this.type, 0, 0);
        ctx.restore();
      }

      update() {
        this.y += this.speedY;
        this.x += this.speedX;
        this.rotation += this.speedX * 2;
        if (this.y > canvas.height) {
          this.y = -this.size;
          this.x = Math.random() * canvas.width;
        }
        this.draw();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => particle.update());
      requestAnimationFrame(animateParticles);
    };
    animateParticles();

    // Confetti burst effect
    const confetti: Confetti[] = [];
    const burstInterval = setInterval(() => {
      if (active) {
        for (let i = 0; i < 20; i++) {
          confetti.push(new Confetti(canvas.width / 2, 100));
        }
      }
    }, 5000);

    class Confetti {
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      color: string;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 10 + 5;
        this.speedY = Math.random() * 3 + 2;
        this.speedX = Math.random() * 6 - 3;
        this.color = `hsl(${Math.random() * 360}, 70%, 50%)`;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        this.y += this.speedY;
        this.x += this.speedX;
        this.speedY += 0.1;
        if (this.y > canvas.height) {
          const index = confetti.indexOf(this);
          if (index > -1) confetti.splice(index, 1);
        }
        this.draw();
      }
    }

    const animateConfetti = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      confetti.forEach((c, index) => {
        if (c.y > canvas.height) confetti.splice(index, 1);
        else c.update();
      });
      requestAnimationFrame(animateConfetti);
    };
    animateConfetti();

    // Mouse trail effect
    const trailParticles: TrailParticle[] = [];

    class TrailParticle {
      x: number;
      y: number;
      size: number;
      alpha: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 5 + 2;
        this.alpha = 1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 165, 0, ${this.alpha})`; // Orange trail
        ctx.fill();
      }

      update() {
        this.alpha -= 0.05;
        this.size -= 0.1;
        this.draw();
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!prefersReducedMotion) {
        trailParticles.push(new TrailParticle(e.clientX, e.clientY));
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animateTrail = () => {
      trailParticles.forEach((particle, index) => {
        if (particle.alpha <= 0) {
          trailParticles.splice(index, 1);
        } else {
          particle.update();
        }
      });
      requestAnimationFrame(animateTrail);
    };
    animateTrail();

    // Cleanup function
    return () => {
      clearInterval(burstInterval);
      window.removeEventListener("mousemove", handleMouseMove);
      glowControls.stop();
    };
  }, [glowControls, active]);

  return (
    <>
      {/* Page Title Section */}
      <div className={active ? "pt-10 pb-16" : "pt-10 pb-12"}>
        <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span role="img" aria-label="pumpkin" className="text-2xl">🎃</span>
            <Badge
              variant="secondary"
              className="px-3 py-1 text-orange-600 bg-orange-100 dark:bg-orange-900/30 dark:text-orange-400 shadow-sm"
            >
              {active ? "Hacktoberfest is Live!" : "Coming Soon"}
            </Badge>
            <span role="img" aria-label="pumpkin" className="text-2xl">🎃</span>
          </div>

          <h1 className="text-foreground text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.15] mb-4">
            Join Helixque for <AuroraText>Hacktoberfest</AuroraText>
          </h1>

          <p className="text-muted-foreground text-base tracking-tight mt-6 max-w-2xl mx-auto sm:text-lg">
            {active ? (
              <>
                <span className="block">Join us in celebrating open source!</span>
                <span className="block">Contribute to our projects and be part of the Hacktoberfest community.</span>
              </>
            ) : (
              "We understand your eagerness to contribute and we're thankful for that, but you'll need to wait until the event begins."
            )}
          </p>
        </div>
      </div>

      {/* Countdown Timer with Enhanced Glow */}
      {active && (
        <motion.div
          className="mb-16 flex justify-center relative"
          animate={{
            boxShadow: [
              "0 0 20px rgba(255, 165, 0, 0.3)",
              "0 0 40px rgba(255, 165, 0, 0.6)",
              "0 0 20px rgba(255, 165, 0, 0.3)",
            ],
            transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <CleanCountdown
            endDate={hacktoberfestEnd}
            label={`Time left in Hacktoberfest ${eventYear}`}
            expiredMessage={`🎉 Hacktoberfest ${eventYear} has ended! 🎉`}
          />
        </motion.div>
      )}

      {/* Content Section */}
      <div className="max-w-5xl mx-auto px-6 mb-10 lg:px-10 text-center">
        <p className="text-lg text-muted-foreground mb-8">
          {active
            ? "Ready to contribute? Check out our repositories and start making a difference!"
            : "Meanwhile, explore our work and get ready to contribute."
          }
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <a
            href="https://github.com/orgs/HXQLabs/repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm sm:text-[13.5px] hover:bg-muted transition-colors bg-gradient-to-b from-background to-muted/30"
          >
            <Icons.github className="w-4 h-4" />
            Browse our repositories
          </a>

          <a
            href="https://github.com/HXQLabs/HelixQue/blob/main/CONTRIBUTING.md"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm sm:text-[13.5px] hover:bg-muted transition-colors bg-gradient-to-b from-background to-muted/30"
          >
            <BookOpen className="w-4 h-4" />
            See contributing guidelines
          </a>

          <a
            href="https://github.com/search?q=org%3AHXQLabs+state%3Aopen&type=Issues"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm sm:text-[13.5px] hover:bg-muted transition-colors bg-gradient-to-b from-background to-muted/30"
          >
            <Bug className="w-4 h-4" />
            Find issues
          </a>
        </div>

        <p className="mt-6 text-sm sm:text-base text-muted-foreground">
          Gear up your issues, sharpen those PRs, and let the commits roll in! ⚡️
        </p>
      </div>

      {/* Canvas for falling particles, confetti, and trail */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{ opacity: 0.7 }}
      />
    </>
  );
}