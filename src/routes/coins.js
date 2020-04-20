import { Router } from "express";
const router = Router();

import { Listcoins } from "../controllers/coinscontroller";

//router.post("/api/coins", categoriesbyid);
router.get("/", Listcoins);

/*router.get('/categories_childs/:id',categories_childs);// para obtener todas las categorias hijas dado el id del padre
router.get('/child/:id',childbyid); // para solicitar una clasificacion hijo en especifico*/

export default router;
