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
  const whiteColor = 0xffffff;
  const hexColor = parseInt(color.slice(1), 16);
  const revertColor = whiteColor - hexColor;
  const toHex = function(value) {
    let hexNumberInString = '';
    let number = value;
    const remainderValues = {
      16: '10',
      15: 'F',
      14: 'E',
      13: 'D',
      12: 'C',
      11: 'B',
      10: 'A',
    };

    do {
      let remainder = number % 16;

      if (remainder > 9) {
        remainder = remainderValues[remainder];
      }

      hexNumberInString = `${remainder}${hexNumberInString}`;
      number = Math.trunc(number / 16);
    } while (number);

    return hexNumberInString;
  };

  let revertColorStr = toHex(revertColor);

  for (let i = revertColorStr.length; i < 6; i++) {
    revertColorStr = `0${revertColorStr}`;
  }

  return `#${revertColorStr}`;
}

module.exports = invertColor;
