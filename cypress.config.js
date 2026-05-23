const { defineConfig } = require('cypress')

module.exports = defineConfig({

  e2e: {

    baseUrl: 'https://example.com',

    video: false,

    screenshotOnRunFailure: false,

    setupNodeEvents(on, config) {

    },

  },

})
