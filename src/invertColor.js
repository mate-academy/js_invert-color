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
  return color
    .toUpperCase()
    .split('')
    .map(char => {
      switch (char) {
        case '0':
          return 'F';
        case '1':
          return 'E';
        case '2':
          return 'D';
        case '3':
          return 'C';
        case '4':
          return 'B';
        case '5':
          return 'A';
        case '6':
          return 9;
        case '7':
          return 8;
        case '8':
          return 7;
        case '9':
          return 6;
        case 'A':
          return 5;
        case 'B':
          return 4;
        case 'C':
          return 3;
        case 'D':
          return 2;
        case 'E':
          return 1;
        case 'F':
          return 0;
        default:
          return char;
      }
    })
    .join('');
}

module.exports = invertColor;
