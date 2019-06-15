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
  function invert(hue) {
    return 255 - hue;
  }

  function toHex(hex) {
    const newHex = hex.toString(16);
    return '0'.repeat(Math.max(2 - newHex.length, 0)) + newHex;
  };

  const parsedColor = color.slice(1);
  const invRed = invert(+('0x' + parsedColor.slice(0, 2)));
  const invGreen = invert(+('0x' + parsedColor.slice(2, 4)));
  const invBlue = invert(+('0x' + parsedColor.slice(4)));
  const result = '#' + toHex(invRed) + toHex(invGreen) + toHex(invBlue);
  return result;
  // write code here
}

module.exports = invertColor;
