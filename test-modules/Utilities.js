const fs = require('fs');

/**
 * Common util methods for testcases
 */
const Utilities = {
  baseTestFolder: 'test/test_junks',
  projectName: 'MyTestApp',
  componentName: 'task',
  basePath: () =>
    `${Utilities.baseTestFolder}/${Utilities.projectName}/src`,
  path: () => `${Utilities.basePath()}/${Utilities.componentName}`,
  importPath: () => `${Utilities.basePath()}/index.js`,
  isFileOrFolderExist: (path, callback) => {
    fs.exists(
      `./${Utilities.baseTestFolder}/${Utilities.projectName}/${path}`,
      (exists) => {
        callback(exists);
      }
    );
  },
};

module.exports = Utilities;
