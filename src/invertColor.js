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
  const arrOut = ['#', '0', '0', '0', '0', '0', '0'];
  let colorOut;
  const hexStringBase = 0xffffff;
  const colorInput = parseInt(color.split('').slice(1, 7).join(''), 16);

  colorOut = hexStringBase - colorInput;
  colorOut = colorOut.toString(16);
  arrOut.splice(arrOut.length - colorOut.length, colorOut.length, colorOut);

  return arrOut.join('');
}
module.exports = invertColor;
