"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Listcoins = Listcoins;
exports.createCoin = createCoin;
exports.findOneCoin = findOneCoin;
exports.deleteCoin = deleteCoin;

var _Coin = _interopRequireDefault(require("../models/Coin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function Listcoins(_x, _x2) {
  return _Listcoins.apply(this, arguments);
}

function _Listcoins() {
  _Listcoins = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var coins;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Coin["default"].findAll();

          case 3:
            coins = _context.sent;
            res.json({
              coins: coins
            });
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log("ERROR AL QUERE LISTAR La monedas:" + _context.t0);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));
  return _Listcoins.apply(this, arguments);
}

function createCoin(_x3, _x4) {
  return _createCoin.apply(this, arguments);
}

function _createCoin() {
  _createCoin = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, name, description, code, newCoin;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, description = _req$body.description, code = _req$body.code;
            _context2.prev = 1;
            _context2.next = 4;
            return _Coin["default"].create({
              name: name,
              description: description,
              code: code
            }, {
              fields: ["name", "description", "code"]
            });

          case 4:
            newCoin = _context2.sent;

            if (!newCoin) {
              _context2.next = 9;
              break;
            }

            return _context2.abrupt("return", res.json({
              message: "Moneda Creada Exitosamente",
              data: newCoin
            }));

          case 9:
            return _context2.abrupt("return", res.json({
              message: "No se Pudo Crear Nueva Moneda",
              data: {}
            }));

          case 10:
            _context2.next = 15;
            break;

          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](1);
            //console.log(error);
            res.status(500).json({
              message: "Error al crear nuevas Moneda",
              data: {}
            });

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 12]]);
  }));
  return _createCoin.apply(this, arguments);
}

function findOneCoin(_x5, _x6) {
  return _findOneCoin.apply(this, arguments);
}

function _findOneCoin() {
  _findOneCoin = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, coin;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.prev = 1;
            _context3.next = 4;
            return _Coin["default"].findOne({
              where: {
                id: id
              }
            });

          case 4:
            coin = _context3.sent;
            res.json({
              coin: coin
            });
            _context3.next = 11;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](1);
            console.log("ERROR AL Buscar Coin By Id:" + _context3.t0);

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 8]]);
  }));
  return _findOneCoin.apply(this, arguments);
}

function deleteCoin(_x7, _x8) {
  return _deleteCoin.apply(this, arguments);
}

function _deleteCoin() {
  _deleteCoin = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _context4.prev = 1;
            _context4.next = 4;
            return _Coin["default"].destroy({
              where: {
                id: id
              }
            });

          case 4:
            deleteRowCount = _context4.sent;
            res.json({
              message: "Moneda Eliminada Satifactoriamente",
              count: deleteRowCount
            });
            _context4.next = 11;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](1);
            console.log("ERROR AL QUERE ELIMINAR Moneda:" + _context4.t0);

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 8]]);
  }));
  return _deleteCoin.apply(this, arguments);
}