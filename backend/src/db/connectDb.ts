import mongoose from "mongoose";
import config from "../config/config";

const mongoURI: string | undefined = config.MONGO_URI;
const db = async () => {
    try {
        const connection = await mongoose.connect(mongoURI!);
        console.log("Connected to MongoDB: ", connection.connection.host);
    } catch (error: Error | any) {
        console.log(error.message);
    }
}

export default db;