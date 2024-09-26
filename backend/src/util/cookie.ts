import { Request, Response } from "express";

export const setCookie = (res: Response, token: string | null) => {
    res.cookie('token', token, {
        httpOnly: true,
        secure: process.env.ENV === "production",
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000,
    });
}

export const getCookie = (req: Request): string | undefined => {
    return req.cookies.token;  // returns the value of the cookie or undefined if not found
}