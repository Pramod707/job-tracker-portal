import jwt from 'jsonwebtoken';
import config from '../config/config';

// Define the type for the User object
interface User {
    email: string;
}

// Define the type for the token payload
interface TokenPayload {
    email: string;
}

// Function to set token
const setToken = (user: User): string | null => {
    try {
        const token = jwt.sign({ email: user.email }, config.JWT_SECRET!, { expiresIn: '7d' });
        return token;
    } catch (err) {
        console.error(err);
        return null;
    }
};

// Function to get user from token
const getUser = (token: string): TokenPayload | null => {
    try {
        if (!token) return null;
        return jwt.verify(token, config.JWT_SECRET!) as TokenPayload;
    } catch (error: Error | any) {
        console.log(error.message);
        return null;
    }
};

export { setToken, getUser };
