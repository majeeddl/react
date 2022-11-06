const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "m3soyq",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
