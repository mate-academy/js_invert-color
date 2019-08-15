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
  let currentValue = parseInt(color.replace('#', ''), 16);
  let colNum = '';
  const hexAlpabetReversed = 'FEDCBA9876543210';

  while (colNum.length < 6) {
    colNum += hexAlpabetReversed[currentValue % 16];
    currentValue = Math.floor(currentValue / 16);
  }
  return '#' + colNum.split('').reverse().join('');
}

module.exports = invertColor;
