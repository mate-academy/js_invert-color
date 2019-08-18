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
  let invertedColor = '#';
  const colorArray = color.split('');

  for (let i = 1; i < colorArray.length; i++) {
    invertedColor += invert(colorArray[i]);
  }

  return invertedColor;
}

function invert(colorPart) {
  const hexMapping = new Map();
  hexMapping.set(10, 'A');
  hexMapping.set(11, 'B');
  hexMapping.set(12, 'C');
  hexMapping.set(13, 'D');
  hexMapping.set(14, 'E');
  hexMapping.set(15, 'F');
  hexMapping.set('F', 15);
  hexMapping.set('E', 14);
  hexMapping.set('D', 13);
  hexMapping.set('C', 12);
  hexMapping.set('B', 11);
  hexMapping.set('A', 10);

  let invertedValue;
  const hexMaxNumber = 15;

  if (!isNaN(parseInt(colorPart))) {
    invertedValue = hexMaxNumber - colorPart < 10
      ? hexMaxNumber - colorPart : hexMapping.get(hexMaxNumber - colorPart);
  } else {
    invertedValue = hexMaxNumber - hexMapping.get(colorPart.toUpperCase());
  }
  return invertedValue;
}

module.exports = invertColor;
