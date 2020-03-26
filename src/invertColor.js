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
  const noHashColor = color.slice(1).toUpperCase();
  const white = parseInt(0xFF);
  let red = (white - parseInt('0x' + noHashColor[0] + noHashColor[1]))
    .toString(16);

  if (red.length === 1) {
    red = '0' + red;
  }

  let green = (white - parseInt('0x' + noHashColor[2] + noHashColor[3]))
    .toString(16);

  if (green.length === 1) {
    green = '0' + green;
  }

  let blue = (white - parseInt('0x' + noHashColor[4] + noHashColor[5]))
    .toString(16);

  if (blue.length === 1) {
    blue = '0' + blue;
  }

  const invertedColor = '#' + red + green + blue;

  return invertedColor;
}

module.exports = invertColor;
