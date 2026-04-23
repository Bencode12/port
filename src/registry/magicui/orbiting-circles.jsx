import React from 'react';
import { motion } from 'framer-motion';

export function OrbitingCircles({ 
  children,
  className = "",
  radius = 150,
  iconSize = 40,
  speed = 20,
  reverse = false,
  path = true
}) {
  const direction = reverse ? -1 : 1;
  
  return (
    <div 
      className={className}
      style={{
        width: `${radius * 2}px`,
        height: `${radius * 2}px`,
        position: 'absolute',
      }}
    >
      {path && (
        <svg 
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
        const angle = (index / React.Children.count(children)) * 360;
        
        return (
          <motion.div
            key={index}
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              marginLeft: `-${iconSize / 2}px`,
              marginTop: `-${iconSize / 2}px`,
              width: `${iconSize}px`,
              height: `${iconSize}px`,
            }}
            animate={{
              rotate: direction * 360,
            }}
            transition={{
              duration: speed,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <motion.div
              style={{
                width: '100%',
                height: '100%',
              }}
              animate={{
                rotate: direction * -360,
              }}
              transition={{
                duration: speed,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div
                style={{
                  transform: `rotate(${angle}deg) translateY(-${radius}px) rotate(-${angle}deg)`,
                }}
              >
                {child}
              </div>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}
