import { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const userSchema = new Schema(
    {
        first_name: {
            type: String,
            required: true
        },
        last_name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        phone: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});
userSchema.methods.ispasswordcorrect =  async function (enteredpassword) {
    return await bcrypt.compare(enteredpassword, this.password);
};
userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ 
        id: this._id,
        email: this.email,
        first_name: this.first_name,
        last_name: this.last_name

    }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });
    return token;
};
userSchema.methods.generateRefreshToken = function () {
    const refreshToken = jwt.sign({ 
        id: this._id

    }, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN
    });
    return refreshToken;
};
export const User = mongoose.model("User", userSchema);