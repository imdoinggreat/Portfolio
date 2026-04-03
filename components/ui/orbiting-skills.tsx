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

// Brand SVG icons — rendered inside the colored circle
const BRAND_SVGS: Record<string, React.ReactNode> = {
  python: (
    <svg viewBox="0 0 128 128" className="w-[65%] h-[65%]" aria-hidden>
      <path d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z" fill="white"/>
      <path d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z" fill="#FFD845"/>
    </svg>
  ),
  sql: (
    <svg viewBox="0 0 24 24" fill="none" className="w-[62%] h-[62%]" aria-hidden>
      <ellipse cx="12" cy="6" rx="9" ry="3.5" fill="rgba(255,255,255,0.2)" stroke="white" strokeWidth="1.5"/>
      <path d="M3 6v4.5c0 1.93 4.03 3.5 9 3.5s9-1.57 9-3.5V6" stroke="white" strokeWidth="1.5"/>
      <path d="M3 10.5V15c0 1.93 4.03 3.5 9 3.5s9-1.57 9-3.5v-4.5" stroke="white" strokeWidth="1.5"/>
    </svg>
  ),
  excel: (
    <svg viewBox="0 0 24 24" fill="none" className="w-[62%] h-[62%]" aria-hidden>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" fill="rgba(255,255,255,0.2)" stroke="white" strokeWidth="1.5"/>
      <path d="M14 2v6h6" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M9.5 13.5l5 5M14.5 13.5l-5 5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  tableau: (
    <svg viewBox="0 0 24 24" fill="none" className="w-[62%] h-[62%]" aria-hidden>
      <rect x="10.5" y="2" width="3" height="8" rx="1" fill="white"/>
      <rect x="10.5" y="14" width="3" height="8" rx="1" fill="rgba(255,255,255,0.65)"/>
      <rect x="2" y="10.5" width="8" height="3" rx="1" fill="white"/>
      <rect x="14" y="10.5" width="8" height="3" rx="1" fill="rgba(255,255,255,0.65)"/>
      <rect x="5" y="5" width="2.5" height="5.5" rx="1" fill="rgba(255,255,255,0.45)"/>
      <rect x="16.5" y="13.5" width="2.5" height="5.5" rx="1" fill="rgba(255,255,255,0.45)"/>
    </svg>
  ),
  ps: (
    <svg viewBox="0 0 48 48" className="w-[65%] h-[65%]" aria-hidden>
      <text x="3" y="37" fill="#31A8FF" fontSize="30" fontFamily="Arial, sans-serif" fontWeight="bold">Ps</text>
    </svg>
  ),
  pr: (
    <svg viewBox="0 0 48 48" className="w-[65%] h-[65%]" aria-hidden>
      <text x="3" y="37" fill="#EA77FF" fontSize="30" fontFamily="Arial, sans-serif" fontWeight="bold">Pr</text>
    </svg>
  ),
  figma: (
    <svg viewBox="0 0 38 57" className="w-[52%] h-[52%]" aria-hidden>
      <path d="M19 28.5a9.5 9.5 0 0 1 9.5-9.5 9.5 9.5 0 0 1 9.5 9.5 9.5 9.5 0 0 1-9.5 9.5A9.5 9.5 0 0 1 19 28.5z" fill="#1ABCFE"/>
      <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 0 1-9.5 9.5A9.5 9.5 0 0 1 0 47.5z" fill="#0ACF83"/>
      <path d="M19 0v19h9.5a9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 28.5 0H19z" fill="#FF7262"/>
      <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E"/>
      <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF"/>
    </svg>
  ),
  ppt: (
    <svg viewBox="0 0 48 48" className="w-[65%] h-[65%]" aria-hidden>
      <text x="8" y="37" fill="white" fontSize="30" fontFamily="Arial, sans-serif" fontWeight="bold">P</text>
    </svg>
  ),
  canva: (
    <svg viewBox="0 0 100 100" className="w-[62%] h-[62%]" aria-hidden>
      <circle cx="50" cy="18" r="16" fill="white"/>
      <circle cx="82" cy="50" r="16" fill="rgba(255,255,255,0.8)"/>
      <circle cx="50" cy="82" r="16" fill="rgba(255,255,255,0.65)"/>
      <circle cx="18" cy="50" r="16" fill="rgba(255,255,255,0.8)"/>
      <circle cx="50" cy="50" r="11" fill="rgba(255,255,255,0.35)"/>
    </svg>
  ),
  claude: (
    <svg viewBox="0 0 24 24" fill="none" className="w-[60%] h-[60%]" aria-hidden>
      <path d="M12 3C7.03 3 3 7.03 3 12s4.03 9 9 9 9-4.03 9-9" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <path d="M12 6.5C9.02 6.5 6.5 9.02 6.5 12s2.52 5.5 5.5 5.5 5.5-2.52 5.5-5.5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="12" cy="12" r="2" fill="white"/>
    </svg>
  ),
};

function BrandIcon({ id, color }: { id: string; color: string }) {
  return (
    <div
      className="w-full h-full flex items-center justify-center rounded-full"
      style={{ background: color }}
    >
      {BRAND_SVGS[id] ?? (
        <span className="text-white font-bold text-[10px] leading-none">
          {id.slice(0, 2).toUpperCase()}
        </span>
      )}
    </div>
  );
}

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
    color: '#001E36',
  },
  {
    id: 'pr',
    orbitRadius: 178,
    size: 48,
    speed: -0.35,
    phaseShift: (2 * Math.PI) / 6,
    glowColor: 'purple',
    label: 'Premiere',
    color: '#1A0524',
  },
  {
    id: 'figma',
    orbitRadius: 178,
    size: 48,
    speed: -0.35,
    phaseShift: (4 * Math.PI) / 6,
    glowColor: 'purple',
    label: 'Figma',
    color: '#1E1E1E',
  },
  {
    id: 'ppt',
    orbitRadius: 178,
    size: 48,
    speed: -0.35,
    phaseShift: (6 * Math.PI) / 6,
    glowColor: 'purple',
    label: 'PowerPoint',
    color: '#D24726',
  },
  {
    id: 'canva',
    orbitRadius: 178,
    size: 48,
    speed: -0.35,
    phaseShift: (8 * Math.PI) / 6,
    glowColor: 'purple',
    label: 'Canva',
    color: '#7D2AE7',
  },
  {
    id: 'claude',
    orbitRadius: 178,
    size: 48,
    speed: -0.35,
    phaseShift: (10 * Math.PI) / 6,
    glowColor: 'purple',
    label: 'Claude',
    color: '#CC785C',
  },
];

const OrbitingSkill = memo(({ config, angle }: OrbitingSkillProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { orbitRadius, size, label, color, id } = config;

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
        <BrandIcon id={id} color={color} />
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
