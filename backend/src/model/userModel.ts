import { Schema, Model, model } from 'mongoose';
import { IUser } from '../types/types';

const UserSchema: Schema<IUser> = new Schema<IUser>({
    name: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        validate: {
            validator: function (v: string): boolean {
                return /^\S+@\S+\.\S+$/.test(v);
            },
            message: (props: { value: string }) => `${props.value} is not a valid email!`,
        },
    },
    role: {
        type: String,
        enum: ['student', 'admin', 'hr', 'placements'],
        default: 'student',
    },
    phoneNumber: {
        type: String,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    studentDetails: {
        type: Schema.Types.ObjectId,
        ref: 'studentDetails',
    },
    otp: {
        type: String,
    },
    verified: {
        type: Boolean,
        default: false,
    },
    OtpExpiresAt: Date,
    resetPasswordToken: String,
    resetPasswordExpiresAt: Date
}, {
    timestamps: true,
});

const User: Model<IUser> = model<IUser>('User', UserSchema);
export default User;
