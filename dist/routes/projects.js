"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _projectsController = require("../controllers/projectsController");

var router = (0, _express.Router)();
// rutas /api/projets
router.post('/', _projectsController.createProjects);
router.get('/', _projectsController.listProjects);
router.get('/:id', _projectsController.findProject);
router.post('/findProjectsByBudgetId/:id', _projectsController.findProjectsByBudgetId);
router["delete"]('/:id', _projectsController.deleteProject);
router.put('/:id', _projectsController.updateProject);
var _default = router;
exports["default"] = _default;