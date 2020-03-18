"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _suppliersController = require("../controllers/suppliersController");

var router = (0, _express.Router)();
router.get('/', _suppliersController.ListSuppliers); // para poder listar todos los proveedores

var _default = router;
exports["default"] = _default;