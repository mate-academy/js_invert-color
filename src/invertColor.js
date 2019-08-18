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
  const inverts = [];

  color
    .toUpperCase()
    .split('')
    .forEach(element => {
      switch (element) {
        case '0':
          inverts.push('F');
          break;

        case '1':
          inverts.push('E');
          break;

        case '2':
          inverts.push('D');
          break;

        case '3':
          inverts.push('C');
          break;

        case '4':
          inverts.push('B');
          break;

        case '5':
          inverts.push('A');
          break;

        case '6':
          inverts.push(9);
          break;

        case '7':
          inverts.push(8);
          break;

        case '8':
          inverts.push(7);
          break;

        case '9':
          inverts.push(6);
          break;

        case 'F':
          inverts.push(0);
          break;

        case 'E':
          inverts.push(1);
          break;

        case 'D':
          inverts.push(2);
          break;

        case 'C':
          inverts.push(3);
          break;

        case 'B':
          inverts.push(4);
          break;

        case 'A':
          inverts.push(5);
          break;

        default:
          inverts.push(element);
      }
    });

  return inverts.join('');
}

module.exports = invertColor;
