import {Router} from 'express';
const router = Router();

import {createBudgetLines,
    budgetLinesbyProjectId,
    budgetLinesCatgoriesByProjectId,
    budgetLinesbyProjectIdCategories,
    AprobarBudgetLinesbyId} 
from '../controllers/budgetLinesController'

// ruta /api/budgetlines/project/:id -> para buscar los renglones de cada projecto
router.post('/project/:id',budgetLinesbyProjectId);
// ruta /api/budgetlines/project/:id -> para buscar las categorias de rengones de este projecto
router.post('/cat_project/:id',budgetLinesCatgoriesByProjectId);
// ruta /api/budgetlines/project/:id -> para buscar los renglones de cada projecto y categoria
router.post('/project/category/:idPro/:idCat',budgetLinesbyProjectIdCategories);

// ruta para actualizar el status del budget line por ser aprobado
router.post('/aprobar/:id/:status',AprobarBudgetLinesbyId);



// ruta /api/budgetlines/ -> para crear un nuevo renglon
router.post('/',createBudgetLines);


//router.get('/', listBudgets);
//router.get('/:id', findProject);
//router.delete('/:id', deleteProject);
//router.put('/:id', updateProject);

export default router;