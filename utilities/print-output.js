var paramCase = require('param-case');

function printOutput(path, componentName, files) {
  var fileName = paramCase(componentName);

  console.log('Template created for ' + componentName + ':');
  console.log(path);
  console.log('├── ...');
  console.log('├── ' + fileName);

  files.sort().map(function (file, index) {
    var structure = (index === files.length -1) ? '│   └── ' : '│   ├── ';
    console.log(structure + file);
  });

  console.log('└── ...');
}

module.exports = printOutput;
