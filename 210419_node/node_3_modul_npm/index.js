'use strict';

const chalk = require('chalk');
 
console.log(
    chalk.yellow('Das ist Gelb')
);
console.log(
    chalk.green('Das ist Grün')
);

console.log(
    chalk.bgWhite.black('Hervorgehoben')
);

console.log( `${chalk.red.bold(12)} multipliziert mit ${chalk.blue.bold(23)} ist ${chalk.magentaBright(23*12)}` );

