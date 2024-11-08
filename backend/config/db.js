import mongoose from "mongoose";


export const connectDB = async() =>{
    await mongoose.connect('mongodb+srv://hoanghung32163:22112002@cluster0.ekln2.mongodb.net/HANOI-FOOD').then(()=>console.log("ket noi thanh cong"));
}