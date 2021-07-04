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
  const hexLetters = {
    10: 'A',
    11: 'B',
    12: 'C',
    13: 'D',
    14: 'E',
    15: 'F',
  };
  const white = parseInt(0xFF);
  const red = white - parseInt('0x' + noHashColor[0] + noHashColor[1]);
  const green = white - parseInt('0x' + noHashColor[2] + noHashColor[3]);
  const blue = white - parseInt('0x' + noHashColor[4] + noHashColor[5]);

  const invertedColors = [red, green, blue];
  let invertedColor = '';

  for (const i in invertedColors) {
    const hexSixteenth = Math.floor(invertedColors[i] / 16);

    if (hexSixteenth < 10) {
      invertedColor += hexSixteenth;
    } else {
      invertedColor += hexLetters[hexSixteenth];
    }

    const hexOnes = invertedColors[i] % 16;

    if (hexOnes < 10) {
      invertedColor += hexOnes;
    } else {
      invertedColor += hexLetters[hexOnes];
    }
  }

  return '#' + invertedColor;
}

module.exports = invertColor;
