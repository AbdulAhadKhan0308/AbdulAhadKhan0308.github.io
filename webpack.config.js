const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src', 'index.tsx'),

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
      // DISABLED THE FILE_LOADER
    //   {
    //     test: /\.(|png|svg)$/,
    //     loader: 'file-loader',
    //   },
    ],
  },
  output: {
    filename: 'script.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    //first priortiy is
    //looking through current directory's src
    //second priority is
    //looking through node_modules
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    //priority left to right
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.png', '.svg'],
  },
  watch: true,
};