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
  let str = '';
  str = color.toLowerCase().split('');

  for (let i = 1; i < str.length; i++) {
    switch (str[i]) {
      case '0':
        str[i] = 'f';
        break;
      case '1':
        str[i] = 'e';
        break;
      case '2':
        str[i] = 'd';
        break;
      case '3':
        str[i] = 'c';
        break;
      case '4':
        str[i] = 'b';
        break;
      case '5':
        str[i] = 'a';
        break;
      case '6':
        str[i] = 9;
        break;
      case '7':
        str[i] = 8;
        break;
      case '8':
        str[i] = 7;
        break;
      case '9':
        str[i] = 6;
        break;
      case 'a':
        str[i] = 5;
        break;
      case 'b':
        str[i] = 4;
        break;
      case 'c':
        str[i] = 3;
        break;
      case 'd':
        str[i] = 2;
        break;
      case 'e':
        str[i] = 1;
        break;
      case 'f':
        str[i] = 0;
        break;
      default:
        return 'it is not a color';
    }
  }

  return str.join('');
}

module.exports = invertColor;
