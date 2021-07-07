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
  const hexArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
  const hexUpperArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C',
    'D', 'E', 'F'];
  const hexInvertArr = hexArr.slice(0).reverse();
  const hexInvertUpperArr = hexUpperArr.slice(0).reverse();
  const colorArr = color.split('');

  for (let i = 1; i < colorArr.length; i++) {
    if (isFinite(colorArr[i])) {
      const colorSimbolPosition = hexArr.indexOf(+colorArr[i]);
      colorArr[i] = hexInvertArr[colorSimbolPosition];
    } else if (colorArr[i] === colorArr[i].toUpperCase()) {
      const colorSimbolPosition = hexUpperArr.indexOf(colorArr[i]);
      colorArr[i] = hexInvertUpperArr[colorSimbolPosition];
    } else {
      const colorSimbolPosition = hexArr.indexOf(colorArr[i]);
      colorArr[i] = hexInvertArr[colorSimbolPosition];
    }
  }

  return colorArr.join('');
}

module.exports = invertColor;
