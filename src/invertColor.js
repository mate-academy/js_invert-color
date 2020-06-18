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
  const lengthColor = color.length;
  const base = 16;

  let resultColor = color;

  resultColor = resultColor.slice(lengthColor - (lengthColor - 1));
  resultColor = parseInt(resultColor, base);
  resultColor = 0xFFFFFF ^ resultColor;
  resultColor = resultColor.toString(base);
  resultColor = '000000' + resultColor;
  resultColor = '#' + resultColor.slice(-(lengthColor - 1));

  return resultColor;
}

module.exports = invertColor;
