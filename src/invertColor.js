'use strict';

/**
 * Write a function accepting 6 digit HEX color with a leading #
 * and returning inverted color (color + inverted === white)
 *
 * invertColor('#000000') === '#FFFFFF' // 0x000000 + 0xFFFFFF === 0xFFFFFF
 * invertColor('#DDEEAA') === '#221155' // 0x221155 + 0xDDEEAA === 0xFFFFFF
 * invertColor('#012345') === '#FEDCBA' // 0x012345 + 0xFEDCBA === 0xFFFFFF
 *
 * @param {string} color
 *
 * @return {string}
 */
function invertColor(color) {
  // write code here
  const colorWithoutHyphen = color.slice(1).toUpperCase();

  const r = colorWithoutHyphen.slice(0, 2);
  const g = colorWithoutHyphen.slice(2, 4);
  const b = colorWithoutHyphen.slice(4, 6);

  const invertedR = toHex(255 - convertToDecimal(r));
  const invertedG = toHex(255 - convertToDecimal(g));
  const invertedB = toHex(255 - convertToDecimal(b));

  const invertedColor = addZeros(invertedR)
  + addZeros(invertedG)
  + addZeros(invertedB);

  return '#' + invertedColor.toUpperCase();
}

function addZeros(num) {
  return num.length === 2 ? num : '0' + num;
}

function convertToDecimal(num) {
  const conversion = {
    'A': 10,
    'B': 11,
    'C': 12,
    'D': 13,
    'E': 14,
    'F': 15,
  };

  let decimal = 0;
  let power = 0;

  for (let i = num.length - 1; i >= 0; i--) {
    const currentDigit = num[i];

    if (conversion.hasOwnProperty(currentDigit)) {
      decimal += conversion[num[i]] * (16 ** power);
    } else {
      decimal += num[i] * (16 ** power);
    }
    power += 1;
  }

  return decimal;
}
// function used in the previous task

function toHex(value) {
  const mapTable = new Map([
    [10, 'a'],
    [11, 'b'],
    [12, 'c'],
    [13, 'd'],
    [14, 'e'],
    [15, 'f'],
  ]);
  let hexValue = '';
  let hexValueReversed = '';
  let wholePart = value;

  do {
    const remainder = wholePart % 16;

    if (remainder < 10) {
      hexValue += remainder;
    } else {
      hexValue += mapTable.get(remainder);
    }

    wholePart = Math.floor(wholePart / 16);
  } while (wholePart);

  for (let i = hexValue.length - 1; i >= 0; i--) {
    hexValueReversed += hexValue[i];
  }

  return hexValueReversed;
}

module.exports = invertColor;
