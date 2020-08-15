const rimraf = require('rimraf');
const Utilities = require('./Utilities');
const ComponentGenerator = require('./../component-generator/index');
/**
 * Component generation test cases
 */
describe('Component generation', () => {
  /**
   * Checking wheather any errors occurs while generating component
   */
  it('Component creation with no exceptions.', () => {
    try {
      ComponentGenerator(
        Utilities.componentName,
        undefined,
        Utilities.path(),
        Utilities.importPath()
      );
    } catch (error) {
      throw error;
    }
  });

  /**
   * Checking wheather any errors occurs while create already existing component
   */
  it('Component creation with already existing component name.', () => {
    try {
      ComponentGenerator(
        Utilities.componentName,
        undefined,
        Utilities.path(),
        Utilities.importPath()
      );
    } catch (error) {
      throw error;
    }
  });

  /**
   * Checking wheather any errors occurs while force replacing the existing component over new
   */
  it('Component creation with `-r` option.', () => {
    try {
      ComponentGenerator(
        Utilities.componentName,
        '-r',
        Utilities.path(),
        Utilities.importPath()
      );
    } catch (error) {
      throw error;
    }
  });

  after(() => {
    /* Flushing all junk data before testcase */
    rimraf(`./${Utilities.baseTestFolder}`, function () {
      console.log(
        `\tAll the testing junks removed! \n\tTesting done. \n`
      );
    });
  });
});
