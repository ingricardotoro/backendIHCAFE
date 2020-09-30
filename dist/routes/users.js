"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _usersController = require("../controllers/usersController");

var router = (0, _express.Router)();
router.get("/", _usersController.listUsers);
router.get("/:id", _usersController.findUser);
router.post("/register", _usersController.register);
router.post("/login", _usersController.login);
router.post("/delete/:id", _usersController.deleteUser);
var _default = router;
exports["default"] = _default;