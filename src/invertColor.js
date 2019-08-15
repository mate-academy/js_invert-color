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
  const colorArr = color.split('');
  const elems = ['F', 'E', 'D', 'C', 'B', 'A',
    '9', '8', '7', '6', '5', '4', '3', '2', '1', '0'];
  for (let i = 1; i <= 6; i++) {
    colorArr[i] = elems[parseInt(colorArr[i], 16)];
  }
  return colorArr.join('');
}

module.exports = invertColor;
