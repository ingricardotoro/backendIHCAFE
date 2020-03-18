"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListSuppliers = ListSuppliers;

var _Supplier = _interopRequireDefault(require("../models/Supplier"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//codigo para obtener los RESULTADOS ATLAS , de codigo 0
function ListSuppliers(_x, _x2) {
  return _ListSuppliers.apply(this, arguments);
}

function _ListSuppliers() {
  _ListSuppliers = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var suppliers;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Supplier["default"].findAll();

          case 3:
            suppliers = _context.sent;
            res.json({
              suppliers: suppliers
            });
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log("ERROR AL QUERE LISTAR los Beneficiarios o PROVEEDORES:" + _context.t0);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));
  return _ListSuppliers.apply(this, arguments);
}