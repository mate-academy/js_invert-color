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

  const HEX = '0123456789abcdef';
  const indicesHEX = 15;
  let result = '#';

  for (let i = 1; i < color.length; i++) {
    result += HEX[indicesHEX - HEX.indexOf(color[i].toLowerCase())];
  }

  return result;
}

module.exports = invertColor;
