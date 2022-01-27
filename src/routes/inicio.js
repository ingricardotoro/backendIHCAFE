import { Router } from 'express';
const router = Router();

import { showInicio } from '../controllers/inicioController';

// rutas /api/teams/
router.get('/', showInicio);
/*router.get('/:id', findOneTeam);
router.post('/', createTeam);
router.post('/delete/:id', deleteTeam);*/

export default router;