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
  let onlyNumberColor = (0xFFFFFF - parseInt(color.slice(1, color.length), 16))
    .toString(16).toUpperCase();
  const hexCount = 6 - onlyNumberColor.length;

  if (hexCount === 0) {
    return '#' + onlyNumberColor;
  } else {
    for (let i = 0; i < hexCount; i++) {
      onlyNumberColor = '0' + onlyNumberColor;
    }

    return '#' + onlyNumberColor;
  }
}

module.exports = invertColor;
