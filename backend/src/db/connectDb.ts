import mongoose from "mongoose";
import config from "../config/config";

const mongoURI: string | undefined = process.env.MON;
const db = async () => {
    try {
        const connection = await mongoose.connect(mongoURI!);
    } catch (error: Error | any) {
        console.log(error.message);
    }
}

export default db;