import * as path from 'path';
import * as webpack from 'webpack';
import type * as webpackDevServer from 'webpack-dev-server';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import { merge } from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const devServerConfig: webpackDevServer.Configuration = {
  hot: true,
  open: true,
  port: 3000,
};

const developmentConfig: webpack.Configuration = {
  devServer: devServerConfig,
};

const productionConfig: webpack.Configuration = {
};

const commonConfig: webpack.Configuration = {
  entry: './src/app.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/app-[contenthash].js',
  },
  resolve: {
    extensions: [
      '.js',
      '.ts',
    ],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: 'body',
      minify: true,
    }),
  ],
  devServer: {
    open: true,
  },
};

const config = (env, argv) => {
  switch (argv.mode) {
    case 'development':
      return merge(commonConfig, developmentConfig);
    case 'production':
      return merge(commonConfig, productionConfig);
    default:
      throw new Error('No matching configuration was found!');
  }
};

export default config;
