"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _budgetsController = require("../controllers/budgetsController");

var router = (0, _express.Router)(); //import {createProjects,listProjects,findProject,deleteProject,updateProject } from '../controllers/projectsController';
// rutas /api/projets

router.post('/', _budgetsController.createBudget);
router.get('/', _budgetsController.listBudgets); //router.get('/:id', findProject);

router.post('/delete/:id', _budgetsController.deleteBudget); //router.put('/:id', updateProject);

var _default = router;
exports["default"] = _default;