import jwt from 'jsonwebtoken';
import config from '../config/config';
import logger from '../util/logger';

interface TokenPayload {
    email: string;
    verified: boolean;
    name: string | undefined,
    role: string
}

// Function to set token
const setToken = (email: string, verified: boolean, name: string | undefined, role: string = 'student'): string | null => {
    try {
        const token = jwt.sign({ email, verified, name, role }, config.JWT_SECRET!, { expiresIn: '7d' });
        return token;
    } catch (err) {
        logger.error(err);
        return null;
    }
};

// Function to get user from token
const getUser = (token: string): TokenPayload | null => {
    try {
        if (!token) return null;
        return jwt.verify(token, config.JWT_SECRET!) as TokenPayload;
    // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
    } catch (error: Error | unknown) {
        logger.error(error);
        return null;
    }
};

export { setToken, getUser };
