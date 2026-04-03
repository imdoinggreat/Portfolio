"use client";
import React, { useEffect, useState, memo } from 'react';

type GlowColor = 'cyan' | 'purple' | 'amber' | 'rose';

interface SkillConfig {
  id: string;
  orbitRadius: number;
  size: number;
  speed: number;
  phaseShift: number;
  glowColor: GlowColor;
  label: string;
  icon: React.ReactNode;
  color: string;
}

interface OrbitingSkillProps {
  config: SkillConfig;
  angle: number;
}

interface GlowingOrbitPathProps {
  radius: number;
  glowColor?: GlowColor;
  animationDelay?: number;
}

// Simple text-based icons for tools
const ToolIcon = ({ label, color }: { label: string; color: string }) => (
  <div
    className="w-full h-full flex items-center justify-center rounded-full font-bold text-white text-[10px] leading-none"
    style={{ background: color }}
  >
    {label.slice(0, 2).toUpperCase()}
  </div>
);

const skillsConfig: SkillConfig[] = [
  // Inner orbit — data & analysis
  {
    id: 'python',
    orbitRadius: 100,
    size: 44,
    speed: 0.5,
    phaseShift: 0,
    glowColor: 'cyan',
    label: 'Python',
    color: '#3776AB',
    icon: null,
  },
  {
    id: 'sql',
    orbitRadius: 100,
    size: 44,
    speed: 0.5,
    phaseShift: (2 * Math.PI) / 4,
    glowColor: 'cyan',
    label: 'SQL',
    color: '#F29111',
    icon: null,
  },
  {
    id: 'excel',
    orbitRadius: 100,
    size: 44,
    speed: 0.5,
    phaseShift: (2 * Math.PI) / 2,
    glowColor: 'cyan',
    label: 'Excel',
    color: '#217346',
    icon: null,
  },
  {
    id: 'tableau',
    orbitRadius: 100,
    size: 44,
    speed: 0.5,
    phaseShift: (3 * Math.PI) / 2,
    glowColor: 'cyan',
    label: 'Tableau',
    color: '#E97627',
    icon: null,
  },
  // Outer orbit — creative tools
  {
    id: 'ps',
    orbitRadius: 178,
    size: 48,
    speed: -0.35,
    phaseShift: 0,
    glowColor: 'purple',
    label: 'Photoshop',
    color: '#31A8FF',
    icon: null,
  },
  {
    id: 'pr',
    orbitRadius: 178,
    size: 48,
    speed: -0.35,
    phaseShift: (2 * Math.PI) / 5,
    glowColor: 'purple',
    label: 'Premiere',
    color: '#9999FF',
    icon: null,
  },
  {
    id: 'figma',
    orbitRadius: 178,
    size: 48,
    speed: -0.35,
    phaseShift: (4 * Math.PI) / 5,
    glowColor: 'purple',
    label: 'Figma',
    color: '#F24E1E',
    icon: null,
  },
  {
    id: 'ppt',
    orbitRadius: 178,
    size: 48,
    speed: -0.35,
    phaseShift: (6 * Math.PI) / 5,
    glowColor: 'purple',
    label: 'PPT',
    color: '#D24726',
    icon: null,
  },
  {
    id: 'notion',
    orbitRadius: 178,
    size: 48,
    speed: -0.35,
    phaseShift: (8 * Math.PI) / 5,
    glowColor: 'purple',
    label: 'Notion',
    color: '#000000',
    icon: null,
  },
];

const OrbitingSkill = memo(({ config, angle }: OrbitingSkillProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { orbitRadius, size, label, color } = config;

  const x = Math.cos(angle) * orbitRadius;
  const y = Math.sin(angle) * orbitRadius;

  return (
    <div
      className="absolute top-1/2 left-1/2 transition-all duration-300 ease-out"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
        zIndex: isHovered ? 20 : 10,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`relative w-full h-full rounded-full transition-all duration-300 cursor-pointer overflow-hidden
          ${isHovered ? 'scale-125' : ''}`}
        style={{
          boxShadow: isHovered
            ? `0 0 24px ${color}60, 0 0 48px ${color}30`
            : `0 2px 8px ${color}30`,
        }}
      >
        <ToolIcon label={label} color={color} />
        {isHovered && (
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-editorial-title/90 rounded text-[11px] text-white whitespace-nowrap pointer-events-none z-30">
            {label}
          </div>
        )}
      </div>
    </div>
  );
});
OrbitingSkill.displayName = 'OrbitingSkill';

const GlowingOrbitPath = memo(({ radius, glowColor = 'cyan', animationDelay = 0 }: GlowingOrbitPathProps) => {
  const colors: Record<GlowColor, { primary: string; secondary: string; border: string }> = {
    cyan: {
      primary: 'rgba(158, 158, 244, 0.4)',
      secondary: 'rgba(158, 158, 244, 0.15)',
      border: 'rgba(158, 158, 244, 0.25)',
    },
    purple: {
      primary: 'rgba(147, 51, 234, 0.3)',
      secondary: 'rgba(147, 51, 234, 0.12)',
      border: 'rgba(147, 51, 234, 0.2)',
    },
    amber: {
      primary: 'rgba(245, 158, 11, 0.3)',
      secondary: 'rgba(245, 158, 11, 0.12)',
      border: 'rgba(245, 158, 11, 0.2)',
    },
    rose: {
      primary: 'rgba(244, 63, 94, 0.3)',
      secondary: 'rgba(244, 63, 94, 0.12)',
      border: 'rgba(244, 63, 94, 0.2)',
    },
  };
  const c = colors[glowColor];

  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
      style={{ width: `${radius * 2}px`, height: `${radius * 2}px` }}
    >
      <div
        className="absolute inset-0 rounded-full"
        style={{
          border: `1px solid ${c.border}`,
          boxShadow: `inset 0 0 20px ${c.secondary}, 0 0 40px ${c.primary}`,
          animationDelay: `${animationDelay}s`,
        }}
      />
    </div>
  );
});
GlowingOrbitPath.displayName = 'GlowingOrbitPath';

export default function OrbitingSkills() {
  const [time, setTime] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    let id: number;
    let last = performance.now();
    const animate = (now: number) => {
      setTime(t => t + (now - last) / 1000);
      last = now;
      id = requestAnimationFrame(animate);
    };
    id = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(id);
  }, [isPaused]);

  return (
    <div
      className="relative w-[min(90vw,420px)] h-[min(90vw,420px)] flex items-center justify-center mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Orbit rings */}
      <GlowingOrbitPath radius={100} glowColor="cyan" animationDelay={0} />
      <GlowingOrbitPath radius={178} glowColor="purple" animationDelay={1.5} />

      {/* Center badge */}
      <div className="w-16 h-16 rounded-full bg-editorial-card border border-editorial-accent/30 flex flex-col items-center justify-center z-10 shadow-soft">
        <span className="text-[10px] font-semibold text-editorial-accent tracking-wider uppercase">Tools</span>
        <span className="text-[9px] text-editorial-muted mt-0.5">技能栈</span>
      </div>

      {/* Skill icons */}
      {skillsConfig.map((config) => {
        const angle = time * config.speed + config.phaseShift;
        return <OrbitingSkill key={config.id} config={config} angle={angle} />;
      })}
    </div>
  );
}
