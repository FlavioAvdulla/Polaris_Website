import mongoose from "mongoose";
import { hashValue, compareValue } from "../utils/bcrypt";

export interface UserDocument extends mongoose.Document {
  _id: mongoose.Schema.Types.ObjectId;
  email: string;
  password: string;
  verified: boolean;
  createdAt: Date;
  updatedAt: Date;
  __v: number; // Add this line
  comparePassword(val: string): Promise<boolean>;
  omitPassword(): Pick<UserDocument, "_id" | "email" | "verified" | "createdAt" | "updatedAt" | "__v">;
}

const userSchema = new mongoose.Schema<UserDocument>(
  {
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    verified: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true,
  }
);

userSchema.pre<UserDocument>("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await hashValue(this.password);
  next();
});

userSchema.methods.comparePassword = async function (this: UserDocument, val: string) {
  return compareValue(val, this.password);
};

userSchema.methods.omitPassword = function (this: UserDocument) {
  const user = this.toObject();
  delete obj.password;
  return obj;
}

const UserModel = mongoose.model<UserDocument>("User", userSchema);

export default UserModel;
