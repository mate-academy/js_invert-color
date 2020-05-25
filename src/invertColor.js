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
  const colorArray = [color.slice(1, 3), color.slice(3, 5), color.slice(5)];
  const whiteHexNumber = 255;
  let oppositeColor = '';

  for (let i = 0; i < colorArray.length; i++) {
    const decimalNumber = parseInt(colorArray[i], 16);
    const oppositeNumber = whiteHexNumber - decimalNumber;
    let oppositeHexNumber = oppositeNumber.toString(16);

    if (oppositeHexNumber.length === 1) {
      oppositeHexNumber = '0' + oppositeNumber;
    }
    oppositeColor += oppositeHexNumber;
  }

  return `#${oppositeColor}`;
}

// console.log(invertColor("#9876F0"));

module.exports = invertColor;
