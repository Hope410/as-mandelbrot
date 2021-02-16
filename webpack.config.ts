import * as path from "path";
import * as webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

const config: webpack.Configuration = {
  entry: "./src/index.ts",
  mode: "development",
  devtool: "source-map",
  watchOptions: {
    ignored: ['node_modules', 'assembly/wasm', 'asswmbly/types'],
  },
  devServer: {
    contentBase: path.join(__dirname, "."),
    compress: true,
    port: 3000,
  },
  output: {
    library: "main",
    libraryTarget: "umd",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".wasm"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
      },
      {
        test: /\.wasm$/,
        loader: "wasm-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "AssemblyScript Mandlelbrot demo",
    })
  ],
};


export default config;
