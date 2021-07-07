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
const hexTable = {
  '0': 'f',
  '1': 'e',
  '2': 'd',
  '3': 'c',
  '4': 'b',
  '5': 'a',
  '6': '9',
  '7': '8',
  '8': '7',
  '9': '6',
  'a': '5',
  'b': '4',
  'c': '3',
  'd': '2',
  'e': '1',
  'f': '0',
};

function invertColor(color) {
  const invertedColor = [];

  for (let i = 1; i < color.length; i++) {
    invertedColor.push(hexTable[color[i].toLowerCase()]);
  }

  return (`#` + invertedColor.join('').toUpperCase());
}

module.exports = invertColor;
