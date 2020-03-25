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
  // write code here
  const invert = (number) => {
    switch (number) {
      case "F" :
        return 15;
      case "E" :
        return 14;
      case "D" :
        return 13;
      case "C" :
        return 12;
      case "B" :
        return 11;
      case "A" :
        return 10;
      default:
        return number;
    }
  }
  const parse = (number) => {
    switch (number) {
      case 15 :
        return "F";
      case 14 :
        return "E";
      case 13 :
        return "D";
      case 12 :
        return "C";
      case 11 :
        return "B";
      case 10 :
        return "A";
      default:
        return number;
    }
  }
  let invertColor = color.slice(1)
    .toUpperCase()
    .split("")
    .map(char => parse(15 - invert(char)))
    .join("");
  return "#" + invertColor;
}

module.exports = invertColor;
