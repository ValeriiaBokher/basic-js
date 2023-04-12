const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
	var newN;
	var ArrN = [];
	let nStr = n.toString();
	for (let i = 0; i < nStr.length; i++) {
		newN = parseInt(nStr.slice(0, i) + nStr.slice(i + 1));
		ArrN.push(newN);
	}

	function getMaxOfArray(ArrN) {
		return Math.max.apply(null, ArrN);
	}
	return getMaxOfArray(ArrN);
}

module.exports = {
	deleteDigit,
};
