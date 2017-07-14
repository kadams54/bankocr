const ocr = require('./ocr');

module.exports = {
  parse: function(accountString) {
    const NUM_DIGITS = 9;
    // Split the account into its top, middle, and bottom lines.
    let lines = accountString.split('\n');
    // Convert each line to an array of characters, since strings are immutable
    // and we'll be chomping this lines in a moment.
    lines = lines.map(line => line.split(''));
    // Assemble the first three characters of each line into an individual
    // digit.
    let account = '';
    for (let i = 0; i < NUM_DIGITS; i++) {
      // Chomp the first three characters from each line and re-assemble as a
      // string.
      const digit =
        lines[0].splice(0, 3).join('') +
        lines[1].splice(0, 3).join('') +
        lines[2].splice(0, 3).join('');
      // OCR the digit and add it to the account number.
      account += ocr.ocr(digit);
    }
    return account;
  }
};
