var devPackage = {
  name: 'creamie-project',
  version: '0.0.0',
  private: true,
  scripts: {
    build: 'creamie-watch -i && webpack --mode=development',
    development: 'webpack-dev-server',
    start:
      'creamie-watch -i && webpack --mode=production && pm2 start',
  },
  dependencies: {
    '@creamie/core': 'latest',
    pm2: 'latest',
  },
  devDependencies: {},
};

devPackage.devDependencies['@creamie/watcher'] = 'latest';
devPackage.devDependencies['express'] = '^4.17.1';
devPackage.devDependencies['@babel/core'] = '^7.6.4';
devPackage.devDependencies['@babel/preset-env'] = '^7.6.3';
devPackage.devDependencies['babel-loader'] = '^8.0.6';
devPackage.devDependencies['node-watch'] = '^0.6.3';
devPackage.devDependencies['copy-webpack-plugin'] = '^5.0.5';
devPackage.devDependencies['css-loader'] = '^3.2.0';
devPackage.devDependencies['file-loader'] = '^4.2.0';
devPackage.devDependencies['html-loader'] = '^0.5.5';
devPackage.devDependencies['html-webpack-plugin'] = '^3.2.0';
devPackage.devDependencies['mini-css-extract-plugin'] = '^0.8.0';
devPackage.devDependencies['node-sass'] = '^4.13.0';
devPackage.devDependencies['sass-loader'] = '^8.0.0';
devPackage.devDependencies['style-loader'] = '^1.0.0';
devPackage.devDependencies['url-loader'] = '^2.2.0';
devPackage.devDependencies['webpack'] = '^4.41.2';
devPackage.devDependencies['webpack-cli'] = '^3.3.10';
devPackage.devDependencies['webpack-dev-server'] = '^3.9.0';

module.exports = devPackage;
