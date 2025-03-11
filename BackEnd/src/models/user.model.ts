import mongoose from "mongoose";

export interface UserDocument extends mongoose.Document {
  email: string;
  password: string;
  verified: boolean;
  createAt: Date;
  updateAt: Date;
  comparePassword(val: string): Promise<boolean>;
}

const userSchema = new mongoose.Schema<UserDocument>({
    email: { type: String, unique: true, required: true},
    
})