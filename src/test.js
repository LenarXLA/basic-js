class VigenereCipheringMachine {
  constructor(value = true) {
    this.value = value;
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined || message === null || key === null) {
      throw new Error('invalid value!');
    }

    let arrMessage = message.split('');
    let arrKey = key.split('');
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
    let arrMessage = message.split('');
    let arrKey = key.split('');
    let result = [];
 
    for (let el = 0; el < arrMessage.length; el++) {
      if (arrKey.length < arrMessage.length) {
        arrKey.push(arrKey[el]);
      }
    }

    for (let i = 0; i < arrMessage.length; i++) {
      let charCode = 0;
      if (/[^a-z]/g.test(arrMessage[i].toLowerCase())) {
        arrKey.splice(i, 0, ' '); 
        charCode = arrMessage[i].charCodeAt(0);
      } else {
        charCode = arrMessage[i].toLowerCase().charCodeAt(0) - Math.abs(97 - arrKey[i].charCodeAt(0));
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

const directMachine = new VigenereCipheringMachine();

const reverseMachine = new VigenereCipheringMachine(false);

console.log(directMachine.encrypt('attack at dawn!', 'alphonse')); //=> 'AEIHQX SX DLLU!'

console.log(directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse')); //=> 'ATTACK AT DAWN!'

console.log(reverseMachine.encrypt('attack at dawn!', 'alphonse')) //=> '!ULLD XS XQHIEA'

console.log(reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse')) //=> '!NWAD TA KCATTA'