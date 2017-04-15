var fsp = require('fs-promise');
var paramCase = require('param-case');
var getTemplate = require('./get-template');
var replaceTemplateVariables = require('./replace-template-variables');

function writeFiles(path, fileNameMap) {
  var fileNames = Object.keys(fileNameMap);

  var writes = fileNames.map(function (fileName) {
    return fsp.writeFile(path + '/' + fileName, fileNameMap[fileName]);
  });

  return Promise.all(writes);
};

function createFiles(path, templatePathMap, componentName) {
  var fileName = paramCase(componentName);
  var fileNames = Object.keys(templatePathMap);

  var templates = fileNames.map(function (fileName) {
    return getTemplate(templatePathMap[fileName])
      .then(function (template) {
        return replaceTemplateVariables(template, componentName, fileName);
      });
  });

  return Promise.all(templates)
    .then(function (data) {
      return data.reduce(function (acc, val, index) {
        acc[fileNames[index]] = val;

        return acc;
      }, {})
    })
    .then(function (data) {
      var fullPath = path + '/' + fileName;
      return fsp.mkdirs(fullPath)
        .then(function () {
          return writeFiles(fullPath, data);
        })
        .then(function () {
          return data;
        });
    });
}

module.exports = createFiles;
