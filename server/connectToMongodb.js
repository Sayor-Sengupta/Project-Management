import mongoose from "mongoose";
const connectMongoDb = async ()=>{
    try {
            await mongoose.connect(process.env.MONGODB)
            console.log('MongoDb connected');
    } catch (error) {
        console.log("error while connecting MongoDb",error.message);
    }
}

export {connectMongoDb}