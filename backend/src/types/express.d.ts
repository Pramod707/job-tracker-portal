import { Request } from 'express';
import 'express'

declare module 'express' {
    export interface Request {
        cookies: { [key: string]: string };
        user?: {
            email: string;
            verified: boolean;
            name: string | undefined
        };
    }
}