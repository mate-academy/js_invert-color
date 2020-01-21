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

const listInvertedColors = {
  0: 'f',
  1: 'e',
  2: 'd',
  3: 'c',
  4: 'b',
  5: 'a',
  6: '9',
  7: '8',
  8: '7',
  9: '6',
  A: '5',
  B: '4',
  C: '3',
  D: '2',
  E: '1',
  F: '0',
};

function invertColor(color) {
  let result = '#';
  const trimUpString = color.slice(1).toUpperCase();

  for (let i = 0; i < trimUpString.length; i++) {
    const charToInvert = trimUpString[i];

    result += listInvertedColors[charToInvert];
  }

  return result;
}

module.exports = invertColor;
