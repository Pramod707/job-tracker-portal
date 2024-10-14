import mongoose, { Document } from 'mongoose'

export type THttpResponse = {
    success: boolean
    statusCode: number
    request: {
        ip?: string | null
        method: string
        url: string
    }
    message: string
    data: unknown
}

export type THttpError = {
    success: boolean
    statusCode: number
    request: {
        ip?: string | null
        method: string
        url: string
    }
    message: string
    data: unknown
    trace?: object | null
}

export interface IUser extends Document {
    name?: string;
    email: string;
    role: string;
    phoneNumber?: string;
    password: string;
    studentDetails?: mongoose.Types.ObjectId;
    otp: string|undefined;
    verified: boolean;
    createdAt: Date;
    updatedAt: Date;
    resetPasswordToken?: string;
    resetPasswordExpiresAt?: Date;
    OtpExpiresAt: Date;
}
