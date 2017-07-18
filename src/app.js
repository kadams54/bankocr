const fs = require('fs');
const account = require('./account');

module.exports = {
  run: function(inputFile) {
    // Read in all the lines from the specified file.
    const lines = fs.readFileSync(inputFile).toString().split('\n');
    // Every four lines in the file represents one account string.
    const accountStrs = [];
    while (lines.length > 3) {
      accountStrs.push(lines.splice(0, 4).join('\n'));
    }
    // Parse each accountString into an OCR'd account number.
    return accountStrs.map(account.parse);
  }
};
