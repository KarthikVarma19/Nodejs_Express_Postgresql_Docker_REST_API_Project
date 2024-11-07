import express from 'express';
import { createUser, deleteUser, getAllUsers, getUserById, updateUser } from '../controllers/userController.js';
import validateuser from '../middlewares/inputValidator.js';

const router = express.Router();

router.get("/user", getAllUsers);
router.post("/user",validateuser, createUser);
router.get("/user/:id",getUserById);
router.put("/user/:id",validateuser, updateUser);
router.delete("/user/:id",deleteUser);

export default router;