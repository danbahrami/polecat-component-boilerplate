var fsp = require('fs-promise');

function getTemplate(path) {
  return fsp.readFile(__dirname + '/../templates/' + path, {encoding:'utf8'});
}

module.exports = getTemplate;
