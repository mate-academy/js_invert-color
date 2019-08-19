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
  const baseColor = 0xFFFFFF;
  const colorDeg = parseInt(baseColor) - parseInt(color.replace('#', '0x'));

  let colorHex = colorDeg.toString(16);
  const colorHexLength = colorHex.length;

  for (let i = 0; i < (6 - colorHexLength); i++) {
    colorHex = '0' + colorHex;
  }

  return '#' + colorHex.toUpperCase();
}

module.exports = invertColor;
