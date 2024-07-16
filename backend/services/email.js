const nodemailer= require('nodemailer');

async function emailService(email, OTP, username) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'tarun.jgs@gmail.com',
            pass: 'vnsa lwrh rfgl ywsg'
        }
    });

    const mailOptions = {
        from: {
            name: 'Job Tracker Portal',
            address: 'tarun.jgs@gmail.com',
        },
        to: email,
        subject: 'Confirm your OTP for Job Tracker Portal',
        text: `Hey ${username}! Here is your OTP: ${OTP}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        return false
    }
    return true;
}

module.exports={
    emailService
};