"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListConversionsByCoinId = ListConversionsByCoinId;
exports.createConversion = createConversion;
exports.deleteConversion = deleteConversion;

var _Conversion = _interopRequireDefault(require("../models/Conversion"));

var _Coin = _interopRequireDefault(require("../models/Coin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ListConversionsByCoinId(_x, _x2) {
  return _ListConversionsByCoinId.apply(this, arguments);
}

function _ListConversionsByCoinId() {
  _ListConversionsByCoinId = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var id, conversions;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            //id del coin
            id = req.params.id;
            _context.prev = 1;
            _context.next = 4;
            return _Conversion["default"].findAll({
              include: [_Coin["default"]],
              where: {
                coin_id: id
              }
            });

          case 4:
            conversions = _context.sent;
            res.json({
              conversions: conversions
            });
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            console.log("ERROR AL QUERE LISTAR Las conversiones:" + _context.t0);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 8]]);
  }));
  return _ListConversionsByCoinId.apply(this, arguments);
}

function createConversion(_x3, _x4) {
  return _createConversion.apply(this, arguments);
}

function _createConversion() {
  _createConversion = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, coin_id, description, value, dateinitial, datefinal, newConversion;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, coin_id = _req$body.coin_id, description = _req$body.description, value = _req$body.value, dateinitial = _req$body.dateinitial, datefinal = _req$body.datefinal;
            _context2.prev = 1;
            _context2.next = 4;
            return _Conversion["default"].create({
              coin_id: coin_id,
              description: description,
              value: value,
              dateinitial: dateinitial,
              datefinal: datefinal
            }, {
              fields: ["coin_id", "description", "value", "dateinitial", "datefinal"]
            });

          case 4:
            newConversion = _context2.sent;

            if (!newConversion) {
              _context2.next = 9;
              break;
            }

            return _context2.abrupt("return", res.json({
              message: "Conversion Creada Exitosamente",
              data: newConversion
            }));

          case 9:
            return _context2.abrupt("return", res.json({
              message: "No se Pudo Crear Nueva Conversion",
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
              message: "Error al crear nuevas Conversions",
              data: {}
            });

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 12]]);
  }));
  return _createConversion.apply(this, arguments);
}

function deleteConversion(_x5, _x6) {
  return _deleteConversion.apply(this, arguments);
}

function _deleteConversion() {
  _deleteConversion = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.prev = 1;
            _context3.next = 4;
            return _Conversion["default"].destroy({
              where: {
                id: id
              }
            });

          case 4:
            deleteRowCount = _context3.sent;
            res.json({
              message: "Conversion Eliminada Satifactoriamente",
              count: deleteRowCount
            });
            _context3.next = 11;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](1);
            console.log("ERROR AL QUERE ELIMINAR Conversion:" + _context3.t0);

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 8]]);
  }));
  return _deleteConversion.apply(this, arguments);
}