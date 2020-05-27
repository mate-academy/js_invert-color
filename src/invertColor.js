'use strict';

function invertColor(color) {
  let invertHexColor = '';

  for (const hexNumber of color) {
    if (hexNumber === '#') {
      invertHexColor += hexNumber;
      continue;
    }

    invertHexColor += (0xF - ('0x' + hexNumber)).toString(16);
  }

  return invertHexColor;
}

module.exports = invertColor;
