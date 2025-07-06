import { Router } from "express";
import { loginUser, signupUser, deleteUser, updateUser } from '../controllers/userController.js';

const router = Router();

router.post('/login', loginUser);
router.post('/signup', signupUser);

router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;
