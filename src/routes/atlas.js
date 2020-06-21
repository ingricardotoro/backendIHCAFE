import { Router } from 'express';
const router = Router();


import {
    atlas_resultados,
    atlas_productos,
    atlas_accounts,
    atlas_sub_accounts,
    find_sub_atlas_category

} from '../controllers/atlasController'

router.get('/resultados', atlas_resultados);// obtener los RESULTADOS ATLAS son de codigo 0
router.get('/productos/:id', atlas_productos);// para obtener todas los producots hijos dado el codigo atlas del resultado

router.get('/accounts', atlas_accounts);// obtener las cuentas ATLAS
router.get('/sub_accounts/:id', atlas_sub_accounts);// para obtener todas las sub categorias de una cuenta atlas dada

/**Para los reportes atlas */
router.get('/find_sub_atlas_category/:id', find_sub_atlas_category);// para obtener una de las sub categorias de una cuenta atlas dada


export default router;