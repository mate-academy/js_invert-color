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

  const hexArr = [color.toUpperCase().slice(1, 3),
    color.toUpperCase().slice(3, 5),
    color.toUpperCase().slice(5)];

  for (let i = 0; i < hexArr.length; i++) {
    hexArr[i] = hexSymbols.indexOf(hexArr[i][0]) * 16
    + hexSymbols.indexOf(hexArr[i][1]);
    hexArr[i] = 255 - hexArr[i];

    if (hexArr[i] < 16) {
      hexArr[i] = '0' + hexSymbols[hexArr[i]];
    } else {
      const hexCharFirst = hexSymbols[Math.floor(hexArr[i] / 16)];
      const hexCharSecond = hexSymbols[hexArr[i] % 16];

      hexArr[i] = hexCharFirst + hexCharSecond;
    }
  }

  return '#' + hexArr.join('');
}

module.exports = invertColor;
