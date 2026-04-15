import { Schema } from "mongoose";
const paymentSchema= new Schema({
   order_id: {
        type: String,
        required: true,
        unique: true,
        uuid: true
    },
    amount: {
        type: Number,
        required: true      
    },
    method: {
        type: String,
        enum: ["credit_card", "debit_card", "bank_transfer","cash_on_delivery","UPI"],
        default: "UPI"
    },
    status: {
        type: String,
        enum: ["pending", "completed", "failed"],
        default: "pending"
    }

},{timestamps:true})
export const  Payment = mongoose.model("Payment",paymentSchema)