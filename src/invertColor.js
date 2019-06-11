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
  let newColor = color;
  newColor = newColor.substring(1);
  newColor = parseInt(newColor, 16);
  newColor = 0xFFFFFF ^ newColor;
  newColor = newColor.toString(16);
  newColor = ('000000' + newColor).slice(-6);
  newColor = '#' + newColor;
  return newColor;
}
invertColor('#000000');
module.exports = invertColor;
