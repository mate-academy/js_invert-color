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
	const colorRed = color.substr(1, 2);
	const colorGreen = color.substr(3, 2);
	const colorBlue = color.substr(5, 2);

	const colorDecRed = parseInt(colorRed, 16);
	const colorDecGreen = parseInt(colorGreen, 16);
	const colorDecBlue = parseInt(colorBlue, 16);

	const answerColorRed = 255 - colorDecRed;
	const answerColorGreen = 255 - colorDecGreen;
	const answerColorBlue = 255 - colorDecBlue;

	let answerColorHexRed = answerColorRed.toString(16);
	if (answerColorHexRed.length < 2) {
		answerColorHexRed = '0' + answerColorHexRed;
	}

	let answerColorHexGreen = answerColorGreen.toString(16);
	if (answerColorHexGreen.length < 2) {
		answerColorHexGreen = '0' + answerColorHexGreen;
	}

	let answerColorHexBlue = answerColorBlue.toString(16);
	if (answerColorHexBlue.length < 2) {
		answerColorHexBlue = '0' + answerColorHexBlue;
	}

	let answer = '#' + answerColorHexRed + answerColorHexGreen + answerColorHexBlue;

	return answer;
}

module.exports = invertColor;
