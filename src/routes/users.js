import { Router } from "express";
const router = Router();

import { register, listUsers, login, deleteUser, findUser } from "../controllers/usersController";


router.get("/", listUsers);
router.get("/:id", findUser);
router.post("/register", register);
router.post("/login", login);
router.post("/delete/:id", deleteUser);


export default router;