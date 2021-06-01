#!/usr/bin/env node

let action = process.argv[2];
let name = process.argv[3];
let option = process.argv[4];

const project = require('./project-generator');
const component = require('./component-generator');

const help = () => {
  console.log(
    'creamie create <project-name> (A new project will generate)'
  );
  console.log(
    'creamie component <component-name> (A new component will generate under `src` folder)'
  );
};

if (action) {
  switch (action) {
    case 'create':
      project(name);
      break;
    case 'component':
      component(name, option);
      break;
    case '-v':
    case '--version':
    case 'version':
      console.log(
        `creamie-cli v (${require('./package.json').version})`
      );
      break;
    case 'help':
    case '-h':
      help();
      break;
    default:
      console.log('No such action/option available.');
      help();
      break;
  }
} else {
  console.log(
    'ERROR! : Please specify `action` name to proceed futhur!'
  );
}
