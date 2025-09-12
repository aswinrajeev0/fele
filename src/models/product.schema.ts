import { model, ObjectId, Schema } from "mongoose";

export interface Product {
    productName: string;
    price: number;
    productImage: string;
    brand: string;
    categoryId: ObjectId;
    createdAt?: Date;
    updatedAt?: Date;
}

const productSchema = new Schema<Product>({
    productName: {type: String, required: true},
    price: {type: Number, required: true},
    productImage: {type: String, required: true},
    brand: {type: String},
    categoryId: {type: Schema.ObjectId, ref: "Category", required: true}
}, {
    timestamps: true
})

export const ProductModel = model<Product>("Product", productSchema);