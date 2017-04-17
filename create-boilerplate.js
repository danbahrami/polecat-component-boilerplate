var paramCase = require('param-case');
var pascalCase = require('pascal-case');
var getTemplatePaths = require('./utilities/get-template-paths');
var printOutput = require('./utilities/print-output');
var createFiles = require('./utilities/create-files');

function createBoilerplate(command, program) {
  /*
   * Store program details
   */
  var path = program.args[0];
  var componentName = pascalCase(program.args[1]);
  var fileName = paramCase(program.args[1]);
  var connected = program.connected;
  var styled = program.styled;

  /*
   * Collate templates
   */
  var templatPathMap = getTemplatePaths(fileName, command, connected, styled);

  /*
   * Create boilerplate
   */
  createFiles(path, templatPathMap, componentName)
    .then(function(files) {
      printOutput(path, componentName, files);
    });
}

module.exports = createBoilerplate;
