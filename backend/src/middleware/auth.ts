import { NextFunction, Request, Response } from "express";

import { getUser } from '../service/token';

interface CustomRequest extends Request {
    user?: string
}

function auth(req: CustomRequest, res: Response, next: NextFunction) {
    const token = req.headers.authorization?.split(' ')[1];
    if (token) {
        const payload = getUser(token);
        if (payload?.email!) {
            req.user = payload.email;
            next();
        } else {
            res.status(401).json({ success: false, message: 'Unauthorized' });
        }
    } else {
        res.status(401).json({ success: false, message: 'Unauthorized' });
    }
}

export default auth;