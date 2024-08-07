import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user-routes";
import adminRouter from "./routes/admin-routes";
import movieRouter from "./routes/movie-routes";
import bookingRouter from "./routes/Booking-routes";
dotenv.config();
const app = express();
 
//middlewares
app.use(express.json());
app.use("/user",userRouter);
app.use("/admin",adminRouter);
app.use("/movie",movieRouter);
app.use("/booking",bookingRouter);


mongoose.connect
(`mongodb+srv:// <username>:${process}@cluster0.ywtim1f.mongodb.net/`)   //this error is runing in this code
.then(()=>
    app.listen(5000,()=>console.log("anuj")
)
)
.catch((e) => console.log(e)); 

