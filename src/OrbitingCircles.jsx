import React from 'react';

// Tech Icons as SVG Components
const TechIcons = {
  rust: () => (
    <svg width="40" height="40" viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="45" fill="#DEA584" opacity="0.2"/>
      <text x="50" y="60" textAnchor="middle" fill="#DEA584" fontSize="24" fontWeight="bold">R</text>
    </svg>
  ),
  python: () => (
    <svg width="40" height="40" viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="45" fill="#3776AB" opacity="0.2"/>
      <text x="50" y="60" textAnchor="middle" fill="#3776AB" fontSize="24" fontWeight="bold">Py</text>
    </svg>
  ),
  javascript: () => (
    <svg width="40" height="40" viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="45" fill="#F7DF1E" opacity="0.2"/>
      <text x="50" y="60" textAnchor="middle" fill="#F7DF1E" fontSize="24" fontWeight="bold">JS</text>
    </svg>
  ),
  c: () => (
    <svg width="40" height="40" viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="45" fill="#A8B9CC" opacity="0.2"/>
      <text x="50" y="60" textAnchor="middle" fill="#A8B9CC" fontSize="24" fontWeight="bold">C</text>
    </svg>
  ),
  java: () => (
    <svg width="40" height="40" viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="45" fill="#007396" opacity="0.2"/>
      <text x="50" y="60" textAnchor="middle" fill="#007396" fontSize="24" fontWeight="bold">J</text>
    </svg>
  ),
  swift: () => (
    <svg width="40" height="40" viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="45" fill="#FA7343" opacity="0.2"/>
      <text x="50" y="60" textAnchor="middle" fill="#FA7343" fontSize="24" fontWeight="bold">S</text>
    </svg>
  ),
  go: () => (
    <svg width="40" height="40" viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="45" fill="#00ADD8" opacity="0.2"/>
      <text x="50" y="60" textAnchor="middle" fill="#00ADD8" fontSize="24" fontWeight="bold">Go</text>
    </svg>
  ),
  kotlin: () => (
    <svg width="40" height="40" viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="45" fill="#7F52FF" opacity="0.2"/>
      <text x="50" y="60" textAnchor="middle" fill="#7F52FF" fontSize="24" fontWeight="bold">K</text>
    </svg>
  ),
  ruby: () => (
    <svg width="40" height="40" viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="45" fill="#CC342D" opacity="0.2"/>
      <text x="50" y="60" textAnchor="middle" fill="#CC342D" fontSize="24" fontWeight="bold">Rb</text>
    </svg>
  ),
  matlab: () => (
    <svg width="40" height="40" viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="45" fill="#0076A8" opacity="0.2"/>
      <text x="50" y="60" textAnchor="middle" fill="#0076A8" fontSize="20" fontWeight="bold">MAT</text>
    </svg>
  ),
  assembly: () => (
    <svg width="40" height="40" viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="45" fill="#6E4C13" opacity="0.2"/>
      <text x="50" y="60" textAnchor="middle" fill="#6E4C13" fontSize="20" fontWeight="bold">ASM</text>
    </svg>
  ),
  zig: () => (
    <svg width="40" height="40" viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="45" fill="#F7A41D" opacity="0.2"/>
      <text x="50" y="60" textAnchor="middle" fill="#F7A41D" fontSize="24" fontWeight="bold">Z</text>
    </svg>
  ),
  lua: () => (
    <svg width="40" height="40" viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="45" fill="#000080" opacity="0.2"/>
      <text x="50" y="60" textAnchor="middle" fill="#000080" fontSize="24" fontWeight="bold">Lua</text>
    </svg>
  ),
  ocaml: () => (
    <svg width="40" height="40" viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="45" fill="#EC6813" opacity="0.2"/>
      <text x="50" y="60" textAnchor="middle" fill="#EC6813" fontSize="20" fontWeight="bold">ML</text>
    </svg>
  ),
  r: () => (
    <svg width="40" height="40" viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="45" fill="#276DC3" opacity="0.2"/>
      <text x="50" y="60" textAnchor="middle" fill="#276DC3" fontSize="24" fontWeight="bold">R</text>
    </svg>
  ),
  html: () => (
    <svg width="40" height="40" viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="45" fill="#E34F26" opacity="0.2"/>
      <text x="50" y="60" textAnchor="middle" fill="#E34F26" fontSize="20" fontWeight="bold">HTML</text>
    </svg>
  ),
  php: () => (
    <svg width="40" height="40" viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="45" fill="#777BB4" opacity="0.2"/>
      <text x="50" y="60" textAnchor="middle" fill="#777BB4" fontSize="24" fontWeight="bold">PHP</text>
    </svg>
  ),
  sql: () => (
    <svg width="40" height="40" viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="45" fill="#00758F" opacity="0.2"/>
      <text x="50" y="60" textAnchor="middle" fill="#00758F" fontSize="24" fontWeight="bold">SQL</text>
    </svg>
  ),
  brainfuck: () => (
    <svg width="40" height="40" viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="45" fill="#FFFFFF" opacity="0.1"/>
      <text x="50" y="60" textAnchor="middle" fill="#FFFFFF" fontSize="16" fontWeight="bold">BF</text>
    </svg>
  )
};

// Orbiting Circles Component
const OrbitingCircles = ({ 
  children, 
  className = "", 
  radius = 150, 
  iconSize = 40, 
  speed = 20, 
  reverse = false,
  path = false 
}) => {
  const direction = reverse ? -1 : 1;
  
  return (
    <div 
      className={`orbiting-circles ${className}`}
      style={{
        width: `${radius * 2}px`,
        height: `${radius * 2}px`,
        position: 'absolute',
        animation: `orbit-rotate ${speed}s linear infinite`,
        animationDirection: direction === -1 ? 'reverse' : 'normal'
      }}
    >
      {path && (
        <svg 
          className="orbit-path"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
          }}
        >
          <circle
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
            stroke="rgba(107, 158, 255, 0.15)"
            strokeWidth="1"
          />
        </svg>
      )}
      {React.Children.map(children, (child, index) => {
        const angle = (index / React.Children.count(children)) * 2 * Math.PI;
        const x = radius + radius * Math.cos(angle) - iconSize / 2;
        const y = radius + radius * Math.sin(angle) - iconSize / 2;
        
        return (
          <div
            className="orbit-item"
            style={{
              position: 'absolute',
              left: `${x}px`,
              top: `${y}px`,
              width: `${iconSize}px`,
              height: `${iconSize}px`,
              animation: `counter-rotate ${speed}s linear infinite`,
              animationDirection: direction === -1 ? 'reverse' : 'normal'
            }}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
};

// Main Orbiting Circles Demo Component
export function OrbitingCirclesDemo() {
  return (
    <div className="orbiting-circles-demo">
      {/* Outer orbit - slower, reversed */}
      <OrbitingCircles 
        radius={250} 
        iconSize={50} 
        speed={50} 
        reverse={true}
        path={true}
      >
        <TechIcons.html />
        <TechIcons.php />
        <TechIcons.sql />
        <TechIcons.brainfuck />
      </OrbitingCircles>

      {/* Middle orbit */}
      <OrbitingCircles 
        radius={200} 
        iconSize={45} 
        speed={40}
        path={true}
      >
        <TechIcons.matlab />
        <TechIcons.assembly />
        <TechIcons.zig />
        <TechIcons.lua />
        <TechIcons.ocaml />
        <TechIcons.r />
      </OrbitingCircles>

      {/* Inner orbit */}
      <OrbitingCircles 
        radius={150} 
        iconSize={40} 
        speed={30}
        path={true}
      >
        <TechIcons.java />
        <TechIcons.swift />
        <TechIcons.go />
        <TechIcons.kotlin />
        <TechIcons.ruby />
      </OrbitingCircles>

      {/* Core orbit - fastest */}
      <OrbitingCircles 
        radius={100} 
        iconSize={35} 
        speed={20}
        path={true}
      >
        <TechIcons.c />
        <TechIcons.rust />
        <TechIcons.python />
        <TechIcons.javascript />
      </OrbitingCircles>

      {/* Center Icon */}
      <div className="center-icon-large">
        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
      </div>
    </div>
  );
}

// Render the component
const root = document.getElementById('orbiting-tech-root');
if (root) {
  ReactDOM.render(<OrbitingCirclesDemo />, root);
}
