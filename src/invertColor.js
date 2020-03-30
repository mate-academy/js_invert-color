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
  let finalyColor = '#';
  const firstCheck = color.replace(/F/ig, 0)
    .replace(/E/ig, 1)
    .replace(/D/ig, 2)
    .replace(/C/ig, 3)
    .replace(/B/ig, 4)
    .replace(/A/ig, 5);

  for (let i = 1; i < firstCheck.length; i++) {
    if (firstCheck[i] !== color[i]) {
      finalyColor += firstCheck[i];
    } else {
      finalyColor += firstCheck[i].replace(/0/ig, 'F')
        .replace(/1/ig, 'E')
        .replace(/2/ig, 'D')
        .replace(/3/ig, 'C')
        .replace(/4/ig, 'B')
        .replace(/5/ig, 'A');
    }
  }

  return finalyColor;
}

module.exports = invertColor;
