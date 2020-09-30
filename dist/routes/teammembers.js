"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _teammembersController = require("../controllers/teammembersController");

var router = (0, _express.Router)();
// rutas /api/teams/
router.get('/:id', _teammembersController.listTeamMembersByTeamId); //router.get('/:id', findOneTeam);

router.post('/', _teammembersController.createTeammember);
router.post('/delete/:id', _teammembersController.deleteTeammember);
var _default = router;
exports["default"] = _default;