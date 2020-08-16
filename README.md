![creamie](https://raw.githubusercontent.com/Haribalajiravi/creamie-cli/master/creamie-title.png)

[![Build Status](https://travis-ci.org/Haribalajiravi/creamie-cli.svg?branch=master)](https://travis-ci.org/Haribalajiravi/creamie-cli) [![GitHub issues](https://img.shields.io/github/issues/Haribalajiravi/creamie-cli)](https://github.com/Haribalajiravi/creamie-cli/issues) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![Download](https://img.shields.io/npm/dt/@creamie/cli.svg)](https://npmcharts.com/compare/@creamie/cli?minimal=true) [![version](https://img.shields.io/npm/v/@creamie/cli.svg)](https://www.npmjs.com/package/@creamie/cli) [![Gitter](https://badges.gitter.im/creamie-cli/community.svg)](https://gitter.im/creamie-cli/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

[![Become a patreon](https://img.shields.io/badge/%20-Become%20a%20patreon%3F-%23555555?logo=patreon&style=for-the-badge)](https://www.patreon.com/haribalajiravi) [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/Haribalajiravi/creamie-cli)

Support through below platforms:

[![patreon](https://img.shields.io/badge/%20-Become%20a%20patreon%3F-%23555555?logo=patreon&style=for-the-badge)](https://www.patreon.com/haribalajiravi)

[![Buy me a coffee](https://cdn.buymeacoffee.com/buttons/default-orange.png)](https://www.buymeacoffee.com/7xcFqmn)

## Installation
Installing the below command will give you superpowers🔥 to control creamie project.

    npm install -g @creamie/cli

## Get Started!
By smashing the below command will generate a new creamie project where you can build your front-end palace.

    creamie create <app-name>

Don't forget to `cd <app-name>/`.
Follow CLI logs to get a clear picture of what to do!

When you have super control of creamie project why you need to create components manually, use below command

    creamie component <component-name>
You can also use '-r' option to create a new component over already existing component with same name.

    creamie component <component-name> -r

> Note: Above command will replace your component with same name which means your old code will be deleted!

## Application serving
Your application is filled with webpack fuel which will launch your rocket (application updates) towards the space (Browser). 

    npm run development
Whenever you have changes in your code. You don't need to save there and refresh your browser again. Webpack will do it for you. Before developing just ignite above command.

To generate compressed pack of web bundle. 

    npm run build

Your compressed web bundle will hides in 'dist/' folder.

*New for webpack ? [look out>>](https://webpack.js.org/concepts/configuration/)*
## Deployment
When you are finished with your development and your product is ready to rock-n-roll move application to your respective server.
Use `npm install` , so you'll never disappoint at your first deployment.
Once everything is set to go, `npm start` will start its deployment work.
Your production launch will be taking care by **[pm2](https://pm2.keymetrics.io/docs/usage/quick-start/)**.
Change the configuration based on your requirements in `ecosystem.config.js`.

*[look out>>](https://pm2.keymetrics.io/docs/usage/application-declaration/#javascript-format)*

## For more updates check out official docs below

**[https://creamie.io](https://creamie.io/)**

## Contributors
- [HBR](https://twitter.com/haribalaji_o_0)
- [Ahilesh](https://twitter.com/KumarAhilesh)

## Example
- [Checklist app](https://github.com/Haribalajiravi/creamie-checklist-example)

## Copyrights
(c) 2020, Haribalaji Raviprakash

