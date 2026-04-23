import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

// Interactive Mathematical Visualization Component
const MathVisualization = () => {
  const [selectedViz, setSelectedViz] = useState('topology');
  const [animationFrame, setAnimationFrame] = useState(0);

  // Animation loop
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationFrame(prev => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const visualizations = {
    topology: {
      title: 'Algebraic Topology',
      description: 'Visualizing fundamental groups and homotopy',
      render: () => (
        <svg viewBox="0 0 400 300" className="math-viz-svg">
          {/* Torus representation */}
          <ellipse 
            cx="200" 
            cy="150" 
            rx="120" 
            ry="60" 
            fill="none" 
            stroke="#6b9eff" 
            strokeWidth="2"
            opacity="0.6"
          />
          <ellipse 
            cx="200" 
            cy="150" 
            rx="120" 
            ry="60" 
            fill="none" 
            stroke="#8bb4ff" 
            strokeWidth="2"
            transform={`rotate(${animationFrame * 0.5}, 200, 150)`}
            opacity="0.4"
          />
          <circle 
            cx={200 + 80 * Math.cos(animationFrame * Math.PI / 180)} 
            cy={150 + 40 * Math.sin(animationFrame * Math.PI / 180)} 
            r="8" 
            fill="#6b9eff"
            opacity="0.8"
          />
          <text x="200" y="280" textAnchor="middle" fill="#6b9eff" fontSize="14">
            π₁(S¹) ≅ ℤ
          </text>
        </svg>
      )
    },
    numberTheory: {
      title: 'Number Theory',
      description: 'Prime distribution and zeta function',
      render: () => (
        <svg viewBox="0 0 400 300" className="math-viz-svg">
          {/* Prime spiral visualization */}
          {[...Array(50)].map((_, i) => {
            const angle = i * 137.5;
            const radius = 5 * Math.sqrt(i + 1);
            const x = 200 + radius * Math.cos(angle * Math.PI / 180);
            const y = 150 + radius * Math.sin(angle * Math.PI / 180);
            const isAnimated = i < (animationFrame / 360) * 50;
            
            return (
              <circle
                key={i}
                cx={x}
                cy={y}
                r={isAnimated ? 3 : 0}
                fill={isAnimated ? '#6b9eff' : 'transparent'}
                opacity={isAnimated ? 0.7 : 0}
                style={{ transition: 'all 0.3s ease-out' }}
              />
            );
          })}
          <text x="200" y="280" textAnchor="middle" fill="#6b9eff" fontSize="14">
            ζ(s) = Σ n⁻ˢ
          </text>
        </svg>
      )
    },
    category: {
      title: 'Category Theory',
      description: 'Morphisms and commutative diagrams',
      render: () => (
        <svg viewBox="0 0 400 300" className="math-viz-svg">
          {/* Commutative diagram */}
          <circle cx="100" cy="100" r="30" fill="none" stroke="#6b9eff" strokeWidth="2" />
          <circle cx="300" cy="100" r="30" fill="none" stroke="#6b9eff" strokeWidth="2" />
          <circle cx="100" cy="220" r="30" fill="none" stroke="#6b9eff" strokeWidth="2" />
          <circle cx="300" cy="220" r="30" fill="none" stroke="#6b9eff" strokeWidth="2" />
          
          <text x="100" y="105" textAnchor="middle" fill="#fff" fontSize="12">A</text>
          <text x="300" y="105" textAnchor="middle" fill="#fff" fontSize="12">B</text>
          <text x="100" y="225" textAnchor="middle" fill="#fff" fontSize="12">C</text>
          <text x="300" y="225" textAnchor="middle" fill="#fff" fontSize="12">D</text>
          
          {/* Arrows with animation */}
          <line x1="130" y1="100" x2="270" y2="100" stroke="#8bb4ff" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
          <line x1="100" y1="130" x2="100" y2="190" stroke="#8bb4ff" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
          <line x1="300" y1="130" x2="300" y2="190" stroke="#8bb4ff" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
          <line x1="130" y1="220" x2="270" y2="220" stroke="#8bb4ff" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
          
          {/* Diagonal animated arrow */}
          <line 
            x1="125" 
            y1="125" 
            x2={125 + (animationFrame / 360) * 150} 
            y2={125 + (animationFrame / 360) * 95} 
            stroke="#6b9eff" 
            strokeWidth="2" 
            strokeDasharray="5,5"
            opacity="0.6"
          />
          
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#8bb4ff" />
            </marker>
          </defs>
          
          <text x="200" y="280" textAnchor="middle" fill="#6b9eff" fontSize="14">
            F: C → D
          </text>
        </svg>
      )
    }
  };

  return (
    <div className="math-visualization-container">
      <h3 style={{ color: '#6b9eff', marginBottom: '20px', fontSize: '1.3rem' }}>
        Interactive Mathematics
      </h3>
      
      <div className="viz-selector">
        {Object.keys(visualizations).map(key => (
          <button
            key={key}
            className={`viz-btn ${selectedViz === key ? 'active' : ''}`}
            onClick={() => setSelectedViz(key)}
          >
            {visualizations[key].title}
          </button>
        ))}
      </div>
      
      <div className="viz-display">
        {visualizations[selectedViz].render()}
        <p className="viz-description">
          {visualizations[selectedViz].description}
        </p>
      </div>
      
      <style>{`
        .math-visualization-container {
          margin: 40px 0;
          padding: 30px;
          background: rgba(20, 20, 30, 0.6);
          border: 1px solid rgba(107, 158, 255, 0.2);
          border-radius: 12px;
        }
        
        .viz-selector {
          display: flex;
          gap: 12px;
          margin-bottom: 24px;
          flex-wrap: wrap;
        }
        
        .viz-btn {
          background: rgba(107, 158, 255, 0.1);
          border: 1px solid rgba(107, 158, 255, 0.3);
          color: #6b9eff;
          padding: 10px 20px;
          border-radius: 8px;
          cursor: pointer;
          font-size: 0.9rem;
          font-weight: 500;
          transition: all 0.2s ease-out;
        }
        
        .viz-btn:hover {
          background: rgba(107, 158, 255, 0.2);
          border-color: rgba(107, 158, 255, 0.5);
        }
        
        .viz-btn.active {
          background: rgba(107, 158, 255, 0.3);
          border-color: #6b9eff;
          box-shadow: 0 0 20px rgba(107, 158, 255, 0.3);
        }
        
        .viz-display {
          background: rgba(10, 10, 15, 0.5);
          border-radius: 8px;
          padding: 20px;
          min-height: 320px;
        }
        
        .math-viz-svg {
          width: 100%;
          height: auto;
          max-height: 260px;
        }
        
        .viz-description {
          color: #b0b0b0;
          margin-top: 16px;
          font-size: 0.95rem;
          line-height: 1.6;
        }
      `}</style>
    </div>
  );
};

// Export for embedding
window.MathVisualization = MathVisualization;

// Auto-mount if container exists
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('math-viz-root');
  if (container) {
    const root = ReactDOM.createRoot(container);
    root.render(React.createElement(MathVisualization));
  }
});
