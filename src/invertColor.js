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
  const replacedGridToZeroXColor = color.replace('#', '0x');
  const whiteColor = 0xFFFFFF;
  let colorToHexString = '';

  const invertColorCalculator = whiteColor - replacedGridToZeroXColor;
  colorToHexString = invertColorCalculator.toString(16);

  if (colorToHexString.length < 7) {
    colorToHexString = colorToHexString.padStart(6, 0)
  }

  return '#' + colorToHexString;
}

module.exports = invertColor;
