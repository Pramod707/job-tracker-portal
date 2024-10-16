import { NextFunction, Request, Response } from 'express';

import { getUser } from '../service/token';
import { getCookie } from '../util/cookie'
import httpError from '../util/httpError';

function auth(req: Request, _res: Response, next: NextFunction) {
    const token = getCookie(req);

    if (token) {
        const payload = getUser(token);
        if (payload) {
            req.user = payload;
            next();
        } else {
            httpError(next, new Error('Unauthorized'), req, 401);
        }
    } else {
        httpError(next, new Error('Unauthorized'), req, 401);
    }
}

export default auth;