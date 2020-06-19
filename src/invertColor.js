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
  const hexColor = color.replace('#', '');
  let invertedColor = '#';

  for (let i = 0; i < hexColor.length; i++) {
    invertedColor += getHexPiece(0xf - ('0x' + hexColor[i]));
  }

  return invertedColor;
}

function getHexPiece(value) {
  const letterHex = ['a', 'b', 'c', 'd', 'e', 'f'];
  let hex = '';

  if (value < 10) {
    hex = '' + value;
  } else if (value < 16) {
    hex = letterHex[value - 10];
  }

  return hex;
}

module.exports = invertColor;
