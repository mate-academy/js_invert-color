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
  const hexColor = color.split('').slice(1);
  let invertedColor;
  const resultColor = [];

  for (let i = 0; i < hexColor.length; i += 1) {
    invertedColor = (255 - parseInt(hexColor[i], 16))
      .toString(16).slice(1).toUpperCase();
    resultColor.push(invertedColor);
  }

  return `#${resultColor.join('')}`;
}

module.exports = invertColor;
