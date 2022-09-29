import { PluginAPI } from "@vue/cli-service";
const { watch } = require("chokidar");

const WATCHED_FILES = [
  ".env",
  ".env.local",
  ".env.development",
  ".env.development.local",
];

module.exports = (api: PluginAPI) => {
  api.configureDevServer((app, server) => {
    watch(WATCHED_FILES).on("change", (path) => {
      if (WATCHED_FILES.includes(path)) {
        server.invalidate();
      }
    });
  });
};
