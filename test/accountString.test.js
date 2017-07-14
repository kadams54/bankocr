const accountString = require('../src/accountString');

test('parses a string with each digit', () => {
  let accountStr =
    '    _  _     _  _  _  _  _ \n' +
    '  | _| _||_||_ |_   ||_||_|\n' +
    '  ||_  _|  | _||_|  ||_| _|';
  expect(accountString.parse(accountStr)).toBe('123456789');
  // We have 10 possible digits and a 9-digit string, so test twice.
  accountStr =
    ' _  _  _  _  _  _     _  _ \n' +
    '| ||_||_|  ||_ |_ |_| _| _|\n' +
    '|_| _||_|  ||_| _|  | _||_ ';
  expect(accountString.parse(accountStr)).toBe('098765432');
});

test('parses a string with a bad digit', () => {
  const accountStr =
    '    _  _     _  _  _  _  _ \n' +
    '  | _| _||_||_ |_  | |_||_|\n' +
    '  ||_  _|  | _||_|  ||_| _|';
  expect(accountString.parse(accountStr)).toBe('123456?89');
});

test('parses a string with no digits', () => {
  const accountStr = '\n\n';
  expect(accountString.parse(accountStr)).toBe('?????????');
});

test('parses a string with too many digits', () => {
  const accountStr =
    '    _  _     _  _  _  _  _  _ \n' +
    '  | _| _||_||_ |_   ||_||_|| |\n' +
    '  ||_  _|  | _||_|  ||_| _||_|';
  expect(accountString.parse(accountStr)).toBe('123456789');
});
