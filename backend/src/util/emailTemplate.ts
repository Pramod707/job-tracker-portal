export const VERIFICATION = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OTP Verification</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .header {
            text-align: center;
            padding: 10px;
            background-color: #4CAF50;
            color: white;
            border-radius: 10px 10px 0 0;
        }
        .content {
            margin: 20px 0;
        }
        .otp {
            font-size: 24px;
            font-weight: bold;
            color: #333333;
            text-align: center;
            margin: 20px 0;
        }
        .footer {
            text-align: center;
            margin-top: 20px;
            color: #888888;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
        <h1>Job Tracker Portal</h1>
        <h2>OTP Verification</h2>
        </div>
        <div class="content">
            <p>Dear {username},</p>
            <p>Please use the OTP below to verify your email address.</p>
            <div class="otp">{OTP}</div> 
            <p>If you did not request this, please ignore this email.</p>
        </div>
        <div class="footer">
            <p>Thank you for using our service!</p>
        </div>
    </div>
</body>
</html>`

export const WELCOME = ``
export const RESET_PASSWORD = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reset Password</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
        .header {
            text-align: center;
            padding: 10px;
            background-color: #4CAF50;
            color: white;
            border-radius: 10px 10px 0 0;
        }
        .content {
            margin: 20px 0;
        }
        .otp {
            font-size: 24px;
            font-weight: bold;
            color: #333333;
            text-align: center;
            margin: 20px 0;
        }
        .footer {
            text-align: center;
            margin-top: 20px;
            color: #888888;
        }
        /* Button Styling */
        .btn-reset {
            display: inline-block;
            background-color: #4CAF50;
            color: white;
            padding: 12px 20px;
            text-align: center;
            font-size: 16px;
            font-weight: bold;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            text-decoration: none;
            transition: background-color 0.3s ease;
        }
        .btn-reset:hover {
            background-color: #45a049;
        }
        /* Ensure button link styles are consistent */
        .btn-reset a {
            color: white;
            text-decoration: none;
        }
        /* Responsive Design */
        @media (max-width: 600px) {
            .container {
                padding: 10px;
            }
            .btn-reset {
                padding: 10px 15px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Job Tracker Portal</h1>
            <h2>Reset Your Password</h2>
        </div>
        <div class="content">
            <p>Dear {username},</p>
            <p>Click on the below reset link to reset your password:</p>
            
            <a href="{resetURL}" style="background-color:#4CAF50; color:white; padding:12px 20px; border-radius:5px; display:inline-block; text-align:center;  text-decoration: none;">Reset Password</a>

            <p>If you did not request this, please ignore this email.</p>
        </div>
        <div class="footer">
            <p>Thank you for using our service!</p>
        </div>
    </div>
</body>
</html>`
export const PASSWORD_RESET_SUCCESS = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Password Reset Successful</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .header {
            text-align: center;
            padding: 10px;
            background-color: #4CAF50;
            color: white;
            border-radius: 10px 10px 0 0;
        }
        .content {
            margin: 20px 0;
        }
        .otp {
            font-size: 24px;
            font-weight: bold;
            color: #333333;
            text-align: center;
            margin: 20px 0;
        }
        .footer {
            text-align: center;
            margin-top: 20px;
            color: #888888;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
        <h1>Job Tracker Portal</h1>
        <h2>Password Reset Successful</h2>
        </div>
        <div class="content">
            <p>Dear {username},</p>
            <p>Your password has been successfully reset.</p>
            <p>You can now login with your new password.</p>

            <p>If you did not request this, please ignore this email.</p>
        </div>
        <div class="footer">
            <p>Thank you for using our service!</p>
        </div>
    </div>
</body>
</html>`
export const FORGOT_PASSWORD = ``