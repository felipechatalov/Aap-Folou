import mongoose from 'mongoose';



console.log(process.env.MONGODB_ADMIN_USER)
console.log(process.env.MONGODB_ADMIN_PSW)


const MONGO_URI = "mongodb+srv://" + process.env.MONGODB_ADMIN_USER + ":" + process.env.MONGODB_ADMIN_PSW + "@aap-folou.a5xoyin.mongodb.net/?retryWrites=true&w=majority"

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(MONGO_URI, {});
    
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

export default connectDB;