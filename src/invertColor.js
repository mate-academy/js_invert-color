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
  const invertedStr = (0xFFFFFF - parseInt(color.slice(1), 16))
    .toString(16).toUpperCase();

  return '#000000'.substr(0, (7 - invertedStr.length)) + invertedStr;
}

module.exports = invertColor;
