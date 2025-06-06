import mongoose, { Schema, Document } from "mongoose";

export interface IProduct extends Document {
  _id: string;
  image: string;
  rating: number;
  normalPrice: string;
  title: string;
  description: string;
  quantity: number;
  available: string;
  quantitySold: number;
  sold: string;
  info: string;
}

const ProductSchema: Schema = new Schema(
  {
    _id: { type: String, required: true },
    image: { type: String, required: true },
    rating: { type: Number, required: true, default: 0 },
    normalPrice: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    quantity: { type: Number, required: true, default: 0 },
    available: { type: String, required: true },
    quantitySold: { type: Number, required: true, default: 0 },
    sold: { type: String, required: true },
    info: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<IProduct>("Product", ProductSchema);