import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://aflavio4366:43664366@cluster0.ifcq4.mongodb.net/Polaris_Website"
    )
    .then(() => console.log("DB Connected"));
};
