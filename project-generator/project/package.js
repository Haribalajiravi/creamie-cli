const latestVersion = require('latest-version');

const package = {
  name: 'creamie-project',
  version: '0.0.0',
  private: true,
  scripts: {
    build: 'creamie-watch -i && webpack --mode=production',
    'build:dev': 'creamie-watch -i && webpack --mode=development',
    development: 'webpack-dev-server',
    start:
      'creamie-watch -i && webpack --mode=production && pm2 start',
  },
};

const dependencies = ['@creamie/core', 'pm2'];

const devDependencies = [
  '@creamie/watcher',
  'express',
  '@babel/core',
  '@babel/preset-env',
  'babel-loader',
  'node-watch',
  'copy-webpack-plugin',
  'css-loader',
  'file-loader',
  'html-loader',
  'html-webpack-plugin',
  'mini-css-extract-plugin',
  'node-sass',
  'sass-loader',
  'style-loader',
  'url-loader',
  'webpack',
  'webpack-cli',
  'webpack-dev-server',
];

const getLatestVersion = async (dependencies) => {
  const deps = {};
  for (let i = 0; i < dependencies.length; i++) {
    deps[dependencies[i]] = `^${await latestVersion(
      dependencies[i]
    )}`;
  }
  return deps;
};

module.exports = {
  package,
  dependencies,
  devDependencies,
  getLatestVersion,
};
