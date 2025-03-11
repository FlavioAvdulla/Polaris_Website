import mongoose from "mongoose";
import { hashValue } from "../utils/bcrypt";

export interface UserDocument extends mongoose.Document {
  email: string;
  password: string;
  verified: boolean;
  createAt: Date;
  updateAt: Date;
  comparePassword(val: string): Promise<boolean>;
}

const userSchema = new mongoose.Schema<UserDocument>(
  {
    email: { type: String, unique: true, required: true },
    password: { type: String, reuqired: true },
    verified: { type: Boolean, required: true, default: false },
  },
  {
    timestamp: true,
  }
);

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        return next()
    }
  this.password = await hashValue(this.password)
  next();
});

userSchema.methods.comparePassword = async function(val: string) {
    return compareValue(val, this.password)
}
