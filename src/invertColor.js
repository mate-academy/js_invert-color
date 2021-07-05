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
  const hexColor = parseInt(color.slice(1), 16);
  let invertedColor = (0xffffff - hexColor).toString(16);

  if (invertedColor.length < 6) {
    invertedColor = invertedColor.padStart(6, '0');
  }

  return '#' + invertedColor.toUpperCase();
}

module.exports = invertColor;
