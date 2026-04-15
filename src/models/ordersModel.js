import  mongoose from "mongoose";
const { Schema } = mongoose;

const orderSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        order_items: [{
            type: Schema.Types.ObjectId,
            ref: "OrderItem",
            required: true
        }],
        totalAmount: {
            type: Number,
            required: true
        },
        status: {
            type: String,
            enum: ["pending", "shipped", "delivered", "cancelled"],
            default: "pending"
        }
    },
    {
        timestamps: true
    }
);

export const Order = mongoose.model("Order", orderSchema);