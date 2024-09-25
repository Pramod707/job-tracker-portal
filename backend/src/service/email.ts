import nodemailer from 'nodemailer';
import { VERIFICATION, WELCOME, RESET_PASSWORD, FORGOT_PASSWORD } from '../util/emailTemplate';

interface EmailServiceOptions {
    email: string;
    OTP: string;
    username: string;
}
interface WelcomeEmailServiceOptions {
    email: string;
    username: string;
}

async function createTransporter() {
    return nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_ID,
            pass: process.env.EMAIL_APP_PASSWORD
        },
    });
}

async function sendEmail(email: string, subject: string, html: string): Promise<boolean> {
    const transporter = await createTransporter();
    const mailOptions = {
        from: {
            name: 'Job Tracker Portal',
            address: 'tarun.jgs@gmail.com',
        },
        to: email,
        subject,
        html,
    };

    try {
        await transporter.sendMail(mailOptions);
        return true;
    } catch (error) {
        console.error('Error sending email:', error);
        return false;
    }
}

async function sendVerificationEmail({ email, OTP, username }: EmailServiceOptions): Promise<boolean> {
    const subject = 'Job Tracker Portal - Verification';
    const html = VERIFICATION.replace('{OTP}', OTP).replace('{username}', username);
    return await sendEmail(email, subject, html);
}

async function sendWelcomeEmail({ email, username }: WelcomeEmailServiceOptions): Promise<boolean> {
    const subject = 'Job Tracker Portal - Welcome';
    const html = WELCOME.replace('{username}', username);
    return await sendEmail(email, subject, html);
}

async function sendResetPasswordEmail({ email, OTP, username }: EmailServiceOptions): Promise<boolean> {
    const subject = 'Job Tracker Portal - Reset Password';
    const html = RESET_PASSWORD.replace('{OTP}', OTP || '').replace('{username}', username);
    return await sendEmail(email, subject, html);
}

async function sendForgotPasswordEmail({ email, OTP, username }: EmailServiceOptions): Promise<boolean> {
    const subject = 'Job Tracker Portal - Forgot Password';
    const html = FORGOT_PASSWORD.replace('{OTP}', OTP || '').replace('{username}', username);
    return await sendEmail(email, subject, html);
}

export { sendVerificationEmail, sendWelcomeEmail, sendResetPasswordEmail, sendForgotPasswordEmail };
