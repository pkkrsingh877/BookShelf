import mongoose, { Schema } from 'mongoose';

const bookSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'Author'
    },
    rating: {
        type: Number,
        min: [1, "rating can't be less than 1"],
        max: [5, "rating can't be more than 5"],
        default: 1,
        required: true
    },
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review'
    }]
}, { timestamps: true});

const Book = mongoose.model('Book', bookSchema);

export default Book;