import { Router } from 'express';
const router = Router()

import { listSuppliers, createSupplier, deleteSupplier } from '../controllers/suppliersController'

router.get('/', listSuppliers);
router.post('/', createSupplier);
router.post('/delete/:id', deleteSupplier);

export default router;