import mongoose, { Document, Model, Schema } from "mongoose";

interface OrderDocument extends Document {
    userId: string;
    items: any[];
    amount: number;
    address: object;
    status?: string;
    date?: Date;
    payment?: boolean;
}

const orderSchema: Schema = new mongoose.Schema({
    userId:  { type: String, required: true },
    items:   { type: Array, required: true },
    amount:  { type: Number, required: true },
    address: { type: Object, required: true },
    status:  { type: String, default: "Product Processing" },
    date:    { type: Date, default: Date.now },
    payment: { type: Boolean, default: false }
});

const orderModel: Model<OrderDocument> = mongoose.models.order || mongoose.model<OrderDocument>("order", orderSchema);

export default orderModel;
