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
  const white = 0xFFFFFF;
  const colorHex = parseInt(color.replace('#', '0x'), 16);

  const hexLength = 6;
  const hexInverted = (white - colorHex).toString(16);
  const numRepetitions = hexLength - hexInverted.length;

  if (numRepetitions > 0) {
    return '#' + '0'.repeat(numRepetitions) + hexInverted;
  } else {
    return '#' + hexInverted;
  }
}

module.exports = invertColor;
