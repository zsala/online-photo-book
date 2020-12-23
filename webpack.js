const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  target: 'node',
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "[name].generator.js",
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    historyApiFallback: true,
    stats: "minimal"
  },
  optimization: {
    minimize: false // TODO: should depend on environment variables!!!
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};