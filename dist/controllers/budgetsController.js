"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createBudget = createBudget;
exports.listBudgets = listBudgets;
exports.listBudgets_atlas = listBudgets_atlas;
exports.listBudgets_all = listBudgets_all;
exports.findBudgetById = findBudgetById;
exports.updateBudget = updateBudget;
exports.deleteBudget = deleteBudget;

var _Budget = _interopRequireDefault(require("../models/Budget"));

var _Account = _interopRequireDefault(require("../models/Account"));

var _Coin = _interopRequireDefault(require("../models/Coin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function createBudget(_x, _x2) {
  return _createBudget.apply(this, arguments);
}

function _createBudget() {
  _createBudget = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, code, name, tipo, coin_id, description, excercise_start, excercise_end, account_id, person_id, buddgetstart, buddgeupdate, buddgetfinal, balance, returns, deviation, status, approval, approvalby_id, dateapproval, newBudget;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            //controladores de
            _req$body = req.body, code = _req$body.code, name = _req$body.name, tipo = _req$body.tipo, coin_id = _req$body.coin_id, description = _req$body.description, excercise_start = _req$body.excercise_start, excercise_end = _req$body.excercise_end, account_id = _req$body.account_id, person_id = _req$body.person_id, buddgetstart = _req$body.buddgetstart, buddgeupdate = _req$body.buddgeupdate, buddgetfinal = _req$body.buddgetfinal, balance = _req$body.balance, returns = _req$body.returns, deviation = _req$body.deviation, status = _req$body.status, approval = _req$body.approval, approvalby_id = _req$body.approvalby_id, dateapproval = _req$body.dateapproval;
            _context.prev = 1;
            _context.next = 4;
            return _Budget["default"].create({
              code: code,
              name: name,
              tipo: tipo,
              coin_id: coin_id,
              description: description,
              excercise_start: excercise_start,
              excercise_end: excercise_end,
              account_id: account_id,
              person_id: person_id,
              buddgetstart: buddgetstart,
              buddgeupdate: buddgeupdate,
              buddgetfinal: buddgetfinal,
              balance: balance,
              returns: returns,
              deviation: deviation,
              status: status,
              approval: approval,
              approvalby_id: approvalby_id,
              dateapproval: dateapproval
            }, {
              fields: ["code", "name", "tipo", "coin_id", "description", "excercise_start", "excercise_end", "account_id", "person_id", "buddgetstart", "buddgeupdate", "buddgetfinal", "balance", "returns", "deviation", "status", "approval", "approvalby_id", "dateapproval"]
            });

          case 4:
            newBudget = _context.sent;

            if (!newBudget) {
              _context.next = 9;
              break;
            }

            return _context.abrupt("return", res.json({
              message: "Presupuesto Creado Exitosamente",
              data: newBudget
            }));

          case 9:
            return _context.abrupt("return", res.json({
              message: "No se Pudo Crear el Nuevo Presupuesto",
              data: {}
            }));

          case 10:
            _context.next = 16;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);
            res.status(500).json({
              message: "Error al crar nuevos Presupuestos",
              data: {}
            });

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 12]]);
  }));
  return _createBudget.apply(this, arguments);
}

function listBudgets(_x3, _x4) {
  return _listBudgets.apply(this, arguments);
} //listar los presupuestos del tipo atlas para los reportes


function _listBudgets() {
  _listBudgets = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var budgets;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _Budget["default"].findAll({
              where: {
                tipo: 'estandar'
              },
              include: [_Account["default"]]
            });

          case 3:
            budgets = _context2.sent;
            res.json({
              budgets: budgets
            });
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            console.log("ERROR AL QUERE LISTAR BUSGETS:" + _context2.t0);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return _listBudgets.apply(this, arguments);
}

function listBudgets_atlas(_x5, _x6) {
  return _listBudgets_atlas.apply(this, arguments);
} //listar todos los presupuestos 


function _listBudgets_atlas() {
  _listBudgets_atlas = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var budgets;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _Budget["default"].findAll({
              where: {
                tipo: 'atlas'
              },
              include: [_Account["default"]]
            });

          case 3:
            budgets = _context3.sent;
            res.json({
              budgets: budgets
            });
            _context3.next = 10;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            console.log("ERROR AL QUERE LISTAR BUSGETS:" + _context3.t0);

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 7]]);
  }));
  return _listBudgets_atlas.apply(this, arguments);
}

function listBudgets_all(_x7, _x8) {
  return _listBudgets_all.apply(this, arguments);
} //buscar un budget especifico por du ID


function _listBudgets_all() {
  _listBudgets_all = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var budgets;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _Budget["default"].findAll({
              include: [_Account["default"]]
            });

          case 3:
            budgets = _context4.sent;
            res.json({
              budgets: budgets
            });
            _context4.next = 10;
            break;

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](0);
            console.log("ERROR AL QUERE LISTAR BUSGETS:" + _context4.t0);

          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 7]]);
  }));
  return _listBudgets_all.apply(this, arguments);
}

function findBudgetById(_x9, _x10) {
  return _findBudgetById.apply(this, arguments);
}

function _findBudgetById() {
  _findBudgetById = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id, budget;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            _context5.prev = 1;
            _context5.next = 4;
            return _Budget["default"].findAll({
              where: {
                id: id
              },
              include: [_Account["default"], _Coin["default"]]
            });

          case 4:
            budget = _context5.sent;
            res.json({
              budget: budget
            });
            _context5.next = 11;
            break;

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](1);
            console.log("ERROR AL QUERE LISTAR BUSGET:" + _context5.t0);

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[1, 8]]);
  }));
  return _findBudgetById.apply(this, arguments);
}

function updateBudget(_x11, _x12) {
  return _updateBudget.apply(this, arguments);
}

function _updateBudget() {
  _updateBudget = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id, _req$body2, code, name, description, buddgetstart, result;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, code = _req$body2.code, name = _req$body2.name, description = _req$body2.description, buddgetstart = _req$body2.buddgetstart;
            _context6.prev = 2;
            _context6.next = 5;
            return _Budget["default"].update({
              code: code,
              name: name,

              /*tipo,*/

              /*coin_id,*/
              description: description,

              /*excercise_start,
              excercise_end,*/

              /*account_id,*/

              /*person_id,*/
              buddgetstart: buddgetstart
              /*buddgeupdate,
              buddgetfinal,
              balance,
              returns,
              deviation,
              /*status,
              approval,
              approvalby_id,
              dateapproval,*/

            }, {
              where: {
                id: id
              }
            });

          case 5:
            result = _context6.sent;

            if (result) {
              res.json({
                message: "Presupuesto Actualizado Satifactoriamente"
              });
            }

            _context6.next = 13;
            break;

          case 9:
            _context6.prev = 9;
            _context6.t0 = _context6["catch"](2);
            console.log(_context6.t0);
            return _context6.abrupt("return", res.json({
              message: "Something Wrong in Update Presupuesto",
              data: {}
            }));

          case 13:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[2, 9]]);
  }));
  return _updateBudget.apply(this, arguments);
}

function deleteBudget(_x13, _x14) {
  return _deleteBudget.apply(this, arguments);
}

function _deleteBudget() {
  _deleteBudget = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            id = req.params.id;
            _context7.prev = 1;
            _context7.next = 4;
            return _Budget["default"].destroy({
              where: {
                id: id
              }
            });

          case 4:
            deleteRowCount = _context7.sent;
            res.json({
              message: "Budget Eliminado Satifactoriamente",
              count: deleteRowCount
            });
            _context7.next = 11;
            break;

          case 8:
            _context7.prev = 8;
            _context7.t0 = _context7["catch"](1);
            console.log("ERROR AL QUERE ELIMINAR EL PROJECT:" + _context7.t0);

          case 11:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[1, 8]]);
  }));
  return _deleteBudget.apply(this, arguments);
}