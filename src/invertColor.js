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
  // write code here
  const colorNumber = '0x' + color.substring(1);
  let invertNumber = 0xFFFFFF - colorNumber;
  invertNumber = Number(invertNumber).toString(16);
  while (invertNumber.length < 6) {
    invertNumber = '0' + invertNumber;
  };
  return '#' + invertNumber;
}

module.exports = invertColor;
