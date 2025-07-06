import mongoose, { Schema } from 'mongoose';

const reviewSchema = new Schema({
    bookId: {
        type: Schema.Types.ObjectId,
        ref: 'Book'
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    rating: {
        type: Number,
        min: [1, "rating can't be less than 1"],
        max: [5, "rating can't be more than 5"],
        default: 1,
        required: true
    },
    reviewText: {
        type: String,
        required: true
    }
}, { timestamps: true});

const Review = mongoose.model('Review', reviewSchema);

export default Review;