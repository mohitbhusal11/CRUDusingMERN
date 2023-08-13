import mongoose from "mongoose";

// Create a counter schema for generating auto-incremented userId
const counterSchema = mongoose.Schema({
    _id: { type: String, required: true },
    seq: { type: Number, default: 0 },
});
  
const Counter = mongoose.model("Counter", counterSchema);

// Create a user schema with pre-save middleware for auto-incrementing userId
const userSchema = mongoose.Schema({
    userId: { type: Number, unique: true },
    name: String,
    username: String,
    email: String,
    phone: String,
});

userSchema.pre("save", async function (next) {
    try {
        const counter = await Counter.findByIdAndUpdate(
            { _id: "userId" },
            { $inc: { seq: 1 } },
            { new: true, upsert: true }
        );
        this.userId = counter.seq;
        next();
    } catch (error) {
        return next(error);
    }
});

const User = mongoose.model("User", userSchema);

export default User;
