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
  const invertedColor = color.toUpperCase().split('');
  const hexValues = '0123456789ABCDEF';

  for (let i = 1; i < invertedColor.length; i++) {
    invertedColor[i] = hexValues[15 - hexValues.indexOf(invertedColor[i])];
  }

  return invertedColor.join('');
}

module.exports = invertColor;
