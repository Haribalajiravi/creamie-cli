const rimraf = require("rimraf");
const Utilities = require('./Utilities');

/**
 * Component generation imports
 */
const Js = require('../component-generator/component/component-js');
const Html = require('../component-generator/component/component-html');
const Css = require('../component-generator/component/component-css');
const Config = require('../component-generator/component/component-config');

/**
 * Component generation test cases
 */
describe('Component generation', () => {
    /**
     * Checking wheather any errors occurs while generating component
     */
    it('Component creation with no exceptions.', () => {
        Utilities.createFolder();
        [Js, Html, Css, Config].forEach(fileObj => {
            try {
                Utilities.createFile(fileObj.get(Utilities.componentName));
            } catch (err) {
                throw err;
            }
        });
    });

    /**
     * Checking wheather any errors occurs while create already existing component
     */
    it('Component creation with already existing component name.', () => {
        [Js, Html, Css, Config].forEach(fileObj => {
            try {
                Utilities.createFile(fileObj.get(Utilities.componentName));
            } catch (err) {
                throw err;
            }
        });
    });

    /**
     * Checking wheather any errors occurs while force replacing the existing component over new
     */
    it('Component creation with `-r` option.', () => {
        [Js, Html, Css, Config].forEach(fileObj => {
            try {
                Utilities.createFile(fileObj.get(Utilities.componentName), '-r');
            } catch (err) {
                throw err;
            }
        });
    });

    it('Check if index.js has duplicate imports.', () => {
        try {
            let path = 'src/index.js';
            if (!Utilities.hasEjsImportDuplicates(path)) {
                throw `Duplicate imports found! in '${path}'`;
            }
        } catch (err) {
            throw err;
        }
    });

    after(() => {
        /* Flushing all junk data before testcase */
        rimraf(`./${Utilities.baseTestFolder}`, function () { console.log(`\tAll the testing junks removed! \n\tTesting done. \n`); });
    });
});