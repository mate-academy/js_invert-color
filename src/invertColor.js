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
  let str = '#';

  for (let i = 1; i < color.length; i += 2) {
    const decimal = 255 - parseInt(color[i] + color[i + 1], 16);
    const hex = decimal.toString(16);

    str += hex.length < 2 ? 0 + hex : hex;
  }

  return str;
}

module.exports = invertColor;
