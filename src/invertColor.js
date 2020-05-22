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
  const colorValue = color.slice(1);
  const colorsNumber = [];
  const step = 2;
  const maxColorValue = 255;
  let temp;

  for (let i = 0; i < colorValue.length; i += step) {
    temp = colorValue.substring(i, i + step);
    temp = parseInt(temp, 16);
    temp = (maxColorValue - temp).toString(16);
    colorsNumber.push(temp.length === 1 ? `0${temp}` : temp);
  }

  return `#${colorsNumber.join('').toUpperCase()}`;
}

module.exports = invertColor;
