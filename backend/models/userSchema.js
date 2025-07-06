import mongoose, { Schema } from 'mongoose';

const userSchema = Schema({
    username: {
        type: String,
        unique: [true, "username already taken!"],
        required: [true, "username required!"],
        minLength: [3, "username should be >= 3"],
        maxLength: [20, "username should be <= 20"]
    },
    password: {
        type: String,
        minLength: [8, "password length must be >= 8"],
        maxLength: [255, "password length must be <= 255"]
    },
    role: {
        type: String,
        enum: ['user', 'moderator', 'admin'],
        default: 'user'
    },
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review'
    }],
    books: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book'
    }]
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

export default User;