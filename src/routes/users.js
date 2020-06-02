import { Router } from "express";
const router = Router();

import { register, listUsers, login, deleteUser } from "../controllers/usersController";


router.get("/", listUsers);
router.post("/register", register);
router.post("/login", login);
router.post("/delete/:id", deleteUser);


export default router;