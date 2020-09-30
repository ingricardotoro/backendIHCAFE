"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _budgetsController = require("../controllers/budgetsController");

var router = (0, _express.Router)(); //import {createProjects,listProjects,findProject,deleteProject,updateProject } from '../controllers/projectsController';
// rutas /api/projets

router.post("/", _budgetsController.createBudget);
router.get("/", _budgetsController.listBudgets);
router.get("/atlas", _budgetsController.listBudgets_atlas);
router.get("/all", _budgetsController.listBudgets_all); //router.get('/:id', findProject);

router.post("/delete/:id", _budgetsController.deleteBudget);
router.post("/findBudgetById/:id", _budgetsController.findBudgetById);
router.post("/edit/:id", _budgetsController.updateBudget);
var _default = router;
exports["default"] = _default;