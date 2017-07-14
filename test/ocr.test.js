const ocr = require('../src/ocr');

it('should recognize a "0"', function() {
  // prettier-ignore
  const zero = (
    ' _ ' +
    '| |' +
    '|_|'
  );
  expect(ocr.ocr(zero)).toBe('0');
});

it('should recognize a "1"', function() {
  // prettier-ignore
  const digit = (
    '   ' +
    '  |' +
    '  |'
  );
  expect(ocr.ocr(digit)).toBe('1');
});

it('should recognize a "2"', function() {
  // prettier-ignore
  const digit = (
    ' _ ' +
    ' _|' +
    '|_ '
  );
  expect(ocr.ocr(digit)).toBe('2');
});

it('should recognize a "3"', function() {
  // prettier-ignore
  const digit = (
    ' _ ' +
    ' _|' +
    ' _|'
  );
  expect(ocr.ocr(digit)).toBe('3');
});

it('should recognize a "4"', function() {
  // prettier-ignore
  const digit = (
    '   ' +
    '|_|' +
    '  |'
  );
  expect(ocr.ocr(digit)).toBe('4');
});

it('should recognize a "5"', function() {
  // prettier-ignore
  const digit = (
    ' _ ' +
    '|_ ' +
    ' _|'
  );
  expect(ocr.ocr(digit)).toBe('5');
});

it('should recognize a "6"', function() {
  // prettier-ignore
  const digit = (
    ' _ ' +
    '|_ ' +
    '|_|'
  );
  expect(ocr.ocr(digit)).toBe('6');
});

it('should recognize a "7"', function() {
  // prettier-ignore
  const digit = (
    ' _ ' +
    '  |' +
    '  |'
  );
  expect(ocr.ocr(digit)).toBe('7');
});

it('should recognize a "8"', function() {
  // prettier-ignore
  const digit = (
    ' _ ' +
    '|_|' +
    '|_|'
  );
  expect(ocr.ocr(digit)).toBe('8');
});

it('should recognize a "9"', function() {
  // prettier-ignore
  const digit = (
    ' _ ' +
    '|_|' +
    ' _|'
  );
  expect(ocr.ocr(digit)).toBe('9');
});

it('should display a "?" for unknown strings', function() {
  // prettier-ignore
  const digit = (
      '  _' +
      ' | ' +
      ' _ '
    );
  expect(ocr.ocr(digit)).toBe('?');
});
