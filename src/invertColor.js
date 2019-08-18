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
  const whiteHex = parseInt('0xffffff', 16);
  const colorHex = parseInt(color.replace(/#/g, '0x'), 16);
  let invertColorHex = (whiteHex - colorHex).toString(16);

  if (invertColorHex.length < 6) {
    while (invertColorHex.length < 6) {
      invertColorHex = '0' + invertColorHex;
    }
  }

  return `#${invertColorHex}`;
}

module.exports = invertColor;
