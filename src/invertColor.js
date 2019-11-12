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
  const hex = '0123456789ABCDEF';
  let result = '';
  const colorUpperCase = color.toUpperCase();

  for (let i = 1; i < colorUpperCase.length; i++) {
    result += hex[15 - hex.indexOf(colorUpperCase[i])];
  }

  return '#' + result;
}

module.exports = invertColor;
