const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
	constructor(isDirect = true) {
		this.isDirect = isDirect;
	}

	encrypt(message, key) {
		if (!message || !key) {
			throw new Error('Incorrect arguments!');
		}
		message = message.toUpperCase();
		key = key.toUpperCase();
		let result = '';
		let keyIndex = 0;
		for (let i = 0; i < message.length; i++) {
			if (/[A-Z]/.test(message[i])) {
				let messageCharCode = message.charCodeAt(i) - 65;
				let keyCharCode = key.charCodeAt(keyIndex % key.length) - 65;
				let code = ((messageCharCode + keyCharCode) % 26) + 65;
				result += String.fromCharCode(code);
				keyIndex++;
			} else {
				result += message[i];
			}
		}
		return this.isDirect ? result : result.split('').reverse().join('');
	}

	decrypt(encryptedMessage, key) {
		if (!encryptedMessage || !key) {
			throw new Error('Incorrect arguments!');
		}
		encryptedMessage = encryptedMessage.toUpperCase();
		key = key.toUpperCase();
		let result = '';
		let keyIndex = 0;
		for (let i = 0; i < encryptedMessage.length; i++) {
			if (/[A-Z]/.test(encryptedMessage[i])) {
				let encryptedMessageCharCode =
					encryptedMessage.charCodeAt(i) - 65;
				let keyCharCode = key.charCodeAt(keyIndex % key.length) - 65;
				let code =
					((encryptedMessageCharCode - keyCharCode + 26) % 26) + 65;
				result += String.fromCharCode(code);
				keyIndex++;
			} else {
				result += encryptedMessage[i];
			}
		}
		return this.isDirect ? result : result.split('').reverse().join('');
	}
}

module.exports = {
	VigenereCipheringMachine,
};
