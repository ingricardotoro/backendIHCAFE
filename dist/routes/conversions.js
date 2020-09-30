"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _conversionsController = require("../controllers/conversionsController");

var router = (0, _express.Router)();
router.post("/", _conversionsController.createConversion);
router.post("/delete/:id", _conversionsController.deleteConversion);
router.get("/:id", _conversionsController.ListConversionsByCoinId); //router.get("/:id", findOneConversions);

var _default = router;
exports["default"] = _default;