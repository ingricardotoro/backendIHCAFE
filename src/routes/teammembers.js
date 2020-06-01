import { Router } from 'express';
const router = Router();

import { listTeamMembersByTeamId, deleteTeammember, createTeammember } from '../controllers/teammembersController'

// rutas /api/teams/
router.get('/:id', listTeamMembersByTeamId);
//router.get('/:id', findOneTeam);
router.post('/', createTeammember);
router.post('/delete/:id', deleteTeammember);

export default router;