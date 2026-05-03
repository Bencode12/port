import React from 'react';

// Pure CSS Orbiting Circles (no framer-motion dependency)
const OrbitingCircles = ({ 
  children,
  radius = 150,
  iconSize = 40,
  speed = 20,
  reverse = false,
  path = true
}) => {
  const direction = reverse ? -1 : 1;
  const animationName = `orbit-rotate-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  const counterAnimationName = `counter-rotate-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  
  // Create unique keyframes for this instance
  const styleSheet = document.styleSheets[0];
  try {
    styleSheet.insertRule(`
      @keyframes ${animationName} {
        from { transform: rotate(0deg); }
        to { transform: rotate(${direction * 360}deg); }
      }
    `, styleSheet.cssRules.length);
    
    styleSheet.insertRule(`
      @keyframes ${counterAnimationName} {
        from { transform: rotate(0deg); }
        to { transform: rotate(${direction * -360}deg); }
      }
    `, styleSheet.cssRules.length);
  } catch (e) {
    console.warn('Could not insert keyframes');
  }
  
  return (
    React.createElement('div', {
      style: {
        width: `${radius * 2}px`,
        height: `${radius * 2}px`,
        position: 'absolute',
      }
    },
      path && React.createElement('svg', {
        style: {
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }
      },
        React.createElement('circle', {
          cx: "50%",
          cy: "50%",
          r: radius,
          fill: "none",
          stroke: "rgba(107, 158, 255, 0.15)",
          strokeWidth: "1"
        })
      ),
      React.Children.map(children, (child, index) => {
        const angle = (index / React.Children.count(children)) * 360;
        
        return React.createElement('div', {
          key: index,
          style: {
            position: 'absolute',
            left: '50%',
            top: '50%',
            marginLeft: `-${iconSize / 2}px`,
            marginTop: `-${iconSize / 2}px`,
            width: `${iconSize}px`,
            height: `${iconSize}px`,
            animation: `${animationName} ${speed}s linear infinite`,
          }
        },
          React.createElement('div', {
            style: {
              width: '100%',
              height: '100%',
              animation: `${counterAnimationName} ${speed}s linear infinite`,
            }
          },
            React.createElement('div', {
              style: {
                transform: `rotate(${angle}deg) translateY(-${radius}px) rotate(-${angle}deg)`,
              }
            },
              child
            )
          )
        );
      })
    )
  );
};

export function OrbitingCirclesDemo() {
  return (
    React.createElement('div', {
      style: {
        position: 'relative',
        display: 'flex',
        height: '500px',
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }
    },
      React.createElement(OrbitingCircles, { iconSize: 35, radius: 120, speed: 25 },
        React.createElement(Icons.python),
        React.createElement(Icons.javascript),
        React.createElement(Icons.cpp),
        React.createElement(Icons.java),
        React.createElement(Icons.rust)
      ),
      React.createElement(OrbitingCircles, { iconSize: 28, radius: 80, reverse: true, speed: 15 },
        React.createElement(Icons.typescript),
        React.createElement(Icons.go),
        React.createElement(Icons.ruby),
        React.createElement(Icons.php)
      )
    )
  );
}

const Icons = {
  python: () => React.createElement('svg', { width: '100', height: '100', viewBox: '0 0 256 255' },
    React.createElement('path', { d: 'M126.9.1c-64.8 0-60.8 28.1-62.8 41H28.4C13.2 41.1 0 52.7 0 68.8v49.1c0 15.6 13.7 28.3 30.3 28.3h42.1v13.1c0 22.6-19 42.3-42.1 42.3H15.2c-16.1 0-15.2 13.2-15.2 26.4v10.6c0 14.1 12 26.4 26.7 26.4h55.1c16.6 0 30.3-12.7 30.3-28.3v-49.1h45.2c16.6 0 30.3-12.7 30.3-28.3V92.5c0-16.1-13.2-27.7-28.4-27.7H117V51.6c0-22.6 19-42.3 42.1-42.3h15.1c16.1 0 15.2-13.2 15.2-26.4V10.4c0-14.1-12-26.4-26.7-26.4h-55.1zM95.5 22c8.3 0 15.1 6.8 15.1 15.1s-6.8 15.1-15.1 15.1-15.1-6.8-15.1-15.1S87.2 22 95.5 22zm65 151.1c8.3 0 15.1 6.8 15.1 15.1s-6.8 15.1-15.1 15.1-15.1-6.8-15.1-15.1 6.8-15.1 15.1-15.1z', fill: '#3776AB' })
  ),
  
  javascript: () => React.createElement('svg', { width: '100', height: '100', viewBox: '0 0 256 256' },
    React.createElement('rect', { x: '0', y: '0', width: '256', height: '256', rx: '25', fill: '#F7DF1E' }),
    React.createElement('path', { d: 'M67.3 194.3c0 16.6 9.8 24.3 21.3 24.3 11.4 0 19.2-6.8 19.2-16.6 0-11.4-7.6-15.4-16.6-19.2l-6.1-2.6c-9.1-3.8-12.9-6.8-12.9-14.7 0-6.8 5.3-12.1 13.6-12.1 8.3 0 13.6 3 17.7 12.1L123 154c-4.5-12.1-15.9-19.7-34.1-19.7-18.2 0-30.3 11.4-30.3 26.5 0 16.6 9.8 24.3 21.2 28.8l6.1 2.6c9.8 4.5 14.4 6.8 14.4 14.4 0 6.8-5.3 12.1-15.1 12.1-9.8 0-15.9-5.3-18.9-12.1L46.8 218c5.3 16.6 20.4 24.2 38.6 24.2 20.4 0 34-10.6 34-25 0-14.4-8.3-21.2-23.4-27.2l-6.1-2.6c-7.6-3-12.1-5.3-12.1-12.1 0-6.1 4.5-10.6 11.4-10.6 6.8 0 11.4 3 15.1 10.6l19.7-11.4c-8.3-16.6-20.4-24.2-34.8-24.2-23.4 0-37.9 15.1-37.9 34.8 0 13.6 7.6 21.2 19.7 26.5l6.8 3c10.6 4.5 15.9 7.6 15.9 15.1 0 6.8-6.1 12.9-17.4 12.9-11.4 0-18.2-6.1-22.7-15.1l-21.2 12.1zm109.6 1.5c4.5 8.3 8.3 15.1 18.2 15.1 9.1 0 15.1-3.8 15.1-18.2v-98.5h28v99c0 30.3-17.4 43.9-43.1 43.9-23.4 0-37.1-12.1-43.9-26.5z', fill: '#000' })
  ),
  
  cpp: () => React.createElement('svg', { width: '100', height: '100', viewBox: '0 0 256 256' },
    React.createElement('path', { d: 'M229.5 65.3L190.7 26.5C181.3 17.1 168.3 11.3 154.8 11.3H101.2C87.7 11.3 74.7 17.1 65.3 26.5L26.5 65.3C17.1 74.7 11.3 87.7 11.3 101.2v53.6c0 13.5 5.8 26.5 15.2 35.9l38.8 38.8c9.4 9.4 22.4 15.2 35.9 15.2h53.6c13.5 0 26.5-5.8 35.9-15.2l38.8-38.8c9.4-9.4 15.2-22.4 15.2-35.9v-53.6c0-13.5-5.8-26.5-15.2-35.9zM128 208c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80zm48-96h-16v-16h-16v16h-16v16h16v16h16v-16h16v-16zm48 0h-16v-16h-16v16h-16v16h16v16h16v-16h16v-16z', fill: '#00599C' })
  ),
  
  java: () => React.createElement('svg', { width: '100', height: '100', viewBox: '0 0 256 256' },
    React.createElement('path', { d: 'M89.4 180.3c-14.7 0-25.3-4.2-31.8-12.6-6.5-8.4-9.8-20.5-9.8-36.3 0-15.8 3.3-27.9 9.8-36.3 6.5-8.4 17.1-12.6 31.8-12.6 14.7 0 25.3 4.2 31.8 12.6 6.5 8.4 9.8 20.5 9.8 36.3 0 15.8-3.3 27.9-9.8 36.3-6.5 8.4-17.1 12.6-31.8 12.6zm0-16.8c9.1 0 16-3.1 20.7-9.3 4.7-6.2 7-15.2 7-26.8 0-11.6-2.3-20.6-7-26.8-4.7-6.2-11.6-9.3-20.7-9.3-9.1 0-16 3.1-20.7 9.3-4.7 6.2-7 15.2-7 26.8 0 11.6 2.3 20.6 7 26.8 4.7 6.2 11.6 9.3 20.7 9.3zm79.2 16.8c-14.7 0-25.3-4.2-31.8-12.6-6.5-8.4-9.8-20.5-9.8-36.3 0-15.8 3.3-27.9 9.8-36.3 6.5-8.4 17.1-12.6 31.8-12.6 14.7 0 25.3 4.2 31.8 12.6 6.5 8.4 9.8 20.5 9.8 36.3 0 15.8-3.3 27.9-9.8 36.3-6.5 8.4-17.1 12.6-31.8 12.6zm0-16.8c9.1 0 16-3.1 20.7-9.3 4.7-6.2 7-15.2 7-26.8 0-11.6-2.3-20.6-7-26.8-4.7-6.2-11.6-9.3-20.7-9.3-9.1 0-16 3.1-20.7 9.3-4.7 6.2-7 15.2-7 26.8 0 11.6 2.3 20.6 7 26.8 4.7 6.2 11.6 9.3 20.7 9.3z', fill: '#f89820' }),
    React.createElement('path', { d: 'M128 40c-48.6 0-88 39.4-88 88s39.4 88 88 88 88-39.4 88-88-39.4-88-88-88zm0 160c-39.8 0-72-32.2-72-72s32.2-72 72-72 72 32.2 72 72-32.2 72-72 72z', fill: '#5382a1' })
  ),
  
  rust: () => React.createElement('svg', { width: '100', height: '100', viewBox: '0 0 106 106' },
    React.createElement('g', { fill: 'none', fillRule: 'evenodd' },
      React.createElement('path', { d: 'M53 0C23.7 0 0 23.7 0 53s23.7 53 53 53 53-23.7 53-53S82.3 0 53 0zm0 95C29.8 95 11 76.2 11 53S29.8 11 53 11s42 18.8 42 42-18.8 42-42 42z', fill: '#000' }),
      React.createElement('circle', { cx: '53', cy: '53', r: '28', fill: '#DEA584' }),
      React.createElement('circle', { cx: '53', cy: '53', r: '20', fill: '#FFF' })
    )
  ),
  
  typescript: () => React.createElement('svg', { width: '100', height: '100', viewBox: '0 0 256 256' },
    React.createElement('rect', { x: '0', y: '0', width: '256', height: '256', rx: '25', fill: '#3178C6' }),
    React.createElement('path', { d: 'M212 166.3c-6.8 3.5-14.4 5.3-22.8 5.3-16.6 0-26.5-9.1-26.5-24.2 0-15.1 10.6-24.2 28-24.2 6.8 0 12.9 1.5 17.4 3.8v-18.2c-4.5-2.3-10.6-3.8-17.4-3.8-26.5 0-42.4 15.1-42.4 40.9 0 25.7 15.9 40.9 40.9 40.9 10.6 0 19.7-2.3 26.5-6.8v-13.6zm-98.5-40.9h-22.7v60.6H73.1v-60.6H50.4v-16.6h63.1v16.6z', fill: '#FFF' })
  ),
  
  go: () => React.createElement('svg', { width: '100', height: '100', viewBox: '0 0 256 256' },
    React.createElement('path', { d: 'M136.3 110.5c-15.8-6.8-27.2-6.8-36.3-2.3-6.8 3.8-10.6 10.6-10.6 18.9 0 15.1 12.1 22.7 30.3 28.8 18.2 6.1 28.8 15.1 28.8 31.8 0 20.4-15.9 34-39.4 34-15.1 0-28.8-4.5-40.9-12.1l7.6-15.1c10.6 6.8 21.2 10.6 31.8 10.6 15.1 0 23.5-7.6 23.5-18.9 0-12.1-9.1-18.2-26.5-24.2-19.7-6.8-34-16.6-34-35.6 0-18.9 14.4-33.3 37.9-33.3 12.9 0 25 3.8 34.8 9.8l-7.6 15.1zm68.1-18.2h18.2v94h-18.2v-94zm-27.3 0h18.2v94h-18.2v-94z', fill: '#00ADD8' })
  ),
  
  ruby: () => React.createElement('svg', { width: '100', height: '100', viewBox: '0 0 256 256' },
    React.createElement('path', { d: 'M181.9 2.3c-20.4 0-37.1 16.6-37.1 37.1 0 6.8 1.5 12.9 4.5 18.2L94.8 112c-5.3-3-11.4-4.5-18.2-4.5-20.4 0-37.1 16.6-37.1 37.1 0 20.4 16.6 37.1 37.1 37.1 6.8 0 12.9-1.5 18.2-4.5l54.5 54.5c-3 5.3-4.5 11.4-4.5 18.2 0 20.4 16.6 37.1 37.1 37.1 20.4 0 37.1-16.6 37.1-37.1 0-6.8-1.5-12.9-4.5-18.2l54.5-54.5c5.3 3 11.4 4.5 18.2 4.5 20.4 0 37.1-16.6 37.1-37.1 0-20.4-16.6-37.1-37.1-37.1-6.8 0-12.9 1.5-18.2 4.5l-54.5-54.5c3-5.3 4.5-11.4 4.5-18.2 0-20.4-16.6-37.1-37.1-37.1z', fill: '#CC342D' })
  ),
  
  php: () => React.createElement('svg', { width: '100', height: '100', viewBox: '0 0 256 256' },
    React.createElement('ellipse', { cx: '128', cy: '128', rx: '110', ry: '60', fill: '#8993BE' }),
    React.createElement('path', { d: 'M128 80c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48zm0 80c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z', fill: '#FFF' })
  )
};

// Render the component when DOM is ready
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
