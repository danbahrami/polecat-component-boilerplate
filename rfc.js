#!/usr/bin/env node
var program = require('commander');
var createBoilerplate = require('./create-boilerplate');

/*
 * Initialise the program
 */
program
  .version('1.0.0')
  .arguments('<path> <name>')
  .option('-c, --connected', 'Add a Redux connector')
  .option('-s, --styled', 'Add an associated .scss file')
  .parse(process.argv);

/*
 * Run the program
 */
createBoilerplate('rfc', program);
