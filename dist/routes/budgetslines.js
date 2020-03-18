"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _budgetLinesController = require("../controllers/budgetLinesController");

var router = (0, _express.Router)();
// ruta /api/budgetlines/project/:id -> para buscar los renglones de cada projecto
router.post('/project/:id', _budgetLinesController.budgetLinesbyProjectId); // ruta /api/budgetlines/project/:id -> para buscar las categorias de rengones de este projecto

router.post('/cat_project/:id', _budgetLinesController.budgetLinesCatgoriesByProjectId); // ruta /api/budgetlines/project/:id -> para buscar los renglones de cada projecto y categoria

router.post('/project/category/:idPro/:idCat', _budgetLinesController.budgetLinesbyProjectIdCategories); // ruta para actualizar el status del budget line por ser aprobado

router.post('/aprobar/:id/:status', _budgetLinesController.AprobarBudgetLinesbyId); // ruta para actualizar el status del budget line por ser aprobado

router.post('/aprobar_atlas/:id/:status', _budgetLinesController.AprobarBudgetLinesAtlasbyId); // ruta /api/budgetlines/project/:id -> para buscar los renglones de cada projecto

router.post('/atlas/project/:id', _budgetLinesController.budgetLinesAtlasbyProjectId); // ruta /api/budgetlines/ -> para crear un nuevo renglon

router.post('/', _budgetLinesController.createBudgetLines);
router.post('/budgetlineatlas', _budgetLinesController.createBudgetLinesAtlas); //router.get('/', listBudgets);
//router.get('/:id', findProject);
//router.delete('/:id', deleteProject);
//router.put('/:id', updateProject);

var _default = router;
exports["default"] = _default;