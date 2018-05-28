var path = require('path');
let webpack = require("webpack");
const OUTPUT_PATH = path.resolve(__dirname, "dist");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry:  __dirname + "/src/index.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  devtool: "source-map",
  target: "web",
  mode: "production",
  module: {
    rules: [
      {
  	    test: /\.js$/,
  	    loader: 'babel-loader',
        // query: {
        //               plugins: ['transform-runtime'],
        //               presets: ['es2015', 'react', 'stage-0'] // <--- here
        //           },
        // options: {
        //   "presets": ["es2015", "stage-0", "react"]
        // },
  	    exclude: /node_modules/
  	  },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              plugins: () => [require('autoprefixer')],
              modules: true,
              importLoaders: 1,
              localIdentName: "[path][name]__[local]--[hash:base64:5]",
              sourceMap: true
            }
          },
          "postcss-loader"
        ]
      }
    ]
  },
  output: {
    path: OUTPUT_PATH,
    publicPath: "/",
    filename: "bundle.js"
    // filename: "[name].js"
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.css"
    })
  ]
};