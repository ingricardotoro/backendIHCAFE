"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createBudget = createBudget;
exports.listBudgets = listBudgets;

var _Budget = _interopRequireDefault(require("../models/Budget"));

var _Account = _interopRequireDefault(require("../models/Account"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function createBudget(_x, _x2) {
  return _createBudget.apply(this, arguments);
}

function _createBudget() {
  _createBudget = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, code, name, description, excercise_start, excercise_end, account_id, person_id, buddgetstart, buddgeupdate, buddgetfinal, balance, returns, deviation, status, approval, approvalby_id, dateapproval, newBudget;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, code = _req$body.code, name = _req$body.name, description = _req$body.description, excercise_start = _req$body.excercise_start, excercise_end = _req$body.excercise_end, account_id = _req$body.account_id, person_id = _req$body.person_id, buddgetstart = _req$body.buddgetstart, buddgeupdate = _req$body.buddgeupdate, buddgetfinal = _req$body.buddgetfinal, balance = _req$body.balance, returns = _req$body.returns, deviation = _req$body.deviation, status = _req$body.status, approval = _req$body.approval, approvalby_id = _req$body.approvalby_id, dateapproval = _req$body.dateapproval;
            _context.prev = 1;
            _context.next = 4;
            return _Budget["default"].create({
              code: code,
              name: name,
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
              fields: ['code', 'name', 'description', 'excercise_start', 'excercise_end', 'account_id', 'person_id', 'buddgetstart', 'buddgeupdate', 'buddgetfinal', 'balance', 'returns', 'deviation', 'status', 'approval', 'approvalby_id', 'dateapproval']
            });

          case 4:
            newBudget = _context.sent;

            if (!newBudget) {
              _context.next = 9;
              break;
            }

            res.redirect('https://ihcafe-35ae7.firebaseapp.com/budgets');
            /*return res.json({
                message:"Presupuesto Creado Exitosamente",
                data:newBudget
            });*/

            _context.next = 10;
            break;

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
}

function _listBudgets() {
  _listBudgets = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var budgets;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _Budget["default"].findAll({
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