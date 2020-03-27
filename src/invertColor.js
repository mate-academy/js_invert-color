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
  const numMax = parseInt('ff', 16);
  let res = '#';

  const invert = {
    num1: numMax - parseInt(color.slice(1, 3), 16),
    num2: numMax - parseInt(color.slice(3, 5), 16),
    num3: numMax - parseInt(color.slice(5, 7), 16),
  };

  for (const keyNum in invert) {
    invert[keyNum] = invert[keyNum].toString(16);

    if (invert[keyNum].length === 1) {
      invert[keyNum] = '0' + invert[keyNum];
    }

    res += invert[keyNum];
  }

  return res;
}

module.exports = invertColor;
