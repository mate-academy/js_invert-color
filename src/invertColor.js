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
  const hex = '0123456789abcdef';
  const hexInvert = [...hex].reverse();
  const startColor = color.toLowerCase().split('');
  startColor.shift();
  const inverter = (elem) => {
    let invertElem = '';
    invertElem = hex.split('')[hexInvert.indexOf(elem)];
    return invertElem;
  };
  const finishColor = startColor.map(inverter);
  finishColor.unshift('#');
  const result = finishColor.join('').toUpperCase();

  return result;
}

module.exports = invertColor;
