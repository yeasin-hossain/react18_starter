/* craco.config.js */
const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      '@view': path.resolve(__dirname, 'src/view'),
      '@So_on': path.resolve(__dirname, 'src/so_on'),
    }
  },
};