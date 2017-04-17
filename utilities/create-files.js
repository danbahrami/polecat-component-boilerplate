var fsp = require('fs-promise');
var compileTemplates = require('./compile-templates');

function createRootDirectory(path, contentPathMap) {
  return fsp.mkdirs(path)
    .then(function () {
      return contentPathMap;
    });
}

function writeFiles(path, contentPathMap) {
  var fileNames = Object.keys(contentPathMap);

  var writes = fileNames.map(function (fileName) {
    var fullPath = path + '/' + fileName;

    if (!fsp.existsSync(fullPath)) {
      return fsp.writeFile(fullPath, contentPathMap[fileName]);
    } else {
      contentPathMap[fileName] = null;
    }
  });

  return Promise.all(writes)
    .then(function () {
      return contentPathMap;
    });
};

function createFiles(path, templatePathMap, componentName) {
  var fileNames = Object.keys(templatePathMap);

  return compileTemplates(templatePathMap, componentName)
    .then(function (contentPathMap) {
      return createRootDirectory(path, contentPathMap);
    })
    .then(function (contentPathMap) {
      return writeFiles(path, contentPathMap);
    });
}

module.exports = createFiles;
