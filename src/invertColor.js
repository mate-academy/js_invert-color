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
  const formated = color.replace('#', '').toLocaleLowerCase().split('');
  let hexStr = '';
  const fromHex = {
    'f': '15',
    'e': '14',
    'd': '13',
    'c': '12',
    'b': '11',
    'a': '10',
    '9': '9',
    '8': '8',
    '7': '7',
    '6': '6',
    '5': '5',
    '4': '4',
    '3': '3',
    '2': '2',
    '1': '1',
    '0': '0',
  };

  for (let i = 0; i < formated.length; i++) {
    const fNum = formated[i];
    const hNum = fromHex[fNum];

    if (i % 2) {
      hexStr += hNum + ' ';
    } else {
      hexStr += (hNum * 16) + ' ';
    }
  }

  const hexArr = hexStr.split(' ');

  function toHex(value) {
    const letter = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
      'a', 'b', 'c', 'd', 'e', 'f'];
    const hexFloor = letter[Math.floor(value / 16)];
    const hexReminder = letter[value % 16];

    if (value === 0) {
      return '00';
    } else {
      return '' + hexFloor + hexReminder;
    }
  }

  const numOne = toHex(255 - (parseInt(hexArr[0]) + parseInt(hexArr[1])));
  const numTwo = toHex(255 - (parseInt(hexArr[2]) + parseInt(hexArr[3])));
  const numThree = toHex(255 - (parseInt(hexArr[4]) + parseInt(hexArr[5])));
  const newNumString = '#' + numOne + numTwo + numThree;

  return newNumString;
}

module.exports = invertColor;
