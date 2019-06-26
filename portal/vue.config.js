const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  configureWebpack: {
    plugins: [
      CopyWebpackPlugin([
        { from: path.resolve(__dirname, "src/assets/system.js") }
      ]),
      new CleanWebpackPlugin(["dist"])
    ]
  },
  devServer: {
    contentBase: "./dist",
    historyApiFallback: true,
    watchOptions: { aggregateTimeout: 300, poll: 1000 },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization"
    },
    // Proxy config for development purposes. In production, you would configure you webserver to do something similar.
    proxy: {
      "/app5": {
        target: "http://localhost:9005",
        pathRewrite: { "^/app5": "" }
      }
    }
  }
};
