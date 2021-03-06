const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const webpack = require("webpack");

module.exports = {
  // context: path.resolve(__dirname, "src"),
  entry: path.resolve(__dirname, "./src/js/index.js"),
  mode: "development",
  // entry: "./js/index.js",
  output: {
    path: path.resolve(__dirname, "dist/"),
    filename: "[name].bundle.js",
    // publicPath: "/dist/",
  },
  // devServer: {
  //   // historyApiFallback: true,
  //   // contentBase: path.resolve(__dirname, "src"),
  //   contentBase: "dist",
  //   // open: true,
  //   // compress: true,
  //   // hot: true,
  //   port: 4200,
  // },
  plugins: [
    new HtmlWebpackPlugin({
      // template: "./src/index.html",
      template: path.resolve(__dirname, "./src/index.html"),
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      // filename: filename("css"),
    }),
    // new webpack.HotModuleReplacementPlugin(),
  ],
};
