import { model, Schema } from "mongoose";

export interface Category {
    _id: string
    name: string;
    createdAt?: Date;
    updatedAt?: Date;
}

const categorySchema = new Schema<Category>({
    name: {type: String, required: true}
}, {
    timestamps: true
})

export const CategoryModel = model<Category>("Category", categorySchema);