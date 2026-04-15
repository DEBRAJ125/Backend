import  mongoose from "mongoose";
const { Schema } = mongoose;

const checkoutSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        product_items: [{
            product: {
            type: Schema.Types.ObjectId,
            ref: "Product",
            required: true
        },
        quantity: {
            type: Number,
            required: true
        },
        price: {
            type: Number,
            required: true
        }
        }],
        totalAmount: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
);

export const Checkout = mongoose.model("Checkout", checkoutSchema);