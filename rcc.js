#!/usr/bin/env node
var program = require('commander');
var paramCase = require('param-case');
var pascalCase = require('pascal-case');
var getFileList = require('./utilities/get-file-list');
var printOutput = require('./utilities/print-output');

program
  .version('0.0.1')
	.arguments('<path> <name>')
	.option('-c, --connected', 'Add a Redux connector')
	.option('-s, --styled', 'Add an associated .scss file')
  .parse(process.argv);

var path = program.args[0];
var componentName = pascalCase(program.args[1]);
var fileName = paramCase(program.args[1]);
var connected = program.connected;
var styled = program.styled;
var files = getFileList(fileName, connected, styled);

printOutput(path, componentName, files);
