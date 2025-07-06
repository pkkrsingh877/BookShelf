import mongoose, { Schema } from 'mongoose';

const authorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    about: {
        type: String,
        required: true
    },
    addedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    books: [{
        type: Schema.Types.ObjectId,
        ref: 'Book'
    }]
}, {timestamps: true});

const Author = new mongoose.Model('Author', authorSchema);

export default Author;