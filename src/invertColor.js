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
  const colorNumber = '0x' + color.substr(1);
  let invertNum = 0xFFFFFF - colorNumber;
  invertNum = Number(invertNum).toString(16);
  for (let i = 0; i < invertNum.length; i++) {
    if (invertNum.length < 6) {
      invertNum = '0' + invertNum;
    }
  }
  // while (invertNum.length < 6) {
  //   invertNum = '0' + invertNum;
  // };

  return '#' + invertNum;
}
module.exports = invertColor;
