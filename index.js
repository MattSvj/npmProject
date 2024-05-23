const cryptoRandomString = require('crypto-random-string');

function generatePassword(length = 12, options = { letters: true, numbers: true, symbols: false }) {
    const characters = (options.letters ? 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ' : '') +
                      (options.numbers ? '0123456789' : '') +
                      (options.symbols ? '!@#$%^&*_-+=' : '');

    return cryptoRandomString({ length, characters });
}

module.exports = generatePassword;