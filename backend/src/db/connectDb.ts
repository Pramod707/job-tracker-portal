import mongoose from 'mongoose';
import config from '../config/config';
import logger from '../util/logger';

const mongoURI: string | undefined = config.MONGO_URI;
const db = async () => {
    try {
        const connection = await mongoose.connect(mongoURI!);
        logger.info('Connected to MongoDB',{
            connection
        })
    // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
    } catch (error: Error | unknown) {
        logger.error(error);
    }
}

export default db;