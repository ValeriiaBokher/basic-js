const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
	// Если параметры не переданы, создаем пустой объект параметров
	options = options || {};

	// Устанавливаем значения по умолчанию для параметров
	var repeatTimes = options.repeatTimes || 1;
	var separator = options.separator || '+';
	var addition = options.addition !== undefined ? options.addition : '';
	var additionRepeatTimes = options.additionRepeatTimes || 1;
	var additionSeparator = options.additionSeparator || '|';

	// Приводим str и addition к строковому типу
	str = String(str);
	addition = String(addition);

	// Строим повторяющуюся строку addition
	var repeatedAddition = '';
	for (var i = 0; i < additionRepeatTimes; i++) {
		repeatedAddition += addition;
		if (i !== additionRepeatTimes - 1) {
			repeatedAddition += additionSeparator;
		}
	}

	// Строим повторяющуюся строку str с добавлением повторяющейся строки addition
	var repeatedString = '';
	for (var j = 0; j < repeatTimes; j++) {
		repeatedString += str;
		repeatedString += repeatedAddition;
		if (j !== repeatTimes - 1) {
			repeatedString += separator;
		}
	}

	return repeatedString;
}

module.exports = {
	repeater,
};
