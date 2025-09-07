import mongoose, { Schema, Document } from "mongoose";

/**
 * Interface representing a Product document in MongoDB
 * Extends mongoose.Document to include Mongoose-specific properties and methods
 */
export interface IProduct extends Document {
  _id: string;
  image: string;
  rating: number;
  normalPrice: string;
  offerPrice: string;
  title: string;
  description: string;
  quantity: number;
  available: string;
  quantitySold: number;
  sold: string;
  info: string;
}

/**
 * Mongoose schema definition for the Product model
 * Defines the structure, types, and validation rules for product documents
 */
const ProductSchema: Schema = new Schema(
  {
    _id: { type: String, required: true },
    image: { type: String, required: true },
    rating: { type: Number, required: true, default: 0 },
    normalPrice: { type: String, required: true },
    offerPrice: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    quantity: { type: Number, required: true, default: 0 },
    available: { type: String, required: true },
    quantitySold: { type: Number, required: true, default: 0 },
    sold: { type: String, required: true },
    info: { type: String, required: true },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

/**
 * Mongoose model for the Product collection
 * Provides interface to interact with the products collection in MongoDB
 */
export default mongoose.model<IProduct>("Product", ProductSchema);