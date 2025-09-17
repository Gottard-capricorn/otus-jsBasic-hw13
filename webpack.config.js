const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",

  entry: "./src/script.js",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },

  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
};
