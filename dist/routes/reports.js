"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _reportsController = require("../controllers/reportsController");

var router = (0, _express.Router)();
// rutas /api/reports
//router.post('/create-pdf', createReports);
//router.get('/fetch-pdf', fetchPdf);
router.get('/reportepdf', _reportsController.reportepdf);
/*router.get('/:id', findProject);
router.post('/findProjectsByBudgetId/:id', findProjectsByBudgetId);
router.delete('/:id', deleteProject);
router.put('/:id', updateProject);*/

var _default = router;
exports["default"] = _default;