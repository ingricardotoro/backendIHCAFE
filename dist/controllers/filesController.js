"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FileByBudgetId = FileByBudgetId;
exports.FileByBudgetIdAtlas = FileByBudgetIdAtlas;
exports.DeleteFileById = DeleteFileById;
exports.DeleteFileByIdAtlas = DeleteFileByIdAtlas;

var _Archivo = _interopRequireDefault(require("../models/Archivo"));

var _Archivo_Estandar = _interopRequireDefault(require("../models/Archivo_Estandar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//buscamos los archivo que pertenecen a este budgetLine
function FileByBudgetId(_x, _x2) {
  return _FileByBudgetId.apply(this, arguments);
} //buscamos los archivo que pertenecen a este budgetLineATLAS


function _FileByBudgetId() {
  _FileByBudgetId = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$params, budget_id, budgetline_id, files;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$params = req.params, budget_id = _req$params.budget_id, budgetline_id = _req$params.budgetline_id;
            _context.prev = 1;
            _context.next = 4;
            return _Archivo_Estandar["default"].findAll({
              where: {
                budget_id: budget_id,
                budgetline_id: budgetline_id
              }
            });

          case 4:
            files = _context.sent;
            res.json({
              files: files
            });
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            console.log("ERROR AL QUERER BUSCAR El ARCHIVO POR BUDGETLINE:" + _context.t0);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 8]]);
  }));
  return _FileByBudgetId.apply(this, arguments);
}

function FileByBudgetIdAtlas(_x3, _x4) {
  return _FileByBudgetIdAtlas.apply(this, arguments);
} //funcion para eliminar archivos por id


function _FileByBudgetIdAtlas() {
  _FileByBudgetIdAtlas = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$params2, budget_id, budgetlineatlas_id, files;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$params2 = req.params, budget_id = _req$params2.budget_id, budgetlineatlas_id = _req$params2.budgetlineatlas_id;
            _context2.prev = 1;
            _context2.next = 4;
            return _Archivo["default"].findAll({
              where: {
                budget_id: budget_id,
                budgetlineatlas_id: budgetlineatlas_id
              }
            });

          case 4:
            files = _context2.sent;
            res.json({
              files: files
            });
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            console.log("ERROR AL QUERER BUSCAR El ARCHIVO POR BUDGETLINE:" + _context2.t0);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 8]]);
  }));
  return _FileByBudgetIdAtlas.apply(this, arguments);
}

function DeleteFileById(_x5, _x6) {
  return _DeleteFileById.apply(this, arguments);
} //funcion para eliminar archivos_Atlas por id


function _DeleteFileById() {
  _DeleteFileById = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var filename, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            filename = req.params.filename;
            _context3.prev = 1;
            _context3.next = 4;
            return _Archivo_Estandar["default"].destroy({
              where: {
                filename: filename
              }
            });

          case 4:
            deleteRowCount = _context3.sent;
            res.json({
              // message:"Archivo Eliminado Satifactoriamente",
              //count:deleteRowCount
              deleteRowCount: deleteRowCount
            });
            _context3.next = 11;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](1);
            console.log("ERROR AL QUERE ELIMINAR EL Archivo:" + _context3.t0);

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 8]]);
  }));
  return _DeleteFileById.apply(this, arguments);
}

function DeleteFileByIdAtlas(_x7, _x8) {
  return _DeleteFileByIdAtlas.apply(this, arguments);
}

function _DeleteFileByIdAtlas() {
  _DeleteFileByIdAtlas = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var filename, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            filename = req.params.filename;
            _context4.prev = 1;
            _context4.next = 4;
            return _Archivo["default"].destroy({
              where: {
                filename: filename
              }
            });

          case 4:
            deleteRowCount = _context4.sent;
            res.json({
              // message:"Archivo Eliminado Satifactoriamente",
              //count:deleteRowCount
              deleteRowCount: deleteRowCount
            });
            _context4.next = 11;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](1);
            console.log("ERROR AL QUERE ELIMINAR EL Archivo:" + _context4.t0);

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 8]]);
  }));
  return _DeleteFileByIdAtlas.apply(this, arguments);
}