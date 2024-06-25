import dotenv from "dotenv";
import connectDB from "./db/index.js";

// Correct the path if your .env file is in the root directory
dotenv.config({
    path:'.env'
});

// Console log to check the environment variable
console.log("MONGODB_URI from .env:", process.env.MONGODB_URI);

connectDB();
