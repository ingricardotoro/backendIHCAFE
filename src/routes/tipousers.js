import { Router } from "express";
const router = Router();

import { listTipoUsers } from "../controllers/tipousersController";


router.get("/", listTipoUsers);
//router.post("/register", register);


export default router;