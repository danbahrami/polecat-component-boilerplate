#!/usr/bin/env node
var program = require('commander');
var paramCase = require('param-case');
var pascalCase = require('pascal-case');
var getFileList = require('./utilities/get-file-list');
var getTemplatePaths = require('./utilities/get-template-paths');
var printOutput = require('./utilities/print-output');
var createFiles = require('./utilities/create-files');

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
 * Store program details
 */
var command = program._name;
var path = program.args[0];
var componentName = pascalCase(program.args[1]);
var fileName = paramCase(program.args[1]);
var connected = program.connected;
var styled = program.styled;

/*
 * Compile templates
 */
var templatPathMap = getTemplatePaths(fileName, command, connected, styled);

/*
 * Create boilerplate
 */
createFiles(path, templatPathMap, componentName)
  .then(function(files) {
    printOutput(path, componentName, files);
  });
