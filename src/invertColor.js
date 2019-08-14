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
  const hexScale = '0123456789ABCDEF';
  const hexNumber = color.toUpperCase().replace(/#/g, '').split('');
  const reverseColor = [];

  for (let i = 0; i < hexNumber.length; i++) {
    reverseColor.push(hexScale[15 - hexScale.indexOf(hexNumber[i])]);
  }

  return (reverseColor.join('').padStart(7, '#'));
}

module.exports = invertColor;
