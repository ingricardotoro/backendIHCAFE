import { Router } from "express";
const router = Router();

import { ListConversionsByCoinId, createConversion, deleteConversion } from "../controllers/conversionsController";

router.post("/", createConversion);
router.post("/delete/:id", deleteConversion);
router.get("/:id", ListConversionsByCoinId);
//router.get("/:id", findOneConversions);

export default router;