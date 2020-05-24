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
  let zero = '';

  const hexMax = 0xffffff;
  const hexActive = '0x' + color.slice(1);
  const hexInvert = (hexMax - hexActive).toString(16);

  if (hexInvert.length < 6) {
    for (let i = hexInvert.length; i < 6; i++) {
      zero += '0';
    }

    return '#' + zero + hexInvert;
  } else {
    return '#' + hexInvert;
  }
}

module.exports = invertColor;
