const fs = require('fs');
const Utilities = require('./Utilities');
/**
 * Project generation imports
 */
const package = require('../project-generator/project/package');
const copy = require('../utils/copy');

/**
 * Project creation test cases to check all files created properly
 */
describe('Project generation', () => {

    before(() => {
        /* Create test_junks folder before all testcases */
        if (!fs.existsSync(`./${Utilities.baseTestFolder}`)) {
            fs.mkdirSync(`./${Utilities.baseTestFolder}`);
        }
    });

    /**
     * Checking wheather any errors occurs while generating project
     */
    it('Project creation with no exceptions.', () => {
        copy('./project-generator/creamie-project', `./${Utilities.baseTestFolder}`);
        fs.renameSync(`./${Utilities.baseTestFolder}/creamie-project/`, `./${Utilities.baseTestFolder}/${Utilities.projectName}/`, (err) => {
            if (err) {
                isValid = false;
                throw err;
            }
        });
        package.name = Utilities.projectName;
        fs.writeFile(`./${Utilities.baseTestFolder}/${Utilities.projectName}/package.json`, JSON.stringify(package, null, 4), (err) => {
            if (err) {
                throw err;
            }
        });
    });

    /**
     * Checking all the files of project are properly created
     */
    it('All files and folders are created.', () => {
        [
            '.gitignore', 'ecosystem.config.js', 'server.js', 'webpack.config.js', 'package.json',
            'src',
            'src/index.html',
            'src/index.js',
            'src/app',
            'src/app/app-component.css',
            'src/app/app-component.html',
            'src/app/app-component.js',
            'src/app/app-config.js',
            'src/assets',
            'src/assets/cream.png',
            'src/styles',
            'src/styles/main.css',
        ].forEach((path) => {
            Utilities.isFileOrFolderExist(path, (isExist) => {
                if (!isExist) {
                    throw `${path} is not available!`;
                }
            });
        });
    });

    /**
     * Checking if any extra files created in project generation
     */
    it('No extra file(s) or folder(s) are created.', () => {
        [
            'src/boot.js',
            'dist',
            '*.logs'
        ].forEach((path) => {
            Utilities.isFileOrFolderExist(path, (isExist) => {
                if (isExist) {
                    isValid = false;
                    throw `${path} should not be available!`;
                }
            });
        });
    });

});