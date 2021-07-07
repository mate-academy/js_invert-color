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
  const data = {
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9',
    0: '0',
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
    10: 'a',
    11: 'b',
    12: 'c',
    13: 'd',
    14: 'e',
    15: 'f',
  };

  const baseWhiteColor = 15;
  const selfColor = color
    .replace(/#/g, '')
    .toLowerCase()
    .split('')
    .map(item => data[item]);

  const result = selfColor
    .map(item => baseWhiteColor - item)
    .map(item => data[item])
    .join('');
  return `#${result}`;
}

module.exports = invertColor;
