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
  let invert = '#';

  for (let i = 0; i < hashlessColor.length / 2; i++) {
    const currentColor = hashlessColor.slice(i * 2, i * 2 + 2);
    const invertCurColor = (255 - parseInt(currentColor, 16)).toString(16);

    if (invertCurColor.length < 2) {
      invert = invert + '0' + invertCurColor;
    } else {
      invert = invert + invertCurColor;
    }
  }

  return invert;
}

module.exports = invertColor;
