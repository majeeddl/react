const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    // contentBase: path.join(__dirname, "dist"),
    historyApiFallback: { index: "index.html" },
    hot: true,
    port: 9000,
  },
  mode: "development",
};
