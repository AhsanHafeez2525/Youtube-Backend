import dotenv from "dotenv";
import connectDB from "./db/index.js";

// Correct the path if your .env file is in the root directory
dotenv.config({
    path:'.env'
});

// Console log to check the environment variable
console.log("MONGODB_URI from .env:", process.env.MONGODB_URI);

connectDB().then(() =>{
    app.listen(process.env.PORT || 8000, () =>{
       console.log(` Server is runnign at port : ${process.env.PORT}`); 
    })
}).catch((err) =>{
    console.log('MONGO db connection failed !!!', err)
})
