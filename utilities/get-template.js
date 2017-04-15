var fsp = require('fs-promise');

module.exports = function (path) {
  return fsp.readFile(__dirname + '/../templates/' + path, {encoding:'utf8'});
}
