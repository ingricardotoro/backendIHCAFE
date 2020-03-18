"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _categoriesController = require("../controllers/categoriesController");

var router = (0, _express.Router)();
router.post('/categoriesbyid/:id', _categoriesController.categoriesbyid);
router.get('/categories_parents', _categoriesController.categoriesparents);
router.get('/categories_childs/:id', _categoriesController.categories_childs); // para obtener todas las categorias hijas dado el id del padre

router.get('/child/:id', _categoriesController.childbyid); // para solicitar una clasificacion hijo en especifico

var _default = router;
exports["default"] = _default;