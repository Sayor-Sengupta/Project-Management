import express from "express";
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import cors from "cors"
import { connectMongoDb } from "./connectToMongodb.js";
import authRoutes from './routes/userRoutes.js'
import taskRoutes from './routes/taskRoutes.js'
import { app ,server,io} from "./utils/socketIo.js";




dotenv.config();
const PORT = process.env.PORT || 3000;

app.use(cors({origin:'http://localhost:5173',credentials:true}))
app.use(cookieParser())
app.use(express.json())
app.use('/api/users',authRoutes)
app.use('/api/project',taskRoutes)


server.listen(PORT,()=>{
    connectMongoDb()
    console.log(`server is running ${PORT}`);
}) 

