import {Router} from 'express';
const router = Router();


import {listAccounts} from '../controllers/accountsController'

// rutas /api/teams/
router.get('/',listAccounts);


export default router;