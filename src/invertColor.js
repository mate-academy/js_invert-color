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
  // write code here
  let result = '#';
  for (let i = 0; i < color.length; i++) {
    switch (color.toUpperCase().charAt(i)) {
      case '0': result += 'F'; break;
      case '1': result += 'E'; break;
      case '2': result += 'D'; break;
      case '3': result += 'C'; break;
      case '4': result += 'B'; break;
      case '5': result += 'A'; break;
      case '6': result += '9'; break;
      case '7': result += '8'; break;
      case '8': result += '7'; break;
      case '9': result += '6'; break;
      case 'A': result += '5'; break;
      case 'B': result += '4'; break;
      case 'C': result += '3'; break;
      case 'D': result += '2'; break;
      case 'E': result += '1'; break;
      case 'F': result += '0'; break;
    }
  }

  return result;
}

module.exports = invertColor;
