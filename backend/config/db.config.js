import mongoose from "./mongoose.js";

export const ConnectDB = async()=>{
    try{
        await mongoose.connect('mongodb://localhost:27017/taskmanager')

        console.log('the db is connected with ${mongoose.connection.host}');

    }catch(error){
        await mongoose.disconnect()
        process.exit(1)
    }
}