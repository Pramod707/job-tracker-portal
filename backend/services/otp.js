const otp = require('otp-generator');

function otpGenerator() {
    return otp.generate(4, { 
        upperCaseAlphabets: false, 
        specialChars: false, 
        lowerCaseAlphabets: false,
        digits: true 
    });
}

module.exports = { otpGenerator };
