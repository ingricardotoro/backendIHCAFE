import {Router} from 'express';
const router = Router();

import {createProjects,listProjects,findProject,deleteProject,updateProject,findProjectsByBudgetId } from '../controllers/projectsController';
// rutas /api/projets
router.post('/', createProjects);
router.get('/', listProjects);
router.get('/:id', findProject);
router.post('/findProjectsByBudgetId/:id', findProjectsByBudgetId);
router.delete('/:id', deleteProject);
router.put('/:id', updateProject);

export default router;

