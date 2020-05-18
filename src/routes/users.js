import { Router } from "express";
const router = Router();

import { register, listUsers } from "../controllers/usersController";


router.get("/", listUsers);
router.post("/register", register);


export default router;