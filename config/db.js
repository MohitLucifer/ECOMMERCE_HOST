import mongoose from 'mongoose'
import colors from 'colors'
const ConnectDB = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`connected to mongodb ${conn.connection.host}`);
    }
    catch(error){
        console.log(`error in mongodb ${error}`.bgRed.white);
    }
}
export default ConnectDB;