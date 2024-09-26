import { NextFunction, Request, Response } from "express";

import { getUser } from '../service/token';
import { getCookie } from '../util/cookie'

function auth(req: Request, res: Response, next: NextFunction) {
    const token = getCookie(req);

    if (token) {
        const payload = getUser(token);
        if (payload) {
            req.user = payload;
            next();
        } else {
            res.status(401).json({ success: false, message: 'Unauthorized' });
        }
    } else {
        res.status(401).json({ success: false, message: 'Unauthorized' });
    }
}

export default auth;