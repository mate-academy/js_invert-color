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
  const r = '0x' + String(color).split('').splice(1, 2).join('');
  const g = '0x' + String(color).split('').splice(3, 2).join('');
  const b = '0x' + String(color).split('').splice(5, 2).join('');

  function toHex(x) {
    const hexStr = '0123456789abcdef';
    let low = 0;
    let high = 0;
    const result = Number(0xFF) - Number(x);

    (result < 0) ? low = 0 : low = result % 16;
    (result < 0) ? high = 0 : high = (result - low) / 16;

    if (result < 16) {
      return '0' + hexStr.charAt(low);
    } else {
      return '' + hexStr.charAt(high) + hexStr.charAt(low);
    }
  }

  return '#' + toHex(r) + toHex(g) + toHex(b);
}

module.exports = invertColor;
