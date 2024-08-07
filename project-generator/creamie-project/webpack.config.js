const Path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const CreamieWatcher = require("@creamie/watcher");

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: Path.resolve(__dirname, "node_modules"),
        rules: [
          {
            use: [
              {
                loader: "babel-loader",
              },
            ],
          },
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8000, // Convert images < 8kb to base64 strings
              name: "assets/[name].[ext]",
            },
          },
        ],
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: Path.resolve(__dirname, "src/assets"), to: "assets" }],
    }),
  ],
  mode: process.env.NODE_ENV == "production" ? "production" : "development",
  output: {
    publicPath: "/",
  },
  devServer: {
    port: 8080,
    static: "./src/**/*",
    compress: true,
    historyApiFallback: true,
    onListening: function () {
      CreamieWatcher.watch();
    },
  },
};
