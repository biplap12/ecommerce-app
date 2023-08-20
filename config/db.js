import mongoose from 'mongoose'
import colors from 'colors'
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connect TO MongoDb ${conn.connection.host}`.bgMagenta.white);
    } catch (error) {
        console.log(`Error in Mongidb ${error}`.bgRed.bgWhite)
        
    }
};
 
export  default connectDB;
