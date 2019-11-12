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
  const notReverseData = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const reverseData = [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

  const mainColor = color.slice(1, color.length).split('');

  const mainColorArr = [];

  for (let i = 0; i < mainColor.length; i++) {
    if (isNaN(Number(mainColor[i]))) {
      mainColorArr.push(mainColor[i].toLowerCase().charCodeAt(0) - 87);
    } else {
      mainColorArr.push(+mainColor[i]);
    }
  }

  const reverseColor = [];

  for (let i = 0; i < mainColorArr.length; i++) {
    for (let j = 0; j < notReverseData.length; j++) {
      if (mainColorArr[i] === notReverseData[j]) {
        reverseColor.push(reverseData[j]);
      }
    }
  }

  const reverseResult = [];

  for (let i = 0; i < reverseColor.length; i++) {
    if (reverseColor[i] < 10) {
      reverseResult.push(reverseColor[i]);
    } else {
      reverseResult.push(String.fromCharCode(reverseColor[i] + 87)
        .toUpperCase());
    }
  }

  return ('#' + reverseResult.join(''));
}

module.exports = invertColor;
