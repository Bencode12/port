import React from 'react';
import { motion } from 'framer-motion';

const OrbitingCircles = ({ children, radius = 150, iconSize = 40, speed = 20, reverse = false, path = true }) => {
  const direction = reverse ? -1 : 1;
  
  return React.createElement('div', {
    style: { width: `${radius * 2}px`, height: `${radius * 2}px`, position: 'absolute' }
  },
    path && React.createElement('svg', { style: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' } },
      React.createElement('circle', { cx: "50%", cy: "50%", r: radius, fill: "none", stroke: "rgba(107, 158, 255, 0.15)", strokeWidth: "1" })
    ),
    React.Children.map(children, (child, index) => {
      const angle = (index / React.Children.count(children)) * 360;
      return React.createElement(motion.div, {
        key: index,
        style: { position: 'absolute', left: '50%', top: '50%', marginLeft: `-${iconSize / 2}px`, marginTop: `-${iconSize / 2}px`, width: `${iconSize}px`, height: `${iconSize}px` },
        animate: { rotate: direction * 360 },
        transition: { duration: speed, repeat: Infinity, ease: "linear" }
      },
        React.createElement(motion.div, {
          style: { width: '100%', height: '100%' },
          animate: { rotate: direction * -360 },
          transition: { duration: speed, repeat: Infinity, ease: "linear" }
        },
          React.createElement('div', { style: { transform: `rotate(${angle}deg) translateY(-${radius}px) rotate(-${angle}deg)` } }, child)
        )
      );
    })
  );
};

export function OrbitingCirclesDemo() {
  return React.createElement('div', {
    style: { position: 'relative', display: 'flex', height: '500px', width: '100%', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }
  },
    React.createElement(OrbitingCircles, { iconSize: 35, radius: 120, speed: 25 },
      React.createElement(Icons.python), React.createElement(Icons.javascript), React.createElement(Icons.cpp), React.createElement(Icons.java), React.createElement(Icons.rust)
    ),
    React.createElement(OrbitingCircles, { iconSize: 28, radius: 80, reverse: true, speed: 15 },
      React.createElement(Icons.typescript), React.createElement(Icons.go), React.createElement(Icons.ruby), React.createElement(Icons.php)
    )
  );
}

const Icons = {
  python: () => React.createElement('div', { style: { width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', fontWeight: 'bold', color: '#3776AB', background: '#fff', borderRadius: '50%', border: '2px solid #3776AB' } }, 'Py'),
  javascript: () => React.createElement('div', { style: { width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: 'bold', color: '#F7DF1E', background: '#000', borderRadius: '50%' } }, 'JS'),
  cpp: () => React.createElement('div', { style: { width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: 'bold', color: '#00599C', background: '#fff', borderRadius: '50%', border: '2px solid #00599C' } }, 'C++'),
  java: () => React.createElement('div', { style: { width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: 'bold', color: '#f89820', background: '#fff', borderRadius: '50%', border: '2px solid #f89820' } }, 'Java'),
  rust: () => React.createElement('div', { style: { width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: 'bold', color: '#DEA584', background: '#000', borderRadius: '50%', border: '2px solid #DEA584' } }, 'Rust'),
  typescript: () => React.createElement('div', { style: { width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: 'bold', color: '#3178C6', background: '#fff', borderRadius: '50%', border: '2px solid #3178C6' } }, 'TS'),
  go: () => React.createElement('div', { style: { width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: 'bold', color: '#00ADD8', background: '#fff', borderRadius: '50%', border: '2px solid #00ADD8' } }, 'Go'),
  ruby: () => React.createElement('div', { style: { width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: 'bold', color: '#CC342D', background: '#fff', borderRadius: '50%', border: '2px solid #CC342D' } }, 'Ruby'),
  php: () => React.createElement('div', { style: { width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: 'bold', color: '#8993BE', background: '#fff', borderRadius: '50%', border: '2px solid #8993BE' } }, 'PHP')
};

document.addEventListener('DOMContentLoaded', function() {
  const rootElement = document.getElementById('orbiting-tech-root');
  if (rootElement && typeof ReactDOM !== 'undefined') {
    try {
      const root = ReactDOM.createRoot(rootElement);
      root.render(React.createElement(OrbitingCirclesDemo));
    } catch (error) {
      console.error('OrbitingCircles: Error rendering component:', error);
    }
  }
});
