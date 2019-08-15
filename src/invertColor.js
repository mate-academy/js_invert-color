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
  let invertColorResult = '';
  invertColorResult = color.toLowerCase().split('');

  for (let i = 1; i < invertColorResult.length; i++) {
    switch (invertColorResult[i]) {
      case '0':
        invertColorResult[i] = 'f';
        break;
      case '1':
        invertColorResult[i] = 'e';
        break;
      case '2':
        invertColorResult[i] = 'd';
        break;
      case '3':
        invertColorResult[i] = 'c';
        break;
      case '4':
        invertColorResult[i] = 'b';
        break;
      case '5':
        invertColorResult[i] = 'a';
        break;
      case '6':
        invertColorResult[i] = 9;
        break;
      case '7':
        invertColorResult[i] = 8;
        break;
      case '8':
        invertColorResult[i] = 7;
        break;
      case '9':
        invertColorResult[i] = 6;
        break;
      case 'a':
        invertColorResult[i] = 5;
        break;
      case 'b':
        invertColorResult[i] = 4;
        break;
      case 'c':
        invertColorResult[i] = 3;
        break;
      case 'd':
        invertColorResult[i] = 2;
        break;
      case 'e':
        invertColorResult[i] = 1;
        break;
      case 'f':
        invertColorResult[i] = 0;
        break;
      default:
        return 'it is not a color';
    }
  }

  return invertColorResult.join('');
}

module.exports = invertColor;
