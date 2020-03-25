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
  return '#' + (15 - parseInt(color[1], 16)).toString(16)
  + (15 - parseInt(color[2], 16)).toString(16)
  + (15 - parseInt(color[3], 16)).toString(16)
  + (15 - parseInt(color[4], 16)).toString(16)
  + (15 - parseInt(color[5], 16)).toString(16)
  + (15 - parseInt(color[6], 16)).toString(16);
};

module.exports = invertColor;
