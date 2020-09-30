"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.atlas_resultados = atlas_resultados;
exports.atlas_productos = atlas_productos;
exports.atlas_accounts = atlas_accounts;
exports.atlas_sub_accounts = atlas_sub_accounts;
exports.find_sub_atlas_category = find_sub_atlas_category;

var _Atlas = _interopRequireDefault(require("../models/Atlas"));

var _AtlasAccount = _interopRequireDefault(require("../models/AtlasAccount"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//codigo para obtener los RESULTADOS ATLAS , de codigo 0
function atlas_resultados(_x, _x2) {
  return _atlas_resultados.apply(this, arguments);
} //codigo para obtener los productos dado el codigo de resultado atlas


function _atlas_resultados() {
  _atlas_resultados = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _atlas_resultados2;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Atlas["default"].findAll({
              where: {
                code_atlas: '0'
              },
              order: [['id', 'ASC']]
            });

          case 3:
            _atlas_resultados2 = _context.sent;
            res.json({
              atlas_resultados: _atlas_resultados2
            });
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log("ERROR AL QUERE LISTAR La Categorias de resultados de AtLAS:" + _context.t0);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));
  return _atlas_resultados.apply(this, arguments);
}

function atlas_productos(_x3, _x4) {
  return _atlas_productos.apply(this, arguments);
} //codigo para obtener los RESULTADOS ATLAS , de codigo 0


function _atlas_productos() {
  _atlas_productos = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id, productos_atlas;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;
            _context2.prev = 1;
            _context2.next = 4;
            return _Atlas["default"].findAll({
              where: {
                code_atlas: id
              },
              order: [['id', 'ASC']]
            });

          case 4:
            productos_atlas = _context2.sent;
            res.json({
              productos_atlas: productos_atlas
            });
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            console.log("ERROR AL QUERE LISTAR Los PRoductos ATLAS:" + _context2.t0);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 8]]);
  }));
  return _atlas_productos.apply(this, arguments);
}

function atlas_accounts(_x5, _x6) {
  return _atlas_accounts.apply(this, arguments);
} //codigo para obtener las sub categorias de un id atlas dado


function _atlas_accounts() {
  _atlas_accounts = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var _atlas_accounts2;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _AtlasAccount["default"].findAll({
              where: {
                code_atlas: '0'
              },
              order: [['id', 'ASC']]
            });

          case 3:
            _atlas_accounts2 = _context3.sent;
            res.json({
              atlas_accounts: _atlas_accounts2
            });
            _context3.next = 10;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            console.log("ERROR AL QUERE LISTAR LAS CUENTAS de AtLAS:" + _context3.t0);

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 7]]);
  }));
  return _atlas_accounts.apply(this, arguments);
}

function atlas_sub_accounts(_x7, _x8) {
  return _atlas_sub_accounts.apply(this, arguments);
}
/**  Para los reportes Atlas */
//codigo para obtener Una de las sub categorias de un id atlas dado


function _atlas_sub_accounts() {
  _atlas_sub_accounts = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, sub_accounts;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _context4.prev = 1;
            _context4.next = 4;
            return _AtlasAccount["default"].findAll({
              where: {
                code_atlas: id
              }
            });

          case 4:
            sub_accounts = _context4.sent;
            res.json({
              sub_accounts: sub_accounts
            });
            _context4.next = 11;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](1);
            console.log("ERROR AL QUERE LISTAR Las Sub categorias ATLAS:" + _context4.t0);

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 8]]);
  }));
  return _atlas_sub_accounts.apply(this, arguments);
}

function find_sub_atlas_category(_x9, _x10) {
  return _find_sub_atlas_category.apply(this, arguments);
}

function _find_sub_atlas_category() {
  _find_sub_atlas_category = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id, sub_accounts;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            _context5.prev = 1;
            _context5.next = 4;
            return _AtlasAccount["default"].findOne({
              where: {
                id: id
              }
            });

          case 4:
            sub_accounts = _context5.sent;
            res.json({
              sub_accounts: sub_accounts
            });
            _context5.next = 11;
            break;

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](1);
            console.log("ERROR AL QUERE LISTAR la Subcategoria ATLAS:" + _context5.t0);

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[1, 8]]);
  }));
  return _find_sub_atlas_category.apply(this, arguments);
}