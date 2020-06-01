import { Router } from 'express';
const router = Router();


import { listTeams, createTeam, deleteTeam, findOneTeam } from '../controllers/teamsController'

// rutas /api/teams/
router.get('/', listTeams);
router.get('/:id', findOneTeam);
router.post('/', createTeam);
router.post('/delete/:id', deleteTeam);



export default router;