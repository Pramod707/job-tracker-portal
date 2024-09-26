import jwt from 'jsonwebtoken';
import config from '../config/config';

interface TokenPayload {
    email: string;
    verified: boolean;
    name: string | undefined
}

// Function to set token
const setToken = (email: string, verified: boolean, name: string | undefined): string | null => {
    try {
        const token = jwt.sign({ email, verified, name }, config.JWT_SECRET!, { expiresIn: '7d' });
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
