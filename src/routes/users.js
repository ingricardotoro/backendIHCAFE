import { Router } from "express";
const router = Router();

import { register, listUsers, login } from "../controllers/usersController";


router.get("/", listUsers);
router.post("/register", register);
router.post("/login", login);


export default router;