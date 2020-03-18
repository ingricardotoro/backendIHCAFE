import {Router} from 'express';
const router = Router();

//import {createProjects,listProjects,findProject,deleteProject,updateProject } from '../controllers/projectsController';
// rutas /api/projets
import {createBudget, listBudgets} from '../controllers/budgetsController'
router.post('/', createBudget);
router.get('/', listBudgets);
//router.get('/:id', findProject);
//router.delete('/:id', deleteProject);
//router.put('/:id', updateProject);

export default router;