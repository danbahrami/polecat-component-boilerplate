#!/usr/bin/env node
var program = require('commander');
var paramCase = require('param-case');
var pascalCase = require('pascal-case');

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

console.log('Template created for ' + componentName + ':');
console.log(path);
console.log('├── ...');
console.log('├── ' + fileName);
console.log('│   ├── index.js');
console.log('│   ├── ' + fileName + '-component.js');
console.log('│   └── ' + fileName + '-component-test.js')
if (connected) {
	console.log('│   └── ' + fileName + '-connector.js');
	console.log('│   └── ' + fileName + '-connector-test.js');
}
if (styled) {
	console.log('│   └── ' + fileName + '-style.scss');
}
console.log('└── ...');
