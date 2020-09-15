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

        console.log("message", message);

        let longKey = "";
        let flag = 0;
        let ind = "";

        for (let i = 0; i < message.length; i++) {
            if (!/^([a-z])$/.test(message[i])) {
                longKey += message[i];
                flag++;
                continue;
            }
            if (flag) {
                ind = (i - flag) % key.length;
            } else {
                ind = i % key.length;
            }
            longKey += key[ind];
        }

        let result = "";
        for (let i = 0; i < message.length; i++) {
            if (!/^([a-z])$/.test(message[i])) {
                result += message[i];
                continue;
            }
            let charCipher =
                (longKey.charCodeAt(i) - 97 + (message.charCodeAt(i) - 97)) %
                26;
            result += String.fromCharCode(charCipher + 97);
        }

        return result.toUpperCase();
    }

    decrypt(encryptedMessage, key) {
        // `encryptedMessage` (`string` to decode) and `key` (`string`-keyword)
        if (arguments.length < 2) {
            throw new Error("Error");
        }
        encryptedMessage = encryptedMessage.toLowerCase();
        key = key.toLowerCase();

        let longKey = "";
        let flag = 0;
        let ind = "";

        for (let i = 0; i < encryptedMessage.length; i++) {
            if (!/^([a-z])$/.test(encryptedMessage[i])) {
                longKey += encryptedMessage[i];
                flag++;
                continue;
            }
            if (flag) {
                ind = (i - flag) % key.length;
            } else {
                ind = i % key.length;
            }
            longKey += key[ind];
        }

        let result = "";
        for (let i = 0; i < encryptedMessage.length; i++) {
            if (!/^([a-z])$/.test(encryptedMessage[i])) {
                result += encryptedMessage[i];
                continue;
            }
            let charMess =
                ((encryptedMessage.charCodeAt(i) - 97) - (longKey.charCodeAt(i) - 97) + 26 ) % 26;
            result += String.fromCharCode(charMess + 97);


        }

        return result.toUpperCase();
    }
}

module.exports = VigenereCipheringMachine;
