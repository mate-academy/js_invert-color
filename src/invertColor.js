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
  const white = 0xFFFFFF;
  const colorHex = parseInt(color.replace('#', '0x'), 16);

  const hexLength = 6;
  const hexInverted = toHex(white - colorHex);
  const numRepetitions = hexLength - hexInverted.length;

  if (numRepetitions > 0) {
    return '#' + '0'.repeat(numRepetitions) + hexInverted;
  } else {
    return '#' + hexInverted;
  }

  function toHex(value) {
    if (value === 0) {
      return '0';
    }

    let number = value;
    let remainder = 0;
    let remainderStr = '';
    let hexStr = '';
    const hexDecimals = {
      10: 'a',
      11: 'b',
      12: 'c',
      13: 'd',
      14: 'e',
      15: 'f',
    };

    while (number > 0.99) {
      remainder = number % 16;
      number = Math.floor(number / 16);

      if (remainder < 10) {
        remainderStr += remainder;
      } else {
        remainderStr += hexDecimals[remainder];
      }
    }

    for (let i = remainderStr.length - 1; i >= 0; i--) {
      hexStr += remainderStr[i];
    }

    return hexStr;
  }
}

module.exports = invertColor;
