"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _atlasController = require("../controllers/atlasController");

var router = (0, _express.Router)();
router.get('/resultados', _atlasController.atlas_resultados); // obtener los RESULTADOS ATLAS son de codigo 0

router.get('/productos/:id', _atlasController.atlas_productos); // para obtener todas los producots hijos dado el codigo atlas del resultado

router.get('/accounts', _atlasController.atlas_accounts); // obtener las cuentas ATLAS

router.get('/sub_accounts/:id', _atlasController.atlas_sub_accounts); // para obtener todas las sub categorias de una cuenta atlas dada

var _default = router;
exports["default"] = _default;