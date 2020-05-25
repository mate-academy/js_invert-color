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
  let invertedColor = '#';

  for (let i = 1; i < (color.length / 2 + 2); i += 2) {
    const curColor = toHex(('0xff' - `0x${color.substr(i, 2)}`));

    invertedColor += curColor.length === 1 ? 0 + curColor : curColor;
  }

  return invertedColor;
}

function toHex(value) {
  const hex = {
    10: 'a',
    11: 'b',
    12: 'c',
    13: 'd',
    14: 'e',
    15: 'f',
  };

  let secondDigit = value % 16;

  if (secondDigit >= 10) {
    secondDigit = hex[secondDigit];
  }

  if (value < 16) {
    return `${secondDigit}`;
  }

  let firstDigit = Math.floor(value / 16) % 16;

  if (firstDigit >= 10) {
    firstDigit = hex[firstDigit];
  }

  return `${firstDigit}${secondDigit}`;
}

module.exports = invertColor;
