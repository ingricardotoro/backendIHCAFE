"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _coinscontroller = require("../controllers/coinscontroller");

var router = (0, _express.Router)();
router.post("/", _coinscontroller.createCoin);
router.post("/delete/:id", _coinscontroller.deleteCoin);
router.get("/", _coinscontroller.Listcoins);
router.get("/:id", _coinscontroller.findOneCoin);
var _default = router;
exports["default"] = _default;