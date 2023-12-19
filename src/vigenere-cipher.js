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
  constructor(direct = true) {
    this.direct = direct;
  }
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }

    const firstKeyCode = "A".charCodeAt(0);
    const lastKeyCode = "Z".charCodeAt(0);
    const messageUpper = message.toUpperCase();
    let keyString = "";
    let encrypted = "";

    for (let i = 0, j = 0; i < messageUpper.length; i++, j++) {
      if (j > key.length - 1) j = 0;
      const charCode = messageUpper.charCodeAt(i);
      if (charCode < firstKeyCode || charCode > lastKeyCode) {
        keyString += messageUpper[i];
        j--;
      } else {
        keyString += key[j].toUpperCase();
      }
    }

    for (let i = 0; i < keyString.length; i++) {
      const currentCharCode = messageUpper.charCodeAt(i);
      if (currentCharCode < firstKeyCode || currentCharCode > lastKeyCode) {
        encrypted += messageUpper[i];
      } else {
        const currentKeyCode = keyString.charCodeAt(i);
        const shift = currentKeyCode - firstKeyCode;
        const encriptedCharCode =
          ((currentCharCode - firstKeyCode + shift) % 26) + firstKeyCode;
        encrypted += String.fromCharCode(encriptedCharCode);
      }
    }

    return this.direct ? encrypted : encrypted.split("").reverse().join("");
  }
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error("Incorrect arguments!");
    }

    const firstKeyCode = "A".charCodeAt(0);
    const lastKeyCode = "Z".charCodeAt(0);
    const messageUpper = encryptedMessage.toUpperCase();
    let keyString = "";
    let decrypted = "";

    for (let i = 0, j = 0; i < messageUpper.length; i++, j++) {
      if (j > key.length - 1) j = 0;
      const charCode = messageUpper.charCodeAt(i);
      if (charCode < firstKeyCode || charCode > lastKeyCode) {
        keyString += messageUpper[i];
        j--;
      } else {
        keyString += key[j].toUpperCase();
      }
    }

    for (let i = 0; i < keyString.length; i++) {
      const currentCharCode = messageUpper.charCodeAt(i);
      if (currentCharCode < firstKeyCode || currentCharCode > lastKeyCode) {
        decrypted += messageUpper[i];
      } else {
        console.log(keyString[i]);
        const currentKeyCode = keyString.charCodeAt(i);
        const shift = currentKeyCode - firstKeyCode;
        console.log(currentCharCode);
        console.log(shift);
        const encriptedCharCode =
          ((currentCharCode - firstKeyCode - shift + 26) % 26) + firstKeyCode;
        console.log(String.fromCharCode(encriptedCharCode));
        decrypted += String.fromCharCode(encriptedCharCode);
      }
    }

    return this.direct ? decrypted : decrypted.split("").reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine
};
