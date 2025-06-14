import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connection.on('connected', () => console.log("MongoDB connected"))
        await mongoose.connect(`${process.env.MONGO_URI}/blogbrew`);
    } catch (error) {
        console.error("Error in connecting MONGODB:- ", error )
    }
}

export default connectDB;