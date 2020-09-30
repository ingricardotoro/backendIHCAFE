"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _budgetLinesController = require("../controllers/budgetLinesController");

var router = (0, _express.Router)();
// ruta /api/budgetlines/project/:id -> para buscar los renglones de cada projecto
router.post("/project/:id", _budgetLinesController.budgetLinesbyProjectId); // ruta /api/budgetlines/project/:id -> para buscar las categorias de rengones de este projecto

router.post("/cat_project/:id", _budgetLinesController.budgetLinesCatgoriesByProjectId); // ruta /api/budgetlines/project/:id -> para buscar los renglones de cada projecto y categoria

router.post("/project/category/:idPro/:idCat", _budgetLinesController.budgetLinesbyProjectIdCategories); // ruta /api/budgetlines/findone/:proyectid/:id -> para buscar un unico renglones dado el id y el proyectId

router.post("/findone/:proyectid/:id", _budgetLinesController.budgetLinesbyProjectIdAndBudgetId); // ruta /api/budgetlines/edit/:proyectid/:id -> para editar un unico renglones dado el id y el proyectId

router.put("/update/:proyectid/:id", _budgetLinesController.updateBudgetLinesbyProjectIdAndBudgetId); // ruta para actualizar el status del budget line por ser aprobado

router.post("/aprobar/:id/:status/:valor/:comentario", _budgetLinesController.AprobarBudgetLinesbyId); // ruta para actualizar el status del budget line por ser aprobado

router.post("/aprobar_atlas/:id/:status/:valor/:comentario", _budgetLinesController.AprobarBudgetLinesAtlasbyId); // ruta /api/budgetlines/project/:id -> para buscar los renglones de cada projecto

router.post("/atlas/project/:id", _budgetLinesController.budgetLinesAtlasbyProjectId);
/**Rutas para Reportes Atlas */

router.post("/atlas/reporte_atlas_by_project/:id", _budgetLinesController.ReporteAtlasByProjectID);
router.get("/atlas/budgets_by_projectid_and_atlasaccountid/:project_id/:atlas_account_id/:coin_id/:year", _budgetLinesController.budgets_by_projectid_and_atlasaccountid);
router.post("/atlas/findAtlasAccountsByProjAct/:project_id/:code_activity", _budgetLinesController.findAtlasAccountsByProjAct);
/**Rutas para reportes standars */

/**Rutas para las Graficas */

router.get("/atlas/grafica_atlas_by_project/:id", _budgetLinesController.GraficaAtlasByProjectID); // ruta /api/budgetlines/ -> para crear un nuevo renglon

router.post("/", _budgetLinesController.createBudgetLines);
router.post("/budgetlineatlas", _budgetLinesController.createBudgetLinesAtlas); //ruta para eliminar un BudgetLine

router.post("/delete/:id", _budgetLinesController.deleteBudgetLines); //ruta para eliminar un BudgetLineAtlas

router.post("/budgetlineatlas/delete/:id", _budgetLinesController.deleteBudgetLinesAtlas); //router.get('/', listBudgets);
//router.get('/:id', findProject);
//router.delete('/:id', deleteProject);
//router.put('/:id', updateProject);

var _default = router;
exports["default"] = _default;