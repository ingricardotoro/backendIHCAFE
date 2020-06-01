import { Router } from 'express';
const router = Router();


import { listTeams, createTeam, deleteTeam } from '../controllers/teamsController'

// rutas /api/teams/
router.get('/', listTeams);
router.post('/', createTeam);
router.post('/delete/:id', deleteTeam);


export default router;