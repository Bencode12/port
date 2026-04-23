const { build } = require('esbuild');

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
    }
  })
]).catch(() => process.exit(1));
