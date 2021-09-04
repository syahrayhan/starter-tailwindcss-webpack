module.exports = {
  purge: {
    mode: 'all',
    content: [
      './src/**/**/*.js',
      './src/*.html',
      './*.js'
    ],
    options: {
      keyframes: true,
    },
  },
  corePlugins: {
    float: false,
  },
  darkMode: false,
  theme: {
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
