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
  // eslint-disable-next-line no-param-reassign
  color = color.toUpperCase().slice(1).split('');

  // eslint-disable-next-line no-shadow
  let invertColor = '#';
  const systemTo16 = ['0', '1', '2', '3', '4', '5', '6', '7', '8',
    '9', 'A', 'B', 'C', 'D', 'E', 'F'];

  const invertSystem = systemTo16.concat().reverse();

  for (let i = 0; i < color.length; i++) {
    invertColor += invertSystem[systemTo16.indexOf(color[i])];
  }

  return invertColor;
}

module.exports = invertColor;
