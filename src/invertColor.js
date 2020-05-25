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
  let invertColour = '#';
  const whiteDecimal = 255;

  for (let i = 1; i < color.length; i += 2) {
    const difference = whiteDecimal - parseInt(color[i] + color[i + 1], 16);
    let differenceHex = difference.toString(16);

    if (differenceHex.length === 1) {
      differenceHex = '0' + differenceHex;
    }

    invertColour += differenceHex;
  }

  return invertColour;
}

module.exports = invertColor;
