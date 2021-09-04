const cssnano = require('cssnano')
const purgecss = require('@fullhuman/postcss-purgecss')
// postcss.config.js
module.exports = {
  plugins: [
    require('tailwindcss'),
    require('postcss-discard-comments'),
    require('postcss-discard-empty'),
    process.env.NODE_ENV === 'production' ? require('autoprefixer') : null,
    process.env.NODE_ENV === 'production'
      ? cssnano({ preset: 'default' })
      : null,
    purgecss({
      content: [
        './src/**/**/*.js',
        './src/*.html',
        './*.js'
      ],
    })
  ],
}
