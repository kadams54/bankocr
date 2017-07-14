var program = require('commander');
var app = require('./app');

program
  .version('1.0.0')
  .option(
    '-i, --input <path>',
    'The input file with the scanned account numbers.'
  )
  .option(
    '-o, --output <path>',
    'The output file for the account numbers post-OCR.'
  )
  .parse(process.argv);

process.exit(app.run(program.input, program.output));
