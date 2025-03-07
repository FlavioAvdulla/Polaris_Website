import mongoose, { Document, Model, Schema } from "mongoose";

interface ProductDocument extends Document {
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
}

const productSchema: Schema = new mongoose.Schema({
    name:        { type: String, required: true },
    description: { type: String, required: true },
    price:       { type: Number, required: true },
    image:       { type: String, required: true },
    category:    { type: String, required: true }
});

const productModel: Model<ProductDocument> = mongoose.models.product || mongoose.model<ProductDocument>("product", productSchema);

export default productModel;
