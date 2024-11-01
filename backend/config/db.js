import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://afeefa:afeefa123@cluster0.raczw.mongodb.net/Food-and-Drink')
    .then(()=>console.log('DB Connected'));
}