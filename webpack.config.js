const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = (_env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    mode: isProduction ? 'production' : 'development',
    entry: path.join(__dirname, 'src', 'index.tsx'),
    devtool: isProduction ? 'source-map' : 'eval-source-map',

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.json',
            },
          },
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            { loader: 'css-loader', options: { importLoaders: 1 } },
            'postcss-loader',
          ],
        },
      ],
    },
    output: {
      filename: isProduction ? 'js/[name].[contenthash:8].js' : 'js/[name].js',
      assetModuleFilename: isProduction
        ? 'assets/[name].[contenthash:8][ext]'
        : 'assets/[name][ext]',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
    resolve: {
      //first priortiy is
      //looking through current directory's src
      //second priority is
      //looking through node_modules
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      //priority left to right
      extensions: ['.tsx', '.ts', '.jsx', '.js'],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'index.html',
        inject: 'body',
        scriptLoading: 'blocking',
      }),
      new MiniCssExtractPlugin({
        filename: isProduction ? 'css/[name].[contenthash:8].css' : 'css/[name].css',
      }),
      new CopyWebpackPlugin({
        patterns: [{ from: 'img', to: 'img' }],
      }),
    ],
    optimization: {
      minimizer: ['...', new CssMinimizerPlugin()],
      // HtmlWebpackPlugin already minifies index.html. Webpack's own HTML pass
      // would also strip attribute quotes, which some link-preview crawlers
      // reading the og: tags handle poorly.
      minimizeOptions: { html: false },
    },
    devServer: {
      static: false,
      port: 8080,
    },
  };
};
