const account = require('../src/account');

test('parses a string with each digit', () => {
  let accountStr =
    '    _  _     _  _  _  _  _ \n' +
    '  | _| _||_||_ |_   ||_||_|\n' +
    '  ||_  _|  | _||_|  ||_| _|';
  expect(account.parse(accountStr)).toBe('123456789');
  // We have 10 possible digits and a 9-digit string, so test twice.
  accountStr =
    ' _  _  _  _  _  _     _  _ \n' +
    '| ||_||_|  ||_ |_ |_| _| _|\n' +
    '|_| _||_|  ||_| _|  | _||_ ';
  expect(account.parse(accountStr)).toBe('098765432');
});

test('parses a string with a bad digit', () => {
  const accountStr =
    '    _  _     _  _  _  _  _ \n' +
    '  | _| _||_||_ |_  | |_||_|\n' +
    '  ||_  _|  | _||_|  ||_| _|';
  expect(account.parse(accountStr)).toBe('123456?89');
});

test('parses a string with no digits', () => {
  const accountStr = '\n\n';
  expect(account.parse(accountStr)).toBe('?????????');
});

test('parses a string with too many digits', () => {
  const accountStr =
    '    _  _     _  _  _  _  _  _ \n' +
    '  | _| _||_||_ |_   ||_||_|| |\n' +
    '  ||_  _|  | _||_|  ||_| _||_|';
  expect(account.parse(accountStr)).toBe('123456789');
});

test('correctly identifies valid accounts', () => {
  expect(account.isValidChecksum('457508000')).toBe(true);
});

test('correctly identifies invalid accounts', () => {
  expect(account.isValidChecksum('664371495')).toBe(false);
});
