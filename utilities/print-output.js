var chalk = require('chalk');

var dim = chalk.dim;
var green = chalk.green;

function printOutput(path, componentName, files, pathExists) {
  var fileNames = Object.keys(files);

  console.log();
  console.log(green('Boilerplate created for ' + componentName + ':'));
  console.log();
  console.log(pathExists ? dim(path) : green(path));
  console.log(dim('├── ...'));

  fileNames.sort().map(function (fileName, index) {
    var structure = (index === fileNames.length -1) ? '└── ' : '├── ';

    if (files[fileName] === null) {
      console.log(dim(structure + fileName));
    } else {
      console.log(dim(structure) + green(fileName));
    }
  });

  console.log();
}

module.exports = printOutput;
