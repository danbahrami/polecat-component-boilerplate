var paramCase = require('param-case');

function ReplaceTemplateVariables(template, componentName) {
  var replacementMap = {
    '$NAME$': componentName,
    '$FILE_NAME$': paramCase(componentName)
  };

  return template.replace(/\$NAME\$|\$FILE_NAME\$/gi, function (match) {
    return replacementMap[match];
  });
}

module.exports = ReplaceTemplateVariables;
