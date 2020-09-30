"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _teamsController = require("../controllers/teamsController");

var router = (0, _express.Router)();
// rutas /api/teams/
router.get('/', _teamsController.listTeams);
router.get('/:id', _teamsController.findOneTeam);
router.post('/', _teamsController.createTeam);
router.post('/delete/:id', _teamsController.deleteTeam);
var _default = router;
exports["default"] = _default;