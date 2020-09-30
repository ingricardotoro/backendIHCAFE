"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _roleController = require("../controllers/roleController");

var router = (0, _express.Router)();
// rutas /api/teams/
router.get('/', _roleController.listRole);
/*router.get('/:id', findOneTeam);
router.post('/', createTeam);
router.post('/delete/:id', deleteTeam);*/

var _default = router;
exports["default"] = _default;