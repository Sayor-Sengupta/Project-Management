import express from "express";
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import cors from "cors"
import { connectMongoDb } from "./connectToMongodb.js";
import authRoutes from './routes/userRoutes.js'

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;

app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use('/api/users',authRoutes)


app.listen(PORT,()=>{
    connectMongoDb()
    console.log(`server is running ${PORT}`);
})
