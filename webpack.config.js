const { CheckerPlugin } = require('awesome-typescript-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { optimize } = require('webpack');
const { join } = require('path');
let prodPlugins = [];
if (process.env.NODE_ENV === 'production') {
  prodPlugins.push(
    new optimize.AggressiveMergingPlugin()
  );
}
module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    contentscript: join(__dirname, 'src/contentscript/contentscript.ts'),
    background: join(__dirname, 'src/background/background.ts'),
    productivity: join(__dirname, 'src/assets/productivity.scss')
  },
  output: {
    path: join(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.ts?$/,
        use: 'awesome-typescript-loader?{configFileName: "tsconfig.json"}',
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new CheckerPlugin(),
    ...prodPlugins,
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css',
      chunkFilename: 'assets/[id].css',
    }),
  ],
  resolve: {
    extensions: ['.ts', '.js'],
  }
};