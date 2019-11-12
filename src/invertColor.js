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
  const newColor = color.replace('#', '');
  let decColor;
  let inventedColor = '';
  let hexRevAlphabet = '0123456789abcdef';
  hexRevAlphabet = hexRevAlphabet.split('').reverse().join('');

  decColor = parseInt(newColor, 16);

  while (inventedColor.length < 6) {
    inventedColor += hexRevAlphabet[decColor % 16];
    decColor = Math.floor(decColor / 16);
  }

  return '#' + inventedColor.split('').reverse().join('');
}

module.exports = invertColor;
