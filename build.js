const { build } = require('esbuild');

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
}).catch(() => process.exit(1));
