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
  const hexLetters = {
    'A': 10,
    'B': 11,
    'C': 12,
    'D': 13,
    'E': 14,
    'F': 15,
    10: 'A',
    11: 'B',
    12: 'C',
    13: 'D',
    14: 'E',
    15: 'F',
  };
  let result = '#';

  for (let i = 1; i < color.length; i++) {
    if (isNaN(color[i])) {
      result += 15 - hexLetters[color[i].toUpperCase()];
    } else if (15 - color[i] > 9) {
      result += hexLetters[15 - color[i]];
    } else {
      result += 15 - color[i];
    }
  }

  return result;
}

module.exports = invertColor;
