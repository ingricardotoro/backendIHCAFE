import { Router } from "express";
const router = Router();

import { Listcoins, createCoin, deleteCoin, findOneCoin } from "../controllers/coinscontroller";

router.post("/", createCoin);
router.post("/delete/:id", deleteCoin);
router.get("/", Listcoins);
router.get("/:id", findOneCoin);

export default router;
