"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.budgetLinesbyProjectId = budgetLinesbyProjectId;
exports.budgetLinesCatgoriesByProjectId = budgetLinesCatgoriesByProjectId;
exports.budgetLinesbyProjectIdCategories = budgetLinesbyProjectIdCategories;
exports.createBudgetLines = createBudgetLines;
exports.AprobarBudgetLinesbyId = AprobarBudgetLinesbyId;
exports.createBudgetLinesAtlas = createBudgetLinesAtlas;
exports.budgetLinesAtlasbyProjectId = budgetLinesAtlasbyProjectId;
exports.budgetLinesAccountsAtlasByProjectId = budgetLinesAccountsAtlasByProjectId;
exports.AprobarBudgetLinesAtlasbyId = AprobarBudgetLinesAtlasbyId;
exports.deleteBudgetLinesAtlas = deleteBudgetLinesAtlas;

var _Budgetline = _interopRequireDefault(require("../models/Budgetline"));

var _Category = _interopRequireDefault(require("../models/Category"));

var _Person = _interopRequireDefault(require("../models/Person"));

var _Project = _interopRequireDefault(require("../models/Project"));

var _Budget = _interopRequireDefault(require("../models/Budget"));

var _Archivo = _interopRequireDefault(require("../models/Archivo"));

var _sequelize = _interopRequireDefault(require("sequelize"));

var _BudgetLineAtlas = _interopRequireDefault(require("../models/BudgetLineAtlas"));

var _AtlasAccount = _interopRequireDefault(require("../models/AtlasAccount"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//funcion para obtener todos los renglones presupuestario de este projecto id
//nos ayuda a calcular los totales de presupuestos para las RowCardProjects
function budgetLinesbyProjectId(_x, _x2) {
  return _budgetLinesbyProjectId.apply(this, arguments);
} //Funcion para obtener los diferentes id de las categorias de los budgetlines
//nos ayuda en generar los TableCost


function _budgetLinesbyProjectId() {
  _budgetLinesbyProjectId = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var id, budgetLines;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = req.params.id;
            _context.prev = 1;
            _context.next = 4;
            return _Budgetline["default"].findAll({
              include: [_Person["default"]],
              order: [['category_id', 'ASC']],
              where: {
                project_id: id
              }
            });

          case 4:
            budgetLines = _context.sent;
            res.json({
              budgetLines: budgetLines
            });
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            console.log("ERROR AL QUERE LISTAR Budgetline:" + _context.t0);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 8]]);
  }));
  return _budgetLinesbyProjectId.apply(this, arguments);
}

function budgetLinesCatgoriesByProjectId(_x3, _x4) {
  return _budgetLinesCatgoriesByProjectId.apply(this, arguments);
} //funcion para mostar los renglones presupuestarios clasificados por projectos y categorias
//ayuda a desplegar las tablas de renglones


function _budgetLinesCatgoriesByProjectId() {
  _budgetLinesCatgoriesByProjectId = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var id, budgetCategories;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;
            _context2.prev = 1;
            _context2.next = 4;
            return _Budgetline["default"].findAll({
              attributes: [[_sequelize["default"].fn('DISTINCT', _sequelize["default"].col('category_id')), 'category_id']],
              where: {
                project_id: id
              }
            });

          case 4:
            budgetCategories = _context2.sent;
            res.json({
              budgetCategories: budgetCategories
            });
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            console.log("ERROR AL QUERE LISTAR BudgetlineCategories:" + _context2.t0);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 8]]);
  }));
  return _budgetLinesCatgoriesByProjectId.apply(this, arguments);
}

function budgetLinesbyProjectIdCategories(_x5, _x6) {
  return _budgetLinesbyProjectIdCategories.apply(this, arguments);
} //funion para crear nuevos renglones presupuestarios


function _budgetLinesbyProjectIdCategories() {
  _budgetLinesbyProjectIdCategories = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    var _req$params, idPro, idCat, budgetLinesCat;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$params = req.params, idPro = _req$params.idPro, idCat = _req$params.idCat;
            _context3.prev = 1;
            _context3.next = 4;
            return _Budgetline["default"].findAll({
              /* include: [
                  { model: Category, where: { id: idCat }}
               ], */
              include: [_Category["default"], _Person["default"]],
              // attributes: [sequelize.fn('DISTINCT', sequelize.col('category_id')), 'categorias'],
              //attributes: [['category_id','categoria'] ],
              order: [['category_id', 'ASC']],
              where: {
                project_id: idPro,
                category_id: idCat
              }
            });

          case 4:
            budgetLinesCat = _context3.sent;
            res.json({
              budgetLinesCat: budgetLinesCat
            });
            _context3.next = 11;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](1);
            console.log("ERROR AL QUERE LISTAR Budgetline Category:" + _context3.t0);

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 8]]);
  }));
  return _budgetLinesbyProjectIdCategories.apply(this, arguments);
}

function createBudgetLines(_x7, _x8) {
  return _createBudgetLines.apply(this, arguments);
}

function _createBudgetLines() {
  _createBudgetLines = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(req, res) {
    var _req$body, code, name, description, date_start, date_end, category_id, account_id, project_id, user_id, supplier_id, buddgetstart, buddgeupdate, buddgetfinal, balance, returns, deviation, status, approval, approvalby_id, dateapproval, _newBudgetLine, project_budget, Budgetstart_old, balance_old, newBudgetStar, newBalance, result_update;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body = req.body, code = _req$body.code, name = _req$body.name, description = _req$body.description, date_start = _req$body.date_start, date_end = _req$body.date_end, category_id = _req$body.category_id, account_id = _req$body.account_id, project_id = _req$body.project_id, user_id = _req$body.user_id, supplier_id = _req$body.supplier_id, buddgetstart = _req$body.buddgetstart, buddgeupdate = _req$body.buddgeupdate, buddgetfinal = _req$body.buddgetfinal, balance = _req$body.balance, returns = _req$body.returns, deviation = _req$body.deviation, status = _req$body.status, approval = _req$body.approval, approvalby_id = _req$body.approvalby_id, dateapproval = _req$body.dateapproval;
            _context4.prev = 1;
            _context4.next = 4;
            return _Budgetline["default"].create({
              code: code,
              name: name,
              description: description,
              date_start: date_start,
              date_end: date_end,
              category_id: category_id,
              account_id: account_id,
              project_id: project_id,
              user_id: user_id,
              supplier_id: supplier_id,
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
              fields: ['code', 'name', 'description', 'date_start', 'date_end', 'category_id', 'account_id', 'project_id', 'user_id', 'supplier_id', 'buddgetstart', 'buddgeupdate', 'buddgetfinal', 'balance', 'returns', 'deviation', 'status', 'approval', 'approvalby_id', 'dateapproval']
            });

          case 4:
            _newBudgetLine = _context4.sent;

            if (!_newBudgetLine) {
              _context4.next = 27;
              break;
            }

            _context4.prev = 6;
            _context4.next = 9;
            return _Project["default"].findOne({
              where: {
                id: project_id
              },
              include: [_Budget["default"]]
            });

          case 9:
            project_budget = _context4.sent;
            //obtenemos el presupuesto inicial y el balance actual de la base de datos
            Budgetstart_old = project_budget.budget.buddgetstart;
            balance_old = project_budget.budget.balance; //calculamos el nuevo balance y budgetstart

            newBudgetStar = parseFloat(Budgetstart_old) + parseFloat(buddgetstart);
            newBalance = parseFloat(balance_old) + parseFloat(balance);
            _context4.next = 16;
            return _Budget["default"].update({
              buddgetstart: newBudgetStar,
              balance: newBalance
            }, {
              where: {
                id: project_budget.budget.id
              }
            });

          case 16:
            result_update = _context4.sent;

            if (result_update) {
              res.json({
                message: "BudgetStarNEW Actualizado Satifactoriamente"
              });
            }

            _context4.next = 24;
            break;

          case 20:
            _context4.prev = 20;
            _context4.t0 = _context4["catch"](6);
            console.log(_context4.t0);
            return _context4.abrupt("return", res.json({
              message: 'Something Wrong in Update BudgetLine',
              data: {}
            }));

          case 24:
            return _context4.abrupt("return", res.json({
              message: "Renglon Presupuestario Creado Exitosamente",
              data: _newBudgetLine
            }));

          case 27:
            return _context4.abrupt("return", res.json({
              message: "No se Pudo Crear el Nuevo Renglon Presupuestario",
              data: {}
            }));

          case 28:
            _context4.next = 34;
            break;

          case 30:
            _context4.prev = 30;
            _context4.t1 = _context4["catch"](1);
            console.log(_context4.t1);
            res.status(500).json({
              message: "Error al crar nuevo Renglon Presupuestario",
              data: {}
            });

          case 34:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 30], [6, 20]]);
  }));
  return _createBudgetLines.apply(this, arguments);
}

function AprobarBudgetLinesbyId(_x9, _x10) {
  return _AprobarBudgetLinesbyId.apply(this, arguments);
} /// CREACION DE RENGLON PPRESUPUESTARIO MODALIDAD ATLAS/////
//funion para crear nuevos renglones presupuestarios en la tabla budgetlines_atlas


function _AprobarBudgetLinesbyId() {
  _AprobarBudgetLinesbyId = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(req, res) {
    var Nuevo_status, _req$params2, id, status, result;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            Nuevo_status = '';
            _req$params2 = req.params, id = _req$params2.id, status = _req$params2.status;
            console.log("VALOR DE ID:" + id);
            console.log("VALOR DE SATUS:" + status);

            if (!(status != 0)) {
              _context5.next = 18;
              break;
            }

            if (status == "1") {
              Nuevo_status = "Aprobado";
            }

            if (status == "2") {
              Nuevo_status = "No Aprobado";
            }

            _context5.prev = 7;
            _context5.next = 10;
            return _Budgetline["default"].update({
              status: Nuevo_status
            }, {
              where: {
                id: id
              }
            });

          case 10:
            result = _context5.sent;

            if (result) {
              res.json({
                message: "Actualizado Satifactoriamente"
              });
            }

            _context5.next = 18;
            break;

          case 14:
            _context5.prev = 14;
            _context5.t0 = _context5["catch"](7);
            console.log(_context5.t0);
            return _context5.abrupt("return", res.json({
              message: 'Something Wrong in Update',
              data: {}
            }));

          case 18:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[7, 14]]);
  }));
  return _AprobarBudgetLinesbyId.apply(this, arguments);
}

function createBudgetLinesAtlas(_x11, _x12) {
  return _createBudgetLinesAtlas.apply(this, arguments);
} //funcion para obtener todos los renglones presupuestarios atlas de este projecto id
//nos ayuda a calcular los totales de presupuestos para las RowCardProjects


function _createBudgetLinesAtlas() {
  _createBudgetLinesAtlas = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee6(req, res) {
    var _req$body2, code_resultado, code_producto, code_activity, code_atlas, code_sub_atlas, code, details, date_start, date_end, account_id, project_id, user_id, supplier_id, budgetstart, budgeupdate, budgetfinal, balance, returns, deviation, status, approval, approvalby_id, dateapproval, newBudgetLineAtlas, project_budget, Budgetstart_old, balance_old, newBudgetStar, newBalance, result_update;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _req$body2 = req.body, code_resultado = _req$body2.code_resultado, code_producto = _req$body2.code_producto, code_activity = _req$body2.code_activity, code_atlas = _req$body2.code_atlas, code_sub_atlas = _req$body2.code_sub_atlas, code = _req$body2.code, details = _req$body2.details, date_start = _req$body2.date_start, date_end = _req$body2.date_end, account_id = _req$body2.account_id, project_id = _req$body2.project_id, user_id = _req$body2.user_id, supplier_id = _req$body2.supplier_id, budgetstart = _req$body2.budgetstart, budgeupdate = _req$body2.budgeupdate, budgetfinal = _req$body2.budgetfinal, balance = _req$body2.balance, returns = _req$body2.returns, deviation = _req$body2.deviation, status = _req$body2.status, approval = _req$body2.approval, approvalby_id = _req$body2.approvalby_id, dateapproval = _req$body2.dateapproval;
            _context6.prev = 1;
            _context6.next = 4;
            return _BudgetLineAtlas["default"].create({
              code_resultado: code_resultado,
              code_producto: code_producto,
              code_activity: code_activity,
              code_atlas: code_atlas,
              code_sub_atlas: code_sub_atlas,
              code: code,
              details: details,
              date_start: date_start,
              date_end: date_end,
              account_id: account_id,
              project_id: project_id,
              user_id: user_id,
              supplier_id: supplier_id,
              budgetstart: budgetstart,
              budgeupdate: budgeupdate,
              budgetfinal: budgetfinal,
              balance: balance,
              returns: returns,
              deviation: deviation,
              status: status,
              approval: approval,
              approvalby_id: approvalby_id,
              dateapproval: dateapproval
            }, {
              fields: ['code_resultado', 'code_producto', 'code_activity', 'code_atlas', 'code_sub_atlas', 'code', 'details', 'date_start', 'date_end', 'account_id', 'project_id', 'user_id', 'supplier_id', 'budgetstart', 'budgeupdate', 'budgetfinal', 'balance', 'returns', 'deviation', 'status', 'approval', 'approvalby_id', 'dateapproval']
            });

          case 4:
            newBudgetLineAtlas = _context6.sent;

            if (!newBudgetLineAtlas) {
              _context6.next = 27;
              break;
            }

            _context6.prev = 6;
            _context6.next = 9;
            return _Project["default"].findOne({
              where: {
                id: project_id
              },
              include: [_Budget["default"]]
            });

          case 9:
            project_budget = _context6.sent;
            //obtenemos el presupuesto inicial y el balance actual de la base de datos
            Budgetstart_old = project_budget.budget.budgetstart;
            balance_old = project_budget.budget.balance; //calculamos el nuevo balance y budgetstart

            newBudgetStar = parseFloat(Budgetstart_old) + parseFloat(budgetstart);
            newBalance = parseFloat(balance_old) + parseFloat(balance);
            _context6.next = 16;
            return _Budget["default"].update({
              budgetstart: newBudgetStar,
              balance: newBalance
            }, {
              where: {
                id: project_budget.budget.id
              }
            });

          case 16:
            result_update = _context6.sent;

            if (result_update) {
              res.json({
                message: "BudgetStarNEW Atlas Creado Satifactoriamente"
              });
            }

            _context6.next = 24;
            break;

          case 20:
            _context6.prev = 20;
            _context6.t0 = _context6["catch"](6);
            console.log(_context6.t0);
            return _context6.abrupt("return", res.json({
              message: 'Something Wrong in Update BudgetLine Atlas',
              data: {}
            }));

          case 24:
            return _context6.abrupt("return", res.json({
              message: "Renglon Presupuestario Atlas Creado Exitosamente",
              data: newBudgetLine
            }));

          case 27:
            return _context6.abrupt("return", res.json({
              message: "No se Pudo Crear el Nuevo Renglon Presupuestario ATLAS",
              data: {}
            }));

          case 28:
            _context6.next = 34;
            break;

          case 30:
            _context6.prev = 30;
            _context6.t1 = _context6["catch"](1);
            console.log(_context6.t1);
            res.status(500).json({
              message: "Error al crar nuevo Renglon Presupuestario Atlas",
              data: {}
            });

          case 34:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[1, 30], [6, 20]]);
  }));
  return _createBudgetLinesAtlas.apply(this, arguments);
}

function budgetLinesAtlasbyProjectId(_x13, _x14) {
  return _budgetLinesAtlasbyProjectId.apply(this, arguments);
} //Funcion para obtener los diferentes id de las categorias Atlas de los budgetlines
//nos ayuda en generar los TableCostAtlas


function _budgetLinesAtlasbyProjectId() {
  _budgetLinesAtlasbyProjectId = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee7(req, res) {
    var id, budgetLines_atlas;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            id = req.params.id;
            _context7.prev = 1;
            _context7.next = 4;
            return _BudgetLineAtlas["default"].findAll({
              include: [_Person["default"], _AtlasAccount["default"]],
              order: [['id', 'ASC']],
              where: {
                project_id: id
              }
            });

          case 4:
            budgetLines_atlas = _context7.sent;
            res.json({
              budgetLines_atlas: budgetLines_atlas
            });
            _context7.next = 11;
            break;

          case 8:
            _context7.prev = 8;
            _context7.t0 = _context7["catch"](1);
            console.log("ERROR AL QUERE LISTAR las Budgetline-Atlas:" + _context7.t0);

          case 11:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[1, 8]]);
  }));
  return _budgetLinesAtlasbyProjectId.apply(this, arguments);
}

function budgetLinesAccountsAtlasByProjectId(_x15, _x16) {
  return _budgetLinesAccountsAtlasByProjectId.apply(this, arguments);
} //funcion para aprobar un budgetLineAtlas


function _budgetLinesAccountsAtlasByProjectId() {
  _budgetLinesAccountsAtlasByProjectId = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee8(req, res) {
    var id, budgetAccountAtlas;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            id = req.params.id;
            _context8.prev = 1;
            _context8.next = 4;
            return BudgetlineAtlas.findAll({
              attributes: [[_sequelize["default"].fn('DISTINCT', _sequelize["default"].col('code_atlas')), 'code_atlas']],
              where: {
                project_id: id
              }
            });

          case 4:
            budgetAccountAtlas = _context8.sent;
            res.json({
              budgetAccountAtlas: budgetAccountAtlas
            });
            _context8.next = 11;
            break;

          case 8:
            _context8.prev = 8;
            _context8.t0 = _context8["catch"](1);
            console.log("ERROR AL QUERE LISTAR BudgetlineCategories:" + _context8.t0);

          case 11:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[1, 8]]);
  }));
  return _budgetLinesAccountsAtlasByProjectId.apply(this, arguments);
}

function AprobarBudgetLinesAtlasbyId(_x17, _x18) {
  return _AprobarBudgetLinesAtlasbyId.apply(this, arguments);
} //funcion para eliminar un budgetLineAtlas


function _AprobarBudgetLinesAtlasbyId() {
  _AprobarBudgetLinesAtlasbyId = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee9(req, res) {
    var Nuevo_status, _req$params3, id, status, valor, result;

    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            Nuevo_status = '';
            _req$params3 = req.params, id = _req$params3.id, status = _req$params3.status, valor = _req$params3.valor;
            console.log("VALOR DE ID:" + id);
            console.log("VALOR DE STATUS:" + status);

            if (!(status != 0)) {
              _context9.next = 18;
              break;
            }

            if (status == "1") {
              Nuevo_status = "Aprobado";
            }

            if (status == "2") {
              Nuevo_status = "No Aprobado";
            }

            _context9.prev = 7;
            _context9.next = 10;
            return _BudgetLineAtlas["default"].update({
              status: Nuevo_status,
              budgeupdate: valor,
              balance: 0
            }, {
              where: {
                id: id
              }
            });

          case 10:
            result = _context9.sent;

            if (result) {
              res.json({
                message: "Actualizado Satifactoriamente"
              });
            }

            _context9.next = 18;
            break;

          case 14:
            _context9.prev = 14;
            _context9.t0 = _context9["catch"](7);
            console.log(_context9.t0);
            return _context9.abrupt("return", res.json({
              message: 'Something Wrong in Update',
              data: {}
            }));

          case 18:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[7, 14]]);
  }));
  return _AprobarBudgetLinesAtlasbyId.apply(this, arguments);
}

function deleteBudgetLinesAtlas(_x19, _x20) {
  return _deleteBudgetLinesAtlas.apply(this, arguments);
}

function _deleteBudgetLinesAtlas() {
  _deleteBudgetLinesAtlas = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee10(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            id = req.params.id;
            _context10.prev = 1;
            _context10.next = 4;
            return _BudgetLineAtlas["default"].destroy({
              where: {
                id: id
              }
            });

          case 4:
            deleteRowCount = _context10.sent;
            res.json({
              message: "BudgetLineAtlas Eliminado Satifactoriamente",
              count: deleteRowCount
            });
            _context10.next = 11;
            break;

          case 8:
            _context10.prev = 8;
            _context10.t0 = _context10["catch"](1);
            console.log("ERROR AL QUERE ELIMINAR EL BudgetLineAtlas:" + _context10.t0);

          case 11:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, null, [[1, 8]]);
  }));
  return _deleteBudgetLinesAtlas.apply(this, arguments);
}