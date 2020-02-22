import {Router} from 'express';
const router = Router();


import {listTeams} from '../controllers/teamsController'

// rutas /api/teams/
router.get('/',listTeams);


export default router;