import {Router} from 'express';
const router = Router()

import {ListSuppliers} from '../controllers/suppliersController'

router.get('/',ListSuppliers); // para poder listar todos los proveedores

export default router;