import { defineConfig } from "cypress";
import webpackConfig from "./webpack.config";

export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
      webpackConfig,
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
        baseUrl: 'http://localhost:3001'
    },
  },
});
