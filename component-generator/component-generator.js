const fs = require('fs');

class ComponentGenerator {
    constructor(name, option, fileObjArr, path) {
        this.name = name;
        this.fileObjArr = fileObjArr;
        this.option = option;
        this.path = (path) ? path : `./src/${this.name}`;
    }

    createFolder() {
        let dir = this.path;
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }
    }

    createFile(fileObject) {
        let path = `${this.path}/${fileObject.filename}`;
        let _this = this;
        if (_this.option != '-r' && fs.existsSync(path)) {
            console.log(`${path} already exists!`);
        } else {
            fs.writeFile(path, fileObject.content, function (err) {
                if (err) {
                    return console.log(err);
                }
                if (_this.option == '-r' && fs.existsSync(path)) {
                    console.log(`${path} replaced!`);
                } else {
                    console.log(`${path} created!`);
                }
            });
        }
    }

    start() {
        this.createFolder();
        let _this = this;
        this.fileObjArr.forEach(fileObj => {
            this.createFile(fileObj.get(_this.name));
        });
    }

}


module.exports = ComponentGenerator;