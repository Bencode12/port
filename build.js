const { build } = require('esbuild');
const path = require('path');

Promise.all([
  build({
    entryPoints: ['src/MathVisualization.jsx'],
    bundle: true,
    outfile: 'dist/math-viz.js',
    minify: true,
    sourcemap: false,
    target: ['es2015'],
    loader: { '.jsx': 'jsx' },
    define: {
      'process.env.NODE_ENV': '"production"'
    },
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }),
  build({
    entryPoints: ['src/OrbitingCircles.jsx'],
    bundle: true,
    outfile: 'dist/orbiting-circles.js',
    minify: true,
    sourcemap: false,
    target: ['es2015'],
    loader: { '.jsx': 'jsx' },
    define: {
      'process.env.NODE_ENV': '"production"'
    },
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  })
]).catch(() => process.exit(1));
