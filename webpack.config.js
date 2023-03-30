const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  plugins: [
    new CopyPlugin({
      patterns: [{ from: "public", to: "assets" }],
    }),
  ],

  mode: "none",
  entry: "./src/index.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
  },
  devtool: "eval-cheap-module-source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
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
