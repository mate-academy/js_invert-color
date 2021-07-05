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
  const white = 0xFFFFFF;
  const givenColorHex = +color.replace('#', '0x');
  let invertedColor = (white - givenColorHex).toString(16);

  const length = invertedColor.length;

  for (let i = 1; i <= 6 - length; i++) {
    invertedColor = '0' + invertedColor;
  }

  invertedColor = '#' + invertedColor;

  return invertedColor;
}

module.exports = invertColor;
