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
  const hashlessColor = color.slice(1);
  let inverted = '#';

  for (let i = 0; i < hashlessColor.length / 2; i++) {
    const curColor = hashlessColor.slice(i * 2, i * 2 + 2);
    const invertedCurColor = (255 - parseInt(curColor, 16)).toString(16);

    inverted += invertedCurColor.length < 2
      ? '0' + invertedCurColor
      : invertedCurColor;
  }

  return inverted;
}

module.exports = invertColor;
