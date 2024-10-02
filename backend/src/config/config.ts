import dotenvFlow from 'dotenv-flow'

dotenvFlow.config()

export default {
    ENV: process.env.ENV,
    PORT: process.env.PORT,
    JWT_SECRET: process.env.JWT_SECRET,
    MONGO_URI: process.env.MONGO_URI,
    EMAIL_ID: process.env.EMAIL_ID,
    EMAIL_APP_PASSWORD: process.env.EMAIL_APP_PASSWORD
}
