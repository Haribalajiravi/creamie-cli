const fs = require('fs');
const {
  package,
  dependencies,
  devDependencies,
  getLatestVersion,
} = require('./project/package');
const copy = require('./../utils/copy');

const Reset = '\x1b[0m';
const FgRed = '\x1b[31m';
const FgGreen = '\x1b[32m';
const FgYellow = '\x1b[33m';
const FgBlue = '\x1b[34m';
const FgMagenta = '\x1b[35m';

/**
 * Below method will initiate process of creating Creamie project for developers
 * @param {string} name
 */
const projectGenerator = (name) => {
  let title = `        -----------------------
                 CREAMIE
         -----------------------
        🔥  A JavaScript Framework 🔥`;
  console.log(title);
  console.log(`\nCreamie started creating '${name}' project..\n`);

  console.log(FgGreen, '');
  console.log(FgGreen, `Started generating...`);
  console.log(FgBlue, '');

  copy(`${__dirname}/creamie-project`, './');

  fs.renameSync(`creamie-project/`, `${name}/`, (err) => {
    if (err) {
      console.error(FgRed, err);
    }
    console.log(FgGreen, `Project Generated!`);
  });
  /**
   * Overiding package.json with our default content
   */
  (async () => {
    /**
     * Creating default package.json with default settings and dependencies
     */
    package.name = name;
    package.dependencies = await getLatestVersion(dependencies);
    package.devDependencies = await getLatestVersion(devDependencies);
    await fs.writeFile(
      `${name}/package.json`,
      JSON.stringify(package, null, 4),
      (err) => {
        if (err) {
          console.error(FgRed, err);
        } else {
          console.log(FgYellow, '\npackage.json initiated✔️');

          console.log(
            FgYellow,
            '\nNOTE: Use below mandatory commands! else your project won`t run!'
          );
          console.log(Reset, `Use 'cd ${name}'`);
          console.log(
            Reset,
            `And 'npm init' command to define your project!`
          );
          console.log(
            `And 'npm install' to install all the dependencies of your project! \n`
          );

          console.log(FgMagenta, `Now project is ready to use!`);
          console.log(Reset, '');
        }
      }
    );
  })();
};

module.exports = projectGenerator;
