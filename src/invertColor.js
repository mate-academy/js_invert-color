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
  const colorCode = color.slice(1).toUpperCase();
  let invertedColor = '';
  const maxCodeInDec = 255;

  for (let i = 0; i < colorCode.length; i += 2) {
    let temp = (maxCodeInDec - parseInt(
      '0x' + colorCode.slice(i, i + 2))).toString(16);

    if (temp.length < 2) {
      temp = '0' + temp;
    };
    invertedColor += temp;
  }

  return '#' + invertedColor;
}

module.exports = invertColor;
