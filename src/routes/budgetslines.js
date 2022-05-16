import { Router } from 'express';
const router = Router();

import {
    createBudgetLines,
    budgetLinesbyProjectId,
    budgetLinesCatgoriesByProjectId,
    budgetLinesbyProjectIdCategories,
    AprobarBudgetLinesbyId,
    createBudgetLinesAtlas,
    budgetLinesAtlasbyProjectId,
    AprobarBudgetLinesAtlasbyId,
    deleteBudgetLines,
    deleteBudgetLinesAtlas,

    //ruta para obtener un renglon presupuestario segun su proyectId y si Id
    budgetLinesbyProjectIdAndBudgetId,
    //ruta para editar un renglon, dado du proyectId y su Id unico
    updateBudgetLinesbyProjectIdAndBudgetId,

    /**Reporte Atlas */
    ReporteAtlasByProjectID,
    budgets_by_projectid_and_atlasaccountid,
    findAtlasAccountsByProjAct, //encontrar las cuentas atlas, filtranso por project ya ctivity

    /**Reporte Standars */

    /**Graficas */
    GraficaAtlasByProjectID,
} from '../controllers/budgetLinesController';

// ruta /api/budgetlines/project/:id -> para buscar los renglones de cada projecto
router.post('/project/:id', budgetLinesbyProjectId);

// ruta /api/budgetlines/project/:id -> para buscar las categorias de rengones de este projecto
router.post('/cat_project/:id', budgetLinesCatgoriesByProjectId);
// ruta /api/budgetlines/project/:id -> para buscar los renglones de cada projecto y categoria
router.post(
    '/project/category/:idPro/:idCat',
    budgetLinesbyProjectIdCategories
);

// ruta /api/budgetlines/findone/:proyectid/:id -> para buscar un unico renglones dado el id y el proyectId
router.post('/findone/:proyectid/:id', budgetLinesbyProjectIdAndBudgetId);
// ruta /api/budgetlines/edit/:proyectid/:id -> para editar un unico renglones dado el id y el proyectId
router.put('/update/:proyectid/:id', updateBudgetLinesbyProjectIdAndBudgetId);

// ruta para actualizar el status del budget line por ser aprobado
router.post('/aprobar/:id/:code/:valor/:fecha', AprobarBudgetLinesbyId);

// ruta para actualizar el status del budget line por ser aprobado
router.post(
    '/aprobar_atlas/:id/:code/:valor/:fecha',
    AprobarBudgetLinesAtlasbyId
);
/* router.post(
  "/aprobar_atlas/:id/:status/:valor/:comentario",
  AprobarBudgetLinesAtlasbyId
); */

// ruta /api/budgetlines/project/:id -> para buscar los renglones de cada projecto
router.post('/atlas/project/:id', budgetLinesAtlasbyProjectId);

/**Rutas para Reportes Atlas */
router.post('/atlas/reporte_atlas_by_project/:id', ReporteAtlasByProjectID);
router.get(
    '/atlas/budgets_by_projectid_and_atlasaccountid/:project_id/:atlas_account_id/:coin_id/:year',
    budgets_by_projectid_and_atlasaccountid
);
router.post(
    '/atlas/findAtlasAccountsByProjAct/:project_id/:code_activity',
    findAtlasAccountsByProjAct
);
/**Rutas para reportes standars */

/**Rutas para las Graficas */
router.get('/atlas/grafica_atlas_by_project/:id', GraficaAtlasByProjectID);

// ruta /api/budgetlines/ -> para crear un nuevo renglon
router.post('/', createBudgetLines);
router.post('/budgetlineatlas', createBudgetLinesAtlas);
//ruta para eliminar un BudgetLine
router.post('/delete/:id', deleteBudgetLines);

//ruta para eliminar un BudgetLineAtlas
router.post('/budgetlineatlas/delete/:id', deleteBudgetLinesAtlas);

//router.get('/', listBudgets);
//router.get('/:id', findProject);
//router.delete('/:id', deleteProject);
//router.put('/:id', updateProject);

export default router;