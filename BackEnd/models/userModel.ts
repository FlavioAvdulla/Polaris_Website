import mongoose, { Document, Model, Schema } from "mongoose";

interface UserDocument extends Document {
    name: string;
    email: string;
    password: string;
    cartData?: object;
}

const userSchema: Schema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
})