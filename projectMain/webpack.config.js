const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("./package.json").dependencies;
require('dotenv').config({ path: './.env' });

module.exports = {
  mode: "development",
  devServer: {
    port: process.env.PORT || 4001
  },
  resolve: {
    extensions: [".css", ".scss", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              url: {
                filter: (url) => {
                  if (url.startsWith("data:")) {
                    return false;
                  }
                  return true;
                },
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.jsx?$/,
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
    new ModuleFederationPlugin({
      name: "MICRO",
      remotes: {
        PROJECT_CHILD: "PROJECT_CHILD@http://localhost:4000/remoteEntry.js",
      },
    }),
  ],
};