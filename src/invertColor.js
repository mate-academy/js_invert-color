'use strict';

/**
 * fs_on_dec19_salogubova
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
const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8',
  '9', 'a', 'b', 'c', 'd', 'e', 'f'];

function invertColor(color) {
  let invertColorString = '';
  const colors = color.substr(1).toLowerCase();

  for (let i = 0; i <= colors.length - 1; i++) {
    const colorsItem = hex.indexOf((colors[i]));

    const invertItem = hex[15 - colorsItem];

    invertColorString += invertItem.toUpperCase();
  }

  return '#' + invertColorString;
}

module.exports = invertColor;
