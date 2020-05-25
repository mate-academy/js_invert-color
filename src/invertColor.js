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
  const hexSymbols = '0123456789ABCDEF';

  const hexArr = [color.slice(1, 3), color.slice(3, 5), color.slice(5)];

  for (let item of hexArr) {
    item = hexSymbols.indexOf(item[0]) * 16 + hexSymbols.indexOf(item[1]);
    item = 255 - item;

    if (item < 16) {
      item = '0' + hexSymbols[item];
    } else {
      const hexCharFirst = hexSymbols.indexOf(Math.floor(item / 16));
      const hexCharSecond = hexSymbols.indexOf(item % 16);

      item = hexCharFirst + hexCharSecond;
    }
  }

  return '#' + hexArr.join('');
}

module.exports = invertColor;
