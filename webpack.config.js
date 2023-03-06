
import { resolve } from 'path';
import { ProvidePlugin } from 'webpack';

module.exports = {
  mode: "production",
  entry: "./lib/main.js",
  devtool: "source-map",
  output: {
    filename: 'dcc-sdk.min.js',
    path: resolve(__dirname, 'dist'),
    library: 'DCC',
    libraryTarget: 'umd',
  },
  target: 'web',

  optimization: {
    minimize: true
  },
  node: {
    net: 'empty',
  },
  plugins: [
    new ProvidePlugin({
      process: 'process/browser'
    })
  ],
};