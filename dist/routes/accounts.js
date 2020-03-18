"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _accountsController = require("../controllers/accountsController");

var router = (0, _express.Router)();
// rutas /api/teams/
router.get('/', _accountsController.listAccounts);
var _default = router;
exports["default"] = _default;