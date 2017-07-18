const ocr = require('./ocr');

function isValidChecksum(account) {
  // Split the string up, reverse it, and convert each digit to an integer.
  const d = account.split('').reverse().map(Number);
  // Caculate the sum of each digit when multiplied by its position.
  const sum =
    d[0] +
    2 * d[1] +
    3 * d[2] +
    4 * d[3] +
    5 * d[4] +
    6 * d[5] +
    7 * d[6] +
    8 * d[7] +
    9 * d[8];
  // A valid checksum will evenly divide by 11.
  return sum % 11 === 0;
}

function parse(accountString) {
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

module.exports = {
  parse: parse,
  isValidChecksum: isValidChecksum
};
