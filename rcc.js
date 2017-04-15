#!/usr/bin/env node
var program = require('commander');

program
  .version('0.0.1')
	.arguments('<path> <name>')
	.option('-c, --connected', 'Add a Redux connector')
	.option('-s, --styled', 'Add an associated .scss file')
  .parse(process.argv);

var path = program.args[0];
var name = program.args[1];
var connected = program.connected;
var styled = program.styled;

console.log('Files created:')
console.log(path);
console.log('├── ...');
console.log('├── ' + name);
console.log('│   ├── index.js');
console.log('│   ├── ' + name + '-component.js');
console.log('│   └── ' + name + '-component-test.js')
if (connected) {
	console.log('│   └── ' + name + '-connector.js');
	console.log('│   └── ' + name + '-connector-test.js');
}
if (styled) {
	console.log('│   └── ' + name + '-style.scss');
}
console.log('└── ...');
