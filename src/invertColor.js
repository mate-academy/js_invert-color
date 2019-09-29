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
  const sixteen = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    'A', 'B', 'C', 'D', 'E', 'F',
  ];

  const arr = [];

  for (let i = 1; i < color.length; i++) {
    for (let j = 0; j < sixteen.length; j++) {
      const lower = sixteen[j].toLocaleLowerCase();
      if (color[i] === sixteen[j] || color[i] === lower) {
        arr.push(sixteen[(8 - j) * 2 + j - 1]);
      } else {
        continue;
      }
    }
  }

  return '#' + arr.join('');
}

module.exports = invertColor;
