const fs = require('fs');

/**
 * Common util methods for testcases
 */
const Utilities = {
    baseTestFolder: 'test/test_junks',
    projectName: 'MyTestApp',
    isFileOrFolderExist: (path, callback) => {
        fs.exists(`./${Utilities.baseTestFolder}/${Utilities.projectName}/${path}`, (exists) => {
            callback(exists);
        });
    },
    componentName: 'task',
    createFolder: () => {
        let dir = `./${Utilities.baseTestFolder}/${Utilities.projectName}/src/${Utilities.componentName}`;
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }
    },
    createFile: (fileObject, option) => {
        let path = `./${Utilities.baseTestFolder}/${Utilities.projectName}/src/${Utilities.componentName}/${fileObject.filename}`;
        if (option != '-r' && fs.existsSync(path)) {
            console.log(`${path} already exists!`);
        } else {
            fs.writeFile(path, fileObject.content, function(err) {
                if (err) {
                    throw err;
                }
                try {
                    if (option == '-r' && fs.existsSync(path)) {
                        console.log(`${path} replaced!`);
                    } else {
                        console.log(`${path} created!`);
                    }
                } catch (err) {
                    throw err;
                }
            });
        }
    }
}

module.exports = Utilities;