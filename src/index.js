// require("dotenv").config({ path: "./.env" });
// import { configDotenv } from "dotenv";
import mongoose from "mongoose";
import { DB_NAME } from "./constant.js";
import express from "express";
import connectDB from "./db/db.js";
import dotenv from "dotenv";
// configDotenv({ path: "./env" });
dotenv.config({ path: "./.env" });
connectDB()
.then(() => {
    const app = express();
    app.on("error", (error) => {
        console.log("Error", error);
        throw error;
    });
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
})
.catch((error) => {
    console.log("Error", error);
    throw error;
});



























// const app = express();
// ; (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//         app.on("error", (error) => {    
//             console.log("Error",error)
//             throw error
//         })    
//         app.listen(process.env.PORT, () => {
//             console.log(`Server is running on port ${process.env.PORT}`)
//         })
//     }
//     catch (error) {
//         console.log("Error",error)
//         throw error
//     }
// }
// )()