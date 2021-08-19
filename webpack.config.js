const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development", // 环境模式，区分为开发环境和生成环境
  entry: {
    index: `${__dirname}/src/index.tsx`, // 入口文件，单页面时可以直接配置string
  },
  output: {
    path: path.resolve(__dirname, "./dist/"), // 打包文件的生成目录
    filename: "[name].[contenthash].js", // 打包后的文件命名，由源文件名和生成的hash组合而成
  },
  module: {
    rules: [
      // 根据规则给不同的文件分配loader
      {
        test: /\.css$/, //文件后缀匹配规则
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
      },
    ],
  }, // loader配置
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      "@": path.resolve(__dirname, "../src"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html", // 模板目录
      favicon: path.join(__dirname, "./public/logo.png"),
    }),
  ], // 插件配置
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    open: true,
    historyApiFallback: true,
  },
};
