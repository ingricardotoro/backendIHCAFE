import { Router } from "express";
const router = Router();

import { Listcoins, createCoin, deleteCoin } from "../controllers/coinscontroller";

router.post("/", createCoin);
router.post("/delete/:id", deleteCoin);
router.get("/", Listcoins);

export default router;
