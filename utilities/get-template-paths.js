module.exports = function (fileName, command, connected, styled) {
  var templatePaths = {};
  
  templatePaths['index.js'] = 'index.js';
  templatePaths[fileName + '-component.js'] = command + '/component.js';
  templatePaths[fileName + '-component-test.js'] = 'component-test.js';

  if (connected) {
    templatePaths['index.js'] = 'connected-index.js';
    templatePaths[fileName + '-connector.js'] = 'connector.js';
    templatePaths[fileName + '-connector-test.js'] = 'connector-test.js';
  }

  if (styled) {
    templatePaths[fileName + '-style.scss'] = 'style.scss';
    templatePaths[fileName + '-component.js'] = command + '/styled-component.js';
  }

  return templatePaths;
};
