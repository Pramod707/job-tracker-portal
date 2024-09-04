import otpGeneratorLib from 'otp-generator';

function otpGenerator(): string {
    return otpGeneratorLib.generate(4, { 
        upperCaseAlphabets: false, 
        specialChars: false, 
        lowerCaseAlphabets: false,
        digits: true 
    });
}

export { otpGenerator };
