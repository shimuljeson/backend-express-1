import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const databaseConnection = async () => {
    try {
        const conn = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        console.log(`MONGODB CONNECTED: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Something went wrong while connecting to database!`, error);
    }
};

export default databaseConnection;
