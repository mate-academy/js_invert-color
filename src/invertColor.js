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
  let array = color;

  array = array.split('');
  array.shift();

  let hex = '#';
  let num;

  for (let i = 0; i < array.length; i++) {
    switch (array[i].toLowerCase()) {
      case 'a':
        num = 10;
        break;
      case 'b':
        num = 11;
        break;
      case 'c':
        num = 12;
        break;
      case 'd':
        num = 13;
        break;
      case 'e':
        num = 14;
        break;
      case 'f':
        num = 15;
        break;
      default:
        num = array[i];
    }
    num = 15 - num;

    switch (num) {
      case 10:
        num = 'a';
        break;
      case 11:
        num = 'b';
        break;
      case 12:
        num = 'c';
        break;
      case 13:
        num = 'd';
        break;
      case 14:
        num = 'e';
        break;
      case 15:
        num = 'f';
        break;
      default:
    }
    hex += num.toString();
  }

  return hex;
}

module.exports = invertColor;
