import  mongoose from "mongoose";
const { Schema } = mongoose;

const cartItemSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        product: {
            type: Schema.Types.ObjectId,
            ref: "Product",
            required: true
        },
        quantity: {
            type: Number,
            required: true,
            min: 1
        }
    
    },
    {
        timestamps: true
    }
);

export const CartItem = mongoose.model("CartItem", cartItemSchema);