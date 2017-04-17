var paramCase = require('param-case');

function printOutput(path, componentName, files) {
  var fileNames = Object.keys(files);

  console.log('Boilerplate created for ' + componentName + ':');
  console.log(path);
  console.log('├── ...');

  fileNames.sort().map(function (fileName, index) {
    var structure = (index === fileNames.length -1) ? '└── ' : '├── ';
    console.log(structure + fileName);
  });
}

module.exports = printOutput;
