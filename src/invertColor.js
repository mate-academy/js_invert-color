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
  const normalizedColor = color.slice(1).toLowerCase();
  const hexAlphabet = '0123456789abcdef';
  const reversedHexAlphabet = 'fedcba9876543210';
  let reversedColor = '#';
  for (let i = 0; i < normalizedColor.length; i++) {
    const index = hexAlphabet.indexOf(normalizedColor[i]);
    reversedColor += reversedHexAlphabet[index];
  }
  return reversedColor.toUpperCase();
}

module.exports = invertColor;
