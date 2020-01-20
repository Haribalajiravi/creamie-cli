const fs = require('fs');
const copy = require('./../utils/copy');

var expect = require('chai').expect;
var should = require('chai').should();

it('Src Folder creation', function() {
    var isValid = true;
    copy('./project-generator/creamie-project', './test/test_junks');
    fs.renameSync(`./test/test_junks/creamie-project/`, `./test/test_junks/MyTest/`, (err) => {
        if (err) {
            console.error(FgRed, err);
        }
        console.log(FgGreen, `Project Generated!`);
    });
    expect(isValid).to.be.true;
});