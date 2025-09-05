import mongoose from "mongoose";

export const connectdb = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MONGODB CONNECTED SUCCESSFULLY");
    }catch(error){
        console.log("Error Connecting to MONGODB", error);
        process.exit(1); //exit with failure
    }
}