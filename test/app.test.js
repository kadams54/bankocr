const app = require('../src/app');

test('should OCR scanned numbers into actual numbers', () => {
  // This is our acceptance test for the first user story.
  const accounts = app.run('./data/accounts.txt');
  const expected = [
    '000000000',
    '111111111',
    '222222222',
    '333333333',
    '444444444',
    '555555555',
    '666666666',
    '777777777',
    '888888888',
    '999999999',
    '123456789'
  ];
  accounts.forEach((account, index) => expect(account).toBe(expected[index]));
});
