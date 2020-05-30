import { Router } from 'express';
const router = Router();


import { listAccounts, CreateAccount, deleteAccount } from '../controllers/accountsController'

// rutas /api/teams/
router.get('/', listAccounts);
router.post('/', CreateAccount);
router.post('/delete/:id', deleteAccount)

export default router;