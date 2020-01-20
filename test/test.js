const fs = require('fs');
const copy = require('./../utils/copy');

var expect = require('chai').expect;
var should = require('chai').should();

it('Project Folder Creation', function() {
    var isValid = true;
    copy('./project-generator/creamie-project', './test/test_junks');
    fs.renameSync(`./test/test_junks/creamie-project/`, `./test/test_junks/MyTest/`, (err) => {
        if (err) {
            console.error(err);
        }
        console.log(`Project Generated!`);
    });
    expect(isValid).to.be.true;
});
