module.exports = function (template, componentName, fileName) {
  var replacementMap = {
    '$NAME$': componentName,
    '$FILE_NAME$': fileName
  };

  return template.replace(/\$NAME\$|\$FILE_NAME\$/gi, function (match) {
    return replacementMap[match];
  });
}
