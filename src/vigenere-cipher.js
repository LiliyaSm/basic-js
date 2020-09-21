const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
    constructor(type) {
        this.type = type;
    }
    encrypt(message, key) {
        // `message` (`string` to encode) and `key` (`string`-keyword)
        //  11=(0+11) % 26
        if (arguments.length < 2) {
            throw new Error("Error");
        }
        message = message.toLowerCase();
        key = key.toLowerCase();

        let result = "";
        let count = 0;
        for (let i = 0; i < message.length; i++) {
            if (!/^([a-z])$/.test(message[i])) {
                result += message[i];
                continue;
            }
            let charCipher =
                (key.charCodeAt(count % key.length) - 97 + (message.charCodeAt(i) - 97)) % 26;
            result += String.fromCharCode(charCipher + 97);
            count++;
        }
        
        result = result.toUpperCase();

        // not to slow down long tests
        if (message.length < 5)
            console.log(`message: ${message}  key: ${key} result: ${result}`);

        return result;
    }

    decrypt(encryptedMessage, key) {
        // `encryptedMessage` (`string` to decode) and `key` (`string`-keyword)
        if (arguments.length < 2) {
            throw new Error("Error");
        }
        encryptedMessage = encryptedMessage.toLowerCase();
        key = key.toLowerCase();

        let result = "";
        let count = 0;
        for (let i = 0; i < encryptedMessage.length; i++) {
            if (!/^([a-z])$/.test(encryptedMessage[i])) {
                result += encryptedMessage[i];
                continue;
            }
            let charMess =
                (encryptedMessage.charCodeAt(i) -
                    97 -
                    (key.charCodeAt(count % key.length) - 97) +
                    26) %
                26;
            result += String.fromCharCode(charMess + 97);
            count++;
        }
        result = result.toUpperCase();
        
        // not to slow down long tests
        if (encryptedMessage.length < 5)
            console.log(
                `encMessage: ${encryptedMessage} key:${key} result: ${result}`
            );
        return result;
    }
}

module.exports = VigenereCipheringMachine;
