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
  const str = color.slice(1).toLowerCase().split('');
  const hexStr = '0123456789abcdef';
  const hexStrArr = hexStr.split('');
  const res = str.map((letter) => {
    return (hexStrArr[15 - hexStrArr.indexOf(letter)]);
  });
  return (`#${res.join('').toUpperCase()}`);
}

module.exports = invertColor;
