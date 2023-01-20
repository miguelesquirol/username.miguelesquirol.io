/*
 * @title Config
 */

// Paths
export const paths = {
  src: './src',
  dest: './docs',
  deploy: './docs/**/*',
  styles: {
    src: 'src/styles/main.scss',
    watch: 'src/styles/**/*.scss',
    modules: 'src/modules/**/*.scss',
    dest: 'docs/css',
    lint: 'src/styles/**/*.s+(a|c)ss'
  },
  scripts: {
    src: './src/scripts/app.js',
    watch: 'src/scripts/**/*.js',
    modules: 'src/modules/**/*.js',
    dest: 'docs/js',
  },
  templates: {
    src: 'src/templates/pages/*.{twig,html}',
    watch: 'src/templates/**/*.{twig,html}',
    modules: 'src/modules/**/*.{twig,html}',
    dest: 'docs/'
  },
  assets: {
    src: 'src/assets/**/*',
    dest: 'docs/assets'
  },
  copy: {
    src: 'src/robots.txt',
    dest: 'docs/'
  }
};
