const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { VueLoaderPlugin } = require("vue-loader");
const path = require("path");

module.exports = {
  output: {
    publicPath: "http://localhost:8080/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".vue", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 8080,
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, "src/public"),
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.tsx?$/,
        use: [
          "babel-loader",
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
              appendTsSuffixTo: ["\\.vue$"],
              happyPackMode: true,
            },
          },
        ],
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },

  plugins: [
    new VueLoaderPlugin(),
    new ModuleFederationPlugin({
      name: "remote",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        "./store": "./src/store",
        "./Header": "./src/components/Header",
        "./Book": "./src/components/Book",
        "./BookSearch": "./src/components/BookSearch",
        "./VanillaHeader": "./src/components/VanillaHeader",
        "./VanillaBook": "./src/components/VanillaBook.ts",
        "./VanillaBookSearch": "./src/components/VanillaBookSearch.ts",
      },
      shared: require("./package.json").dependencies,
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
};
