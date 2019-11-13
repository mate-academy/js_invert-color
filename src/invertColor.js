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
  const replacedHashtag = color.replace('#', '');
  let invertedColor = '';
  let decimalColor = parseInt(replacedHashtag, 16);
  let hexSymbols = '0123456789abcdef';
  hexSymbols = hexSymbols.split('').reverse().join('');

  while (invertedColor.length < 6) {
    invertedColor += hexSymbols[decimalColor % 16];
    decimalColor = Math.floor(decimalColor / 16);
  }

  return `#${invertedColor.split('').reverse().join('')}`;
}

module.exports = invertColor;
