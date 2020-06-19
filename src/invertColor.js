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
  const colorHex = color.replace('#', '');
  let colorInverted = '#';

  for (let i = 0; i < colorHex.length; i++) {
    colorInverted += getSmallHex(0xf - ('0x' + colorHex[i]));
  }

  return colorInverted;
}

function getSmallHex(value) {
  const hexLetters = ['a', 'b', 'c', 'd', 'e', 'f'];
  let hexValue = '';

  if (value < 10) {
    hexValue = '' + value;
  } else if (value < 16) {
    hexValue = hexLetters[value - 10];
  }

  return hexValue;
}

module.exports = invertColor;
