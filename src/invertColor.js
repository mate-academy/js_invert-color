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
  const hexNums1 = '01234567';
  const hexNums2 = '89ABCDEF';
  let result = '';
  const upColor = color.toUpperCase();

  for (let i = 1; i < upColor.length; i++) {
    if (hexNums1.includes(upColor[i])) {
      result += hexNums2[7 - hexNums1.indexOf(upColor[i])];
    } else {
      result += hexNums1[7 - hexNums2.indexOf(upColor[i])];
    }
  }

  return '#' + result;
}

module.exports = invertColor;
