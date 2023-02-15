import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/auth.js"
const app = express()
dotenv.config()

const connect = async ()=> {
try {
  await mongoose.connect(process.env.MONGO);
  console.log("Connected to MongoDB")
} catch (error) {
  handleError(error);
}
};

mongoose.connection.on("disconnected",()=>{
    console.log("MongoDB connection disconnected")
})

//middlewares right here
app.use("/api/auth", authRoute)
app.use("/api/user", usersRoute)

app.listen(8800,()=>{
    connect()
    console.log("Connected to backend server!")
})