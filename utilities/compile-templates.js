var getTemplate = require('./get-template');
var replaceTemplateVariables = require('./replace-template-variables');

function compileTemplates(templatePathMap, componentName) {
  var fileNames = Object.keys(templatePathMap);

  var templates = fileNames.map(function (fileName) {
    return getTemplate(templatePathMap[fileName])
      .then(function (template) {
        return replaceTemplateVariables(template, componentName);
      });
  });

  return Promise.all(templates)
    .then(function (data) {
      return data.reduce(function (acc, val, index) {
        acc[fileNames[index]] = val;

        return acc;
      }, {});
    });
}

module.exports = compileTemplates;
