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
  const hexNumberR = color.slice(1, 3);
  const hexNumberG = color.slice(3, 5);
  const hexNumberB = color.slice(5);

  const decimalNumberR = parseInt(hexNumberR, 16);
  const decimalNumberG = parseInt(hexNumberG, 16);
  const decimalNumberB = parseInt(hexNumberB, 16);

  const whiteHexNumberR = 255;
  const whiteHexNumberG = 255;
  const whiteHexNumberB = 255;

  const differenceR = whiteHexNumberR - decimalNumberR;
  let differenceHexR = differenceR.toString(16);

  if (differenceHexR.length === 1) {
    differenceHexR = '0' + differenceHexR;
  }

  const differenceG = whiteHexNumberG - decimalNumberG;
  let differenceHexG = differenceG.toString(16);

  if (differenceHexG.length === 1) {
    differenceHexG = '0' + differenceHexG;
  }

  const differenceB = whiteHexNumberB - decimalNumberB;
  let differenceHexB = differenceB.toString(16);

  if (differenceHexB.length === 1) {
    differenceHexB = '0' + differenceHexB;
  }

  return `#${differenceHexR}${differenceHexG}${differenceHexB}`;
}

module.exports = invertColor;
