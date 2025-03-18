import mongoose from "mongoose";
import 'dotenv/config';

export const connectDB = async () => {

    const username = process.env.DB_USERNAME;
    const password = process.env.DB_PASSWORD;

    const url = `mongodb+srv://<${username}>:<${password}>@backend-db.4dyny.mongodb.net/?retryWrites=true&w=majority&appName=backend-db`;
    try {
        const connection = await mongoose.connect(url);
    } catch (err: any) {
        console.error(err.message);
    }
}