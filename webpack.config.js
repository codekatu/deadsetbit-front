const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  plugins: [
    new CopyPlugin({
      patterns: [
        // { from: "public/assets", to: "assets" },
        // { from: "public/robots.txt", to: "robots.txt" },
        // { from: "public/favicons", to: "favicons" },
        {
          from: "public",
          globOptions: {
            ignore: ["**/template.html"],
          },

          to: "",
        },
      ],
    }),

    new HtmlWebpackPlugin({
      hash: true,
      template: "./public/template.html",
      filename: "index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
  ],

  mode: "none",
  entry: "./src/index.js",
  output: {
    path: __dirname + "/dist",
    // filename: "bundle.js",
    filename: `[name].[contenthash].js`,
    clean: true,
  },
  devtool: "eval-cheap-module-source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // use: ["style-loader", "css-loader"],
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },

      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
