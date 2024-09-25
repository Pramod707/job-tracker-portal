import { Request, Response } from "express";

export const setCookie = (res: Response, cookieName: string, token: string | null) => {
    res.cookie(cookieName, token, {
        httpOnly: true,
        secure: process.env.ENV === "production",
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000,
    });
}

export const getCookie = (req: Request, cookieName: string): string | undefined => {
    return req.cookies?.[cookieName];  // returns the value of the cookie or undefined if not found
}