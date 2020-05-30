import { Router } from 'express';
const router = Router();


import { listAccounts, CreateAccount } from '../controllers/accountsController'

// rutas /api/teams/
router.get('/', listAccounts);
router.post('/', CreateAccount);


export default router;