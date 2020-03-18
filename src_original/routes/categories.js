import {Router} from 'express';
const router = Router();


import {categoriesbyid,categoriesparents,categories_childs,childbyid} from '../controllers/categoriesController'

router.post('/categoriesbyid/:id',categoriesbyid);
router.get('/categories_parents',categoriesparents);

router.get('/categories_childs/:id',categories_childs);// para obtener todas las categorias hijas dado el id del padre
router.get('/child/:id',childbyid); // para solicitar una clasificacion hijo en especifico




export default router;

