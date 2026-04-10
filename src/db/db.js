import dns from "node:dns";
import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async () => {
    try {
        if (process.env.MONGODB_URL?.startsWith("mongodb+srv://")) {
            dns.setServers(["8.8.8.8", "1.1.1.1"]);
            console.log("Using DNS servers for MongoDB: 8.8.8.8, 1.1.1.1");
        }

        const connectionInstance = await mongoose.connect(
            `${process.env.MONGODB_URL}/${DB_NAME}`
        );

        console.log(
            `MONGODB CONNECTION SUCCESSFUL DB HOST: ${connectionInstance.connection.host}`
        );
    } catch (error) {
        console.log("MONGODB CONNECTION ERROR", error);
        process.exit(1);
    }
};

export default connectDB;
