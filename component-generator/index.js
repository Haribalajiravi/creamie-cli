const fs = require('fs');
const Utils = require('./../utils/Utils');
const Js = require('./component/component-js');
const Html = require('./component/component-html');
const Css = require('./component/component-css');
const Config = require('./component/component-config');
const ComponentGenerator = require('./component-generator');

/**
 * To Generate component files
 * @param {string} name
 * @param {string} option
 */
const componentGenerator = (name, option, path, importPath) => {
  new ComponentGenerator(
    name,
    option,
    [Js, Html, Css, Config],
    path
  ).start();
  /**
   * Import components to index.js
   */
  let componentPath = `./${name}/${name}-component`;
  let finalImportPath = importPath ? importPath : 'src/index.js';
  fs.readFile(finalImportPath, function (err, data) {
    if (err) throw err;
    if (
      !data.includes(Utils.capitalize(name)) &&
      !data.includes(componentPath)
    ) {
      fs.appendFile(
        finalImportPath,
        `\r\nimport ${Utils.capitalize(
          name
        )} from '${componentPath}';`,
        function (err) {
          if (err) throw err;
          console.log(`index.js modified!`);
          console.log(`${componentPath} imported!`);
        }
      );
    }
  });
};

module.exports = componentGenerator;
