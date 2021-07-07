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
  const r = invertSingleColor(color.slice(1, 3));
  const g = invertSingleColor(color.slice(3, 5));
  const b = invertSingleColor(color.slice(5, 7));

  return '#' + r + g + b;
}

function invertSingleColor(color) {
  return (255 - parseInt(color, 16)).toString(16).padStart(2, 0);
}

module.exports = invertColor;
