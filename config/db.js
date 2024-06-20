import mongoose  from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

//all mongoose methods are async
const connectDB = async() => { 
    try {
        const conn = await mongoose.connect('mongodb+srv://adminportal:admin1234@admincluster.aeek2ya.mongodb.net/?retryWrites=true&w=majority')

        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

export {connectDB as default}