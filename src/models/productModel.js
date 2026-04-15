import  mongoose from "mongoose";
const { Schema } = mongoose;

const productSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        category: {
            type: Schema.Types.ObjectId,
            ref: "Category",
            required: true
        },
        stock: {
            type: Number,
            required: true,
            min: 0
        }
    },
    {
        timestamps: true
    }
);

export const Product = mongoose.model("Product", productSchema);