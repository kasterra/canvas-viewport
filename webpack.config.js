const path = require("path");

module.exports = {
  mode: "development",
  entry: "./index.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "static"),
    clean: true,
  },
  devServer: {
    port: 9000,
  },
};
