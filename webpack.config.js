const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: "public",
          globOptions: {
            ignore: [
              "**/template.html",
              "**/empathic-building",
              "**/privacy-policy",
            ],
          },

          to: "",
        },
      ],
    }),

    new HtmlWebpackPlugin({
      hash: true,
      template: "./public/template.html",
      filename: "index.html",
      chunks: ["index"],
    }),
    // new HtmlWebpackPlugin({
    //   hash: true,
    //   template: "./src/pages/empathic-building/template.html",
    //   filename: "empathic-building/index.html",
    //   chunks: ["empathicBuilding"],
    // }),
    new HtmlWebpackPlugin({
      hash: true,
      template: "./src/pages/privacy-policy/template.html",
      filename: "privacy-policy/index.html",
      chunks: ["privacyPolicy"],
    }),

    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
  ],

  mode: "none",
  entry: {
    index: "./src/index.js",
    // empathicBuilding: "./src/pages/empathic-building/index.js",
    privacyPolicy: "./src/pages/privacy-policy/index.js",
  },
  output: {
    path: __dirname + "/dist",
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
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      { test: /\.md$/, use: "raw-loader" },

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
