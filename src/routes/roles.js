import { Router } from 'express';
const router = Router();


import { listRole } from '../controllers/roleController'

// rutas /api/teams/
router.get('/', listRole);
/*router.get('/:id', findOneTeam);
router.post('/', createTeam);
router.post('/delete/:id', deleteTeam);*/

export default router;