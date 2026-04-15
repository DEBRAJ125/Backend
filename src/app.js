import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config({ path: "./.env" });

const app = express();
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}));
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(express.static("public"));
app.use(cookieParser());


//routes import
import userRoutes from "./routes/user.routes.js";

//routes declaration
app.use("/api/v1/users", userRoutes);

export {app}
