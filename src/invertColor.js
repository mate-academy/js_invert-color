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
function toHex(number) {
  let res = number.toString(16);
  if (res.length === 1) {
    res = '0' + res;
  }
  return res;
}

function invertColor(color) {
  return '#' + toHex(255 - parseInt(color.substr(1, 2), 16))
    + toHex(255 - parseInt(color.substr(3, 2), 16))
    + toHex(255 - parseInt(color.substr(5, 2), 16));
}

module.exports = invertColor;
