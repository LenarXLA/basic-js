const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(value = true) {
    this.value = value;
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined || message === null || key === null) {
      throw new Error('invalid value!');
    }

    let arrMessage = message.toLowerCase().split('');
    let arrKey = key.toLowerCase().split('');
    let result = [];
 
    for (let el = 0; el < arrMessage.length; el++) {
      if (arrKey.length < arrMessage.length) {
        arrKey.push(arrKey[el]);
      }
    }

    for (let i = 0; i < arrMessage.length; i++) {
      let charCode = 0;
      if (/[^a-z]/g.test(arrMessage[i])) {
        arrKey.splice(i, 0, ' '); 
        charCode = arrMessage[i].charCodeAt(0);
      } else {
        charCode = arrMessage[i].charCodeAt(0) + arrKey[i].charCodeAt(0) - 97;
        if (charCode > 122) {
          charCode = (charCode - 26);
        }
      }
      result.push(String.fromCharCode(charCode));
    }
    
    if (this.value === true) {
      return result.join('').toUpperCase();
    } else {
      return result.reverse().join('').toUpperCase();
    }
  }

  decrypt(message, key) {
    if (message === undefined || key === undefined || message === null || key === null) {
      throw new Error('invalid value!');
    }
    let arrMessage = message.toLowerCase().split('');
    let arrKey = key.toLowerCase().split('');
    let result = [];
 
    for (let el = 0; el < arrMessage.length; el++) {
      if (arrKey.length < arrMessage.length) {
        arrKey.push(arrKey[el]);
      }
    }

    for (let i = 0; i < arrMessage.length; i++) {
      let charCode = 0;
      if (/[^a-z]/g.test(arrMessage[i])) {
        arrKey.splice(i, 0, ' '); 
        charCode = arrMessage[i].charCodeAt(0);
      } else {
        charCode = arrMessage[i].charCodeAt(0) - Math.abs(97 - arrKey[i].charCodeAt(0));
        if (charCode < 97) {
          charCode = (122 - (96 - charCode));
        }
        
      }
      result.push(String.fromCharCode(charCode));
    }
    if (this.value === true) {
      return result.join('').toUpperCase();
    } else {
      return result.reverse().join('').toUpperCase();
    }
  }
}

module.exports = VigenereCipheringMachine;