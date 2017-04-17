var program = require('commander');

function init() {
  program
    .version('1.1.0')
    .usage('[options] <path> <name>')
    .action(function (path, name) {
      if (typeof path !== 'string' || typeof name !== 'string') {
        program.help();
      }
    })
    .option('-c, --connected', 'Add a Redux connector')
    .option('-s, --styled', 'Add an associated .scss file')
    .parse(process.argv);

  /*
   * Catch case of user typing in the command
   * with no trailing options or arguments.
   */
  if (process.argv.length <= 2) {
    program.help();
  }

  return program;
}

module.exports = init;