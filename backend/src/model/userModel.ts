import mongoose, { Document, Schema, Model, model } from 'mongoose';

interface IUser extends Document {
    name?: string;
    email: string;
    phoneNumber?: string;
    password: string;
    securityQuestions?: Array<{ question: string; answer: string }>;
    studentDetails?: mongoose.Types.ObjectId;
    otp: string;
    verified: boolean;
    createdAt: Date;
    updatedAt: Date;
}

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
    phoneNumber: {
        type: String,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    securityQuestions: {
        type: [
            {
                question: { type: String, required: true },
                answer: { type: String, required: true },
            },
        ],
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
}, {
    timestamps: true,
});

const User: Model<IUser> = model<IUser>('User', UserSchema);
export default User;
