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
  const parts = color.toLowerCase().split('');
  const invertedColor = ['#'];
  for (let i = 1; i < parts.length; i++) {
    switch (parts[i]) {
      case '0':
        invertedColor.push('F');
        break;

      case '1':
        invertedColor.push('E');
        break;

      case '2':
        invertedColor.push('D');
        break;

      case '3':
        invertedColor.push('C');
        break;

      case '4':
        invertedColor.push('B');
        break;

      case '5':
        invertedColor.push('A');
        break;

      case '6':
        invertedColor.push(9);
        break;

      case '7':
        invertedColor.push(8);
        break;

      case '8':
        invertedColor.push(7);
        break;

      case '9':
        invertedColor.push(6);
        break;

      case 'a':
        invertedColor.push(5);
        break;

      case 'b':
        invertedColor.push(4);
        break;

      case 'c':
        invertedColor.push(3);
        break;

      case 'd':
        invertedColor.push(2);
        break;

      case 'e':
        invertedColor.push(1);
        break;

      case 'f':
        invertedColor.push(0);
        break;
    }
  }
  return invertedColor.join('');
}

module.exports = invertColor;
