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
  const whiteColor = 0xffffff;
  const hexColor = parseInt(color.slice(1), 16);
  let reverColor = (whiteColor - hexColor).toString(16).toUpperCase();

  for (let i = reverColor.length; i < 6; i++) {
    reverColor = `0${reverColor}`;
  }

  return `#${reverColor}`;
}

module.exports = invertColor;
