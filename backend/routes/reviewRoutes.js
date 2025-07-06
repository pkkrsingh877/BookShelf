import { Router } from "express";
import { getReviews, postReview, updateReview, deleteReview } from '../controllers/reviewController.js';

const router = Router();

router.get('/', getReviews);
router.post('/', postReview);

router.delete('/:id', deleteReview);
router.patch('/:id', updateReview);

export default router;