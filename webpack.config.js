const webpack = require('webpack');
const path = require('path');
const { spawn } = require('child_process');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public/'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
        {
            test: /\.(js|jsx)$/,
            use: 'babel-loader',
            exclude: /node_modules/
        },
        {
            test: /\.scss$/,
            use: [
              'style-loader',
              'css-loader',
              'sass-loader',
            ]
        },
        { 
            test: /\.[ot]tf$/, 
            loader: "url-loader?limit=10000&mimetype=application/octet-stream"
        },
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ]
  },
  devServer: {
    hot: true,
    contentBase: path.join(__dirname, './public/bundle.js'),
    before() {
      spawn(
        'electron',
        ['./src/electron-starter.js'],
        { shell: true, env: process.env, stdio: 'inherit' }
      )
      .on('close', code => process.exit(0))
      .on('error', spawnError => console.error(spawnError));
    }
  },
  devtool: "eval-source-map",
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
  ]
}

module.exports = config;