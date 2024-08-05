import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://ganeshh4419:pumatodb@cluster0.p7hkuta.mongodb.net/PUMATO').then(()=>console.log("DB Connected"));
}