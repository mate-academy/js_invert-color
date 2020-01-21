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

const hexNumbers = {
  '0': 'F',
  '1': 'E',
  '2': 'D',
  '3': 'C',
  '4': 'B',
  '5': 'A',
  '6': '9',
  '7': '8',
  '8': '7',
  '9': '6',
  'A': '5',
  'B': '4',
  'C': '3',
  'D': '2',
  'E': '1',
  'F': '0',
};

function invertColor(color) {
  const codeColor = color.slice(color.length - 6);
  let convertCodeColor = '';

  for (let i = 0; i < codeColor.length; i++) {
    convertCodeColor += hexNumbers[codeColor[i].toUpperCase()];
  }

  return color.slice(0, color.length - 6) + convertCodeColor;
}

module.exports = invertColor;
