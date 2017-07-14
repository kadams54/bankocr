// prettier-ignore
const ZERO = (
  ' _ ' +
  '| |' +
  '|_|'
);
// prettier-ignore
const ONE = (
  '   ' +
  '  |' +
  '  |'
);
// prettier-ignore
const TWO = (
  ' _ ' +
  ' _|' +
  '|_ '
);
// prettier-ignore
const THREE = (
  ' _ ' +
  ' _|' +
  ' _|'
);
// prettier-ignore
const FOUR = (
  '   ' +
  '|_|' +
  '  |'
);
// prettier-ignore
const FIVE = (
  ' _ ' +
  '|_ ' +
  ' _|'
);
// prettier-ignore
const SIX = (
  ' _ ' +
  '|_ ' +
  '|_|'
);
// prettier-ignore
const SEVEN = (
  ' _ ' +
  '  |' +
  '  |'
);
// prettier-ignore
const EIGHT = (
  ' _ ' +
  '|_|' +
  '|_|'
);
// prettier-ignore
const NINE = (
  ' _ ' +
  '|_|' +
  ' _|'
);

function ocr(digit) {
  switch (digit) {
  case ZERO:
    return '0';
  case ONE:
    return '1';
  case TWO:
    return '2';
  case THREE:
    return '3';
  case FOUR:
    return '4';
  case FIVE:
    return '5';
  case SIX:
    return '6';
  case SEVEN:
    return '7';
  case EIGHT:
    return '8';
  case NINE:
    return '9';
  default:
    return '?';
  }
}

function humanizeDigit(digit) {
  return (
    `${digit.substring(0, 3)}\n` +
    `${digit.substring(3, 6)}\n` +
    `${digit.substring(6, 9)}`
  );
}

module.exports = {
  ocr: ocr,
  humanizeDigit: humanizeDigit
};
