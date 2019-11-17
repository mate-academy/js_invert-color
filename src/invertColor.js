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
  const hexAlphabet = '0123456789ABCDEF';
  let invertedColor = '';
  const subColor = color.substring(1,).toUpperCase();
  const maxValue = 15;
  let invertedValue = 0;

  for (let i = 0; i < subColor.length; i++) {
    for (let j = 0; j < hexAlphabet.length; j++) {
      if (subColor[i] === hexAlphabet[j]) {
        invertedValue = maxValue - j;
        invertedColor += hexAlphabet[invertedValue];
      }
    }
  }

  return '#' + invertedColor;

  // const reversedHexAlphabet = 'FEDCBA9876543210';
  // let invertedColor = '';
  // const subColor = color.substring(1,);
  // let decimalColor = parseInt(subColor, 16);

  // if (decimalColor === 0) {
  //   return '#FFFFFF';
  // }

  // do {
  //   invertedColor += reversedHexAlphabet[decimalColor % 16];
  //   decimalColor = Math.floor(decimalColor / 16);
  // } while (decimalColor > 0)

  // return '#' + invertedColor.split('').reverse().join('');
}

module.exports = invertColor;
