"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _tipousersController = require("../controllers/tipousersController");

var router = (0, _express.Router)();
router.get("/", _tipousersController.listTipoUsers); //router.post("/register", register);

var _default = router;
exports["default"] = _default;