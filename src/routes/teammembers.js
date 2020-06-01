import { Router } from 'express';
const router = Router();

import { listTeamMembersByTeamId, deleteTeammember } from '../controllers/teammembersController'

// rutas /api/teams/
router.get('/:id', listTeamMembersByTeamId);
//router.get('/:id', findOneTeam);
//router.post('/', createTeam);
router.post('/delete/:id', deleteTeammember);

export default router;