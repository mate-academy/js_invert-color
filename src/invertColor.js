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
  let inverted = '#';

  for (let i = 1; i < color.length; i += 2) {
    const tempColor = 255 - parseInt(color[i] + color[i + 1], 16);
    const tempColorDecimal = tempColor.toString(16);

    inverted += tempColorDecimal.length < 2
      ? 0 + tempColorDecimal : tempColorDecimal;
  }

  return inverted;
}

module.exports = invertColor;
