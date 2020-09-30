"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.budgetLinesbyProjectId = budgetLinesbyProjectId;
exports.budgetLinesbyProjectIdAndBudgetId = budgetLinesbyProjectIdAndBudgetId;
exports.updateBudgetLinesbyProjectIdAndBudgetId = updateBudgetLinesbyProjectIdAndBudgetId;
exports.budgetLinesCatgoriesByProjectId = budgetLinesCatgoriesByProjectId;
exports.budgetLinesbyProjectIdCategories = budgetLinesbyProjectIdCategories;
exports.createBudgetLines = createBudgetLines;
exports.AprobarBudgetLinesbyId = AprobarBudgetLinesbyId;
exports.deleteBudgetLines = deleteBudgetLines;
exports.createBudgetLinesAtlas = createBudgetLinesAtlas;
exports.budgetLinesAtlasbyProjectId = budgetLinesAtlasbyProjectId;
exports.budgetLinesAccountsAtlasByProjectId = budgetLinesAccountsAtlasByProjectId;
exports.AprobarBudgetLinesAtlasbyId = AprobarBudgetLinesAtlasbyId;
exports.deleteBudgetLinesAtlas = deleteBudgetLinesAtlas;
exports.ReporteAtlasByProjectID = ReporteAtlasByProjectID;
exports.budgets_by_projectid_and_atlasaccountid = budgets_by_projectid_and_atlasaccountid;
exports.findAtlasAccountsByProjAct = findAtlasAccountsByProjAct;
exports.GraficaAtlasByProjectID = GraficaAtlasByProjectID;
exports.GraficaByProjectID = GraficaByProjectID;

var _Budgetline = _interopRequireDefault(require("../models/Budgetline"));

var _Category = _interopRequireDefault(require("../models/Category"));

var _Person = _interopRequireDefault(require("../models/Person"));

var _Project = _interopRequireDefault(require("../models/Project"));

var _Budget = _interopRequireDefault(require("../models/Budget"));

var _sequelize = _interopRequireDefault(require("sequelize"));

var _BudgetLineAtlas = _interopRequireDefault(require("../models/BudgetLineAtlas"));

var _AtlasAccount = _interopRequireDefault(require("../models/AtlasAccount"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//funcion para obtener todos los renglones presupuestario de este projecto id
//nos ayuda a calcular los totales de presupuestos para las RowCardProjects
function budgetLinesbyProjectId(_x, _x2) {
  return _budgetLinesbyProjectId.apply(this, arguments);
} //Funcion para obtenet un Unico renglon presupuestario dado el proyectoId y el Id del Bidget


function _budgetLinesbyProjectId() {
  _budgetLinesbyProjectId = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
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
              order: [["code", "Desc"]],
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

function budgetLinesbyProjectIdAndBudgetId(_x3, _x4) {
  return _budgetLinesbyProjectIdAndBudgetId.apply(this, arguments);
} //Funcion par aeditar un renglon dado su proyectId y su Id unico


function _budgetLinesbyProjectIdAndBudgetId() {
  _budgetLinesbyProjectIdAndBudgetId = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$params, proyectid, id, project, budgetLine, _budgetLine;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$params = req.params, proyectid = _req$params.proyectid, id = _req$params.id; //obtenemos el proyecto para determinar si el presupuesto es de tipo atlas

            _context2.next = 3;
            return _Project["default"].findOne({
              include: [_Budget["default"]],
              where: {
                id: proyectid
              }
            });

          case 3:
            project = _context2.sent;
            _context2.prev = 4;

            if (!(project.budget.tipo == "atlas")) {
              _context2.next = 12;
              break;
            }

            _context2.next = 8;
            return _BudgetLineAtlas["default"].findOne({
              include: [_Person["default"]],
              where: {
                project_id: proyectid,
                id: id
              }
            });

          case 8:
            budgetLine = _context2.sent;
            res.json({
              budgetLine: budgetLine
            });
            _context2.next = 16;
            break;

          case 12:
            _context2.next = 14;
            return _Budgetline["default"].findOne({
              include: [_Person["default"]],
              where: {
                project_id: proyectid,
                id: id
              }
            });

          case 14:
            _budgetLine = _context2.sent;
            res.json({
              budgetLine: _budgetLine
            });

          case 16:
            _context2.next = 21;
            break;

          case 18:
            _context2.prev = 18;
            _context2.t0 = _context2["catch"](4);
            console.log("ERROR AL QUERE LISTAR One Budgetline:" + _context2.t0);

          case 21:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[4, 18]]);
  }));
  return _budgetLinesbyProjectIdAndBudgetId.apply(this, arguments);
}

function updateBudgetLinesbyProjectIdAndBudgetId(_x5, _x6) {
  return _updateBudgetLinesbyProjectIdAndBudgetId.apply(this, arguments);
} //Funcion para obtener los diferentes id de las categorias de los budgetlines
//nos ayuda en generar los TableCost


function _updateBudgetLinesbyProjectIdAndBudgetId() {
  _updateBudgetLinesbyProjectIdAndBudgetId = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var _req$params2, proyectid, id, project, _req$body, code, description, date_start, date_end, category_id, sub_category_code, account_id, supplier_id, balance, result, _result;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$params2 = req.params, proyectid = _req$params2.proyectid, id = _req$params2.id; //obtenemos el proyecto para determinar si el presupuesto es de tipo atlas

            _context3.next = 3;
            return _Project["default"].findOne({
              include: [_Budget["default"]],
              where: {
                id: proyectid
              }
            });

          case 3:
            project = _context3.sent;
            _req$body = req.body, code = _req$body.code, description = _req$body.description, date_start = _req$body.date_start, date_end = _req$body.date_end, category_id = _req$body.category_id, sub_category_code = _req$body.sub_category_code, account_id = _req$body.account_id, supplier_id = _req$body.supplier_id, balance = _req$body.balance;

            if (!(project.budget.tipo == "atlas")) {
              _context3.next = 19;
              break;
            }

            _context3.prev = 6;
            _context3.next = 9;
            return BudgetlineAtlas.update({
              code: code,
              description: description,
              date_start: date_start,
              date_end: date_end,
              category_id: category_id,
              sub_category_code: sub_category_code,
              account_id: account_id,
              supplier_id: supplier_id,
              balance: balance
            }, {
              where: {
                project_id: proyectid,
                id: id
              }
            });

          case 9:
            result = _context3.sent;

            if (result) {
              res.json({
                message: "REnglon Presupuestario Atlas Actualizado Satifactoriamente"
              });
            }

            _context3.next = 17;
            break;

          case 13:
            _context3.prev = 13;
            _context3.t0 = _context3["catch"](6);
            console.log(_context3.t0);
            return _context3.abrupt("return", res.json({
              message: "Something Wrong in Update",
              data: {}
            }));

          case 17:
            _context3.next = 30;
            break;

          case 19:
            _context3.prev = 19;
            _context3.next = 22;
            return _Budgetline["default"].update({
              code: code,
              description: description,
              date_start: date_start,
              date_end: date_end,
              category_id: category_id,
              sub_category_code: sub_category_code,
              account_id: account_id,
              supplier_id: supplier_id,
              balance: balance
            }, {
              where: {
                project_id: proyectid,
                id: id
              }
            });

          case 22:
            _result = _context3.sent;

            if (_result) {
              res.json({
                message: "REnglon Presupuestario Estandar Actualizado Satifactoriamente"
              });
            }

            _context3.next = 30;
            break;

          case 26:
            _context3.prev = 26;
            _context3.t1 = _context3["catch"](19);
            console.log(_context3.t1);
            return _context3.abrupt("return", res.json({
              message: "Something Wrong in Update",
              data: {}
            }));

          case 30:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[6, 13], [19, 26]]);
  }));
  return _updateBudgetLinesbyProjectIdAndBudgetId.apply(this, arguments);
}

function budgetLinesCatgoriesByProjectId(_x7, _x8) {
  return _budgetLinesCatgoriesByProjectId.apply(this, arguments);
} //funcion para mostar los renglones presupuestarios clasificados por projectos y categorias
//ayuda a desplegar las tablas de renglones


function _budgetLinesCatgoriesByProjectId() {
  _budgetLinesCatgoriesByProjectId = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, budgetCategories;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _context4.prev = 1;
            _context4.next = 4;
            return _Budgetline["default"].findAll({
              attributes: [[_sequelize["default"].fn("DISTINCT", _sequelize["default"].col("category_id")), "category_id"]],
              where: {
                project_id: id
              }
            });

          case 4:
            budgetCategories = _context4.sent;
            res.json({
              budgetCategories: budgetCategories
            });
            _context4.next = 11;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](1);
            console.log("ERROR AL QUERE LISTAR BudgetlineCategories:" + _context4.t0);

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 8]]);
  }));
  return _budgetLinesCatgoriesByProjectId.apply(this, arguments);
}

function budgetLinesbyProjectIdCategories(_x9, _x10) {
  return _budgetLinesbyProjectIdCategories.apply(this, arguments);
} //funion para crear nuevos renglones presupuestarios


function _budgetLinesbyProjectIdCategories() {
  _budgetLinesbyProjectIdCategories = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var _req$params3, idPro, idCat, budgetLinesCat;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _req$params3 = req.params, idPro = _req$params3.idPro, idCat = _req$params3.idCat;
            _context5.prev = 1;
            _context5.next = 4;
            return _Budgetline["default"].findAll({
              /* include: [
                        { model: Category, where: { id: idCat }}
                     ], */
              include: [_Category["default"], _Person["default"]],
              // attributes: [sequelize.fn('DISTINCT', sequelize.col('category_id')), 'categorias'],
              //attributes: [['category_id','categoria'] ],
              order: [["category_id", "ASC"]],
              where: {
                project_id: idPro,
                category_id: idCat
              }
            });

          case 4:
            budgetLinesCat = _context5.sent;
            res.json({
              budgetLinesCat: budgetLinesCat
            });
            _context5.next = 11;
            break;

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](1);
            console.log("ERROR AL QUERE LISTAR Budgetline Category:" + _context5.t0);

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[1, 8]]);
  }));
  return _budgetLinesbyProjectIdCategories.apply(this, arguments);
}

function createBudgetLines(_x11, _x12) {
  return _createBudgetLines.apply(this, arguments);
}

function _createBudgetLines() {
  _createBudgetLines = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var _req$body2, code, name, description, date_start, date_end, category_id, sub_category_code, account_id, project_id, user_id, supplier_id, buddgetstart, buddgeupdate, buddgetfinal, balance, status, _newBudgetLine, project_budget, Budgetstart_old, balance_old, newBudgetStar, newBalance, result_update;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _req$body2 = req.body, code = _req$body2.code, name = _req$body2.name, description = _req$body2.description, date_start = _req$body2.date_start, date_end = _req$body2.date_end, category_id = _req$body2.category_id, sub_category_code = _req$body2.sub_category_code, account_id = _req$body2.account_id, project_id = _req$body2.project_id, user_id = _req$body2.user_id, supplier_id = _req$body2.supplier_id, buddgetstart = _req$body2.buddgetstart, buddgeupdate = _req$body2.buddgeupdate, buddgetfinal = _req$body2.buddgetfinal, balance = _req$body2.balance, status = _req$body2.status;
            _context6.prev = 1;
            _context6.next = 4;
            return _Budgetline["default"].create({
              code: code,
              name: name,
              description: description,
              date_start: date_start,
              date_end: date_end,
              category_id: category_id,
              sub_category_code: sub_category_code,
              account_id: account_id,
              project_id: project_id,
              user_id: user_id,
              supplier_id: supplier_id,
              buddgetstart: buddgetstart,
              buddgeupdate: buddgeupdate,
              buddgetfinal: buddgetfinal,
              balance: balance,
              status: status
              /*returns,
              deviation,
              approval,
              approvalby_id,
              dateapproval,*/

            }, {
              fields: ["code", "name", "description", "date_start", "date_end", "category_id", "sub_category_code", "account_id", "project_id", "user_id", "supplier_id", "buddgetstart", "buddgeupdate", "buddgetfinal", "balance", "status"
              /*"returns",
              "deviation",
              "approval",
              "approvalby_id",
              "dateapproval",*/
              ]
            });

          case 4:
            _newBudgetLine = _context6.sent;

            if (!_newBudgetLine) {
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
            Budgetstart_old = project_budget.budget.buddgetstart;
            balance_old = project_budget.budget.balance; //calculamos el nuevo balance y budgetstart

            newBudgetStar = parseFloat(Budgetstart_old) + parseFloat(buddgetstart);
            newBalance = parseFloat(balance_old) + parseFloat(balance);
            _context6.next = 16;
            return _Budget["default"].update({
              buddgetstart: newBudgetStar,
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
                message: "BudgetStarNEW Actualizado Satifactoriamente"
              });
            }

            _context6.next = 24;
            break;

          case 20:
            _context6.prev = 20;
            _context6.t0 = _context6["catch"](6);
            console.log(_context6.t0);
            return _context6.abrupt("return", res.json({
              message: "Something Wrong in Update BudgetLine",
              data: {}
            }));

          case 24:
            return _context6.abrupt("return", res.json({
              message: "Renglon Presupuestario Creado Exitosamente",
              data: _newBudgetLine
            }));

          case 27:
            return _context6.abrupt("return", res.json({
              message: "No se Pudo Crear el Nuevo Renglon Presupuestario",
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
              message: "Error al crear nuevo Renglon Presupuestario",
              data: {}
            });

          case 34:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[1, 30], [6, 20]]);
  }));
  return _createBudgetLines.apply(this, arguments);
}

function AprobarBudgetLinesbyId(_x13, _x14) {
  return _AprobarBudgetLinesbyId.apply(this, arguments);
} //funcion para eliminar un budgetLine


function _AprobarBudgetLinesbyId() {
  _AprobarBudgetLinesbyId = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var Nuevo_status, _req$params4, id, status, valor, result;

    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            Nuevo_status = "";
            _req$params4 = req.params, id = _req$params4.id, status = _req$params4.status, valor = _req$params4.valor;

            if (!(status != 0)) {
              _context7.next = 16;
              break;
            }

            if (status == "1") {
              Nuevo_status = "Aprobado";
            }

            if (status == "2") {
              Nuevo_status = "No Aprobado";
            }

            _context7.prev = 5;
            _context7.next = 8;
            return _Budgetline["default"].update({
              status: Nuevo_status,
              balance: valor
            }, {
              where: {
                id: id
              }
            });

          case 8:
            result = _context7.sent;

            if (result) {
              res.json({
                message: "Actualizado Satifactoriamente"
              });
            }

            _context7.next = 16;
            break;

          case 12:
            _context7.prev = 12;
            _context7.t0 = _context7["catch"](5);
            console.log(_context7.t0);
            return _context7.abrupt("return", res.json({
              message: "Something Wrong in Update",
              data: {}
            }));

          case 16:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[5, 12]]);
  }));
  return _AprobarBudgetLinesbyId.apply(this, arguments);
}

function deleteBudgetLines(_x15, _x16) {
  return _deleteBudgetLines.apply(this, arguments);
} /// CREACION DE RENGLON PPRESUPUESTARIO MODALIDAD ATLAS/////
//funion para crear nuevos renglones presupuestarios en la tabla budgetlines_atlas


function _deleteBudgetLines() {
  _deleteBudgetLines = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            id = req.params.id;
            _context8.prev = 1;
            _context8.next = 4;
            return _Budgetline["default"].destroy({
              where: {
                id: id
              }
            });

          case 4:
            deleteRowCount = _context8.sent;
            res.json({
              message: "BudgetLine Eliminado Satifactoriamente",
              count: deleteRowCount
            });
            _context8.next = 11;
            break;

          case 8:
            _context8.prev = 8;
            _context8.t0 = _context8["catch"](1);
            console.log("ERROR AL QUERE ELIMINAR EL BudgetLine:" + _context8.t0);

          case 11:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[1, 8]]);
  }));
  return _deleteBudgetLines.apply(this, arguments);
}

function createBudgetLinesAtlas(_x17, _x18) {
  return _createBudgetLinesAtlas.apply(this, arguments);
} //funcion para obtener todos los renglones presupuestarios atlas de este projecto id
//nos ayuda a calcular los totales de presupuestos para las RowCardProjects


function _createBudgetLinesAtlas() {
  _createBudgetLinesAtlas = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(req, res) {
    var _req$body3, code_resultado, code_producto, code_activity, code_atlas, code_sub_atlas, code, details, date_start, date_end, account_id, project_id, user_id, supplier_id, budgetstart, budgeupdate, budgetfinal, balance, returns, deviation, status, approval, approvalby_id, dateapproval, comentario, newBudgetLineAtlas, project_budget, Budgetstart_old, balance_old, newBudgetStar, newBalance, result_update;

    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _req$body3 = req.body, code_resultado = _req$body3.code_resultado, code_producto = _req$body3.code_producto, code_activity = _req$body3.code_activity, code_atlas = _req$body3.code_atlas, code_sub_atlas = _req$body3.code_sub_atlas, code = _req$body3.code, details = _req$body3.details, date_start = _req$body3.date_start, date_end = _req$body3.date_end, account_id = _req$body3.account_id, project_id = _req$body3.project_id, user_id = _req$body3.user_id, supplier_id = _req$body3.supplier_id, budgetstart = _req$body3.budgetstart, budgeupdate = _req$body3.budgeupdate, budgetfinal = _req$body3.budgetfinal, balance = _req$body3.balance, returns = _req$body3.returns, deviation = _req$body3.deviation, status = _req$body3.status, approval = _req$body3.approval, approvalby_id = _req$body3.approvalby_id, dateapproval = _req$body3.dateapproval, comentario = _req$body3.comentario;
            _context9.prev = 1;
            _context9.next = 4;
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
              dateapproval: dateapproval,
              comentario: comentario
            }, {
              fields: ["code_resultado", "code_producto", "code_activity", "code_atlas", "code_sub_atlas", "code", "details", "date_start", "date_end", "account_id", "project_id", "user_id", "supplier_id", "budgetstart", "budgeupdate", "budgetfinal", "balance", "returns", "deviation", "status", "approval", "approvalby_id", "dateapproval", "comentario"]
            });

          case 4:
            newBudgetLineAtlas = _context9.sent;

            if (!newBudgetLineAtlas) {
              _context9.next = 27;
              break;
            }

            _context9.prev = 6;
            _context9.next = 9;
            return _Project["default"].findOne({
              where: {
                id: project_id
              },
              include: [_Budget["default"]]
            });

          case 9:
            project_budget = _context9.sent;
            //obtenemos el presupuesto inicial y el balance actual de la base de datos
            Budgetstart_old = project_budget.budget.budgetstart;
            balance_old = project_budget.budget.balance; //calculamos el nuevo balance y budgetstart

            newBudgetStar = parseFloat(Budgetstart_old) + parseFloat(budgetstart);
            newBalance = parseFloat(balance_old) + parseFloat(balance);
            _context9.next = 16;
            return _Budget["default"].update({
              budgetstart: newBudgetStar,
              balance: newBalance
            }, {
              where: {
                id: project_budget.budget.id
              }
            });

          case 16:
            result_update = _context9.sent;

            if (result_update) {
              res.json({
                message: "BudgetStarNEW Atlas Creado Satifactoriamente"
              });
            }

            _context9.next = 24;
            break;

          case 20:
            _context9.prev = 20;
            _context9.t0 = _context9["catch"](6);
            console.log(_context9.t0);
            return _context9.abrupt("return", res.json({
              message: "Something Wrong in Update BudgetLine Atlas",
              data: {}
            }));

          case 24:
            return _context9.abrupt("return", res.json({
              message: "Renglon Presupuestario Atlas Creado Exitosamente",
              data: newBudgetLine
            }));

          case 27:
            return _context9.abrupt("return", res.json({
              message: "No se Pudo Crear el Nuevo Renglon Presupuestario ATLAS",
              data: {}
            }));

          case 28:
            _context9.next = 34;
            break;

          case 30:
            _context9.prev = 30;
            _context9.t1 = _context9["catch"](1);
            console.log(_context9.t1);
            res.status(500).json({
              message: "Error al crar nuevo Renglon Presupuestario Atlas",
              data: {}
            });

          case 34:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[1, 30], [6, 20]]);
  }));
  return _createBudgetLinesAtlas.apply(this, arguments);
}

function budgetLinesAtlasbyProjectId(_x19, _x20) {
  return _budgetLinesAtlasbyProjectId.apply(this, arguments);
} //Funcion para obtener los diferentes id de las categorias Atlas de los budgetlines
//nos ayuda en generar los TableCostAtlas


function _budgetLinesAtlasbyProjectId() {
  _budgetLinesAtlasbyProjectId = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(req, res) {
    var id, budgetLines_atlas;
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            id = req.params.id;
            _context10.prev = 1;
            _context10.next = 4;
            return _BudgetLineAtlas["default"].findAll({
              include: [_Person["default"], _AtlasAccount["default"]],
              order: [["id", "DESC"]],
              where: {
                project_id: id
              }
            });

          case 4:
            budgetLines_atlas = _context10.sent;
            res.json({
              budgetLines_atlas: budgetLines_atlas
            });
            _context10.next = 11;
            break;

          case 8:
            _context10.prev = 8;
            _context10.t0 = _context10["catch"](1);
            console.log("ERROR AL QUERE LISTAR las Budgetline-Atlas:" + _context10.t0);

          case 11:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, null, [[1, 8]]);
  }));
  return _budgetLinesAtlasbyProjectId.apply(this, arguments);
}

function budgetLinesAccountsAtlasByProjectId(_x21, _x22) {
  return _budgetLinesAccountsAtlasByProjectId.apply(this, arguments);
} //funcion para aprobar un budgetLineAtlas


function _budgetLinesAccountsAtlasByProjectId() {
  _budgetLinesAccountsAtlasByProjectId = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(req, res) {
    var id, budgetAccountAtlas;
    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            id = req.params.id;
            _context11.prev = 1;
            _context11.next = 4;
            return BudgetlineAtlas.findAll({
              attributes: [[_sequelize["default"].fn("DISTINCT", _sequelize["default"].col("code_atlas")), "code_atlas"]],
              where: {
                project_id: id
              }
            });

          case 4:
            budgetAccountAtlas = _context11.sent;
            res.json({
              budgetAccountAtlas: budgetAccountAtlas
            });
            _context11.next = 11;
            break;

          case 8:
            _context11.prev = 8;
            _context11.t0 = _context11["catch"](1);
            console.log("ERROR AL QUERE LISTAR BudgetlineCategories:" + _context11.t0);

          case 11:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, null, [[1, 8]]);
  }));
  return _budgetLinesAccountsAtlasByProjectId.apply(this, arguments);
}

function AprobarBudgetLinesAtlasbyId(_x23, _x24) {
  return _AprobarBudgetLinesAtlasbyId.apply(this, arguments);
} //funcion para eliminar un budgetLineAtlas


function _AprobarBudgetLinesAtlasbyId() {
  _AprobarBudgetLinesAtlasbyId = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(req, res) {
    var Nuevo_status, _req$params5, id, status, valor, comentario, result;

    return regeneratorRuntime.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            Nuevo_status = "";
            _req$params5 = req.params, id = _req$params5.id, status = _req$params5.status, valor = _req$params5.valor, comentario = _req$params5.comentario;

            if (!(status != 0)) {
              _context12.next = 16;
              break;
            }

            if (status == "1") {
              Nuevo_status = "Aprobado";
            }

            if (status == "2") {
              Nuevo_status = "No Aprobado";
            }

            _context12.prev = 5;
            _context12.next = 8;
            return _BudgetLineAtlas["default"].update({
              status: Nuevo_status,
              balance: valor,
              comentario: comentario
            }, {
              where: {
                id: id
              }
            });

          case 8:
            result = _context12.sent;

            if (result) {
              res.json({
                message: "Actualizado Satifactoriamente"
              });
            }

            _context12.next = 16;
            break;

          case 12:
            _context12.prev = 12;
            _context12.t0 = _context12["catch"](5);
            console.log(_context12.t0);
            return _context12.abrupt("return", res.json({
              message: "Something Wrong in Update",
              data: {}
            }));

          case 16:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12, null, [[5, 12]]);
  }));
  return _AprobarBudgetLinesAtlasbyId.apply(this, arguments);
}

function deleteBudgetLinesAtlas(_x25, _x26) {
  return _deleteBudgetLinesAtlas.apply(this, arguments);
}
/********INICIO DE REPORTS FUNCTIONS */

/************************************ */


function _deleteBudgetLinesAtlas() {
  _deleteBudgetLinesAtlas = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            id = req.params.id;
            _context13.prev = 1;
            _context13.next = 4;
            return _BudgetLineAtlas["default"].destroy({
              where: {
                id: id
              }
            });

          case 4:
            deleteRowCount = _context13.sent;
            res.json({
              message: "BudgetLineAtlas Eliminado Satifactoriamente",
              count: deleteRowCount
            });
            _context13.next = 11;
            break;

          case 8:
            _context13.prev = 8;
            _context13.t0 = _context13["catch"](1);
            console.log("ERROR AL QUERE ELIMINAR EL BudgetLineAtlas:" + _context13.t0);

          case 11:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13, null, [[1, 8]]);
  }));
  return _deleteBudgetLinesAtlas.apply(this, arguments);
}

function ReporteAtlasByProjectID(_x27, _x28) {
  return _ReporteAtlasByProjectID.apply(this, arguments);
}

function _ReporteAtlasByProjectID() {
  _ReporteAtlasByProjectID = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(req, res) {
    var id, ArrayReportebyProject;
    return regeneratorRuntime.wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            id = req.params.id; // obtenemos el id del proyecto

            _context14.prev = 1;
            _context14.next = 4;
            return _BudgetLineAtlas["default"].findAll({
              attributes: ["code_atlas", [_sequelize["default"].fn("SUM", _sequelize["default"].col("balance")), "TOTAL"], [_sequelize["default"].fn("SUM", _sequelize["default"].col("budgetstart")), "inicial"]],
              include: [{
                model: _AtlasAccount["default"],
                attributes: ["name", "code"]
              }],
              where: {
                project_id: id,
                status: "Aprobado"
              },
              group: ["budgetlines_atlas.code_atlas", "atlas_account.id"]
            });

          case 4:
            ArrayReportebyProject = _context14.sent;
            res.json({
              ArrayReportebyProject: ArrayReportebyProject
            });
            _context14.next = 11;
            break;

          case 8:
            _context14.prev = 8;
            _context14.t0 = _context14["catch"](1);
            console.log("ERROR AL QUERE LISTAR  Reporte_atlas_by_project:" + _context14.t0);

          case 11:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14, null, [[1, 8]]);
  }));
  return _ReporteAtlasByProjectID.apply(this, arguments);
}

function budgets_by_projectid_and_atlasaccountid(_x29, _x30) {
  return _budgets_by_projectid_and_atlasaccountid.apply(this, arguments);
} //reporte para obtener los codigos atlas desde los busgetsLines, filtrados por projectos y activities


function _budgets_by_projectid_and_atlasaccountid() {
  _budgets_by_projectid_and_atlasaccountid = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(req, res) {
    var _req$params6, project_id, atlas_account_id, coin_id, year, ArrayReporteBudgetsByProjectIdByAccountId;

    return regeneratorRuntime.wrap(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            _req$params6 = req.params, project_id = _req$params6.project_id, atlas_account_id = _req$params6.atlas_account_id, coin_id = _req$params6.coin_id, year = _req$params6.year; // obtenemos los valores enviados

            _context15.prev = 1;
            _context15.next = 4;
            return _BudgetLineAtlas["default"].findAll({
              include: [{
                model: _AtlasAccount["default"],
                attributes: ["name", "code"]
              }],
              where: {
                project_id: project_id,
                code_atlas: atlas_account_id,
                status: "Aprobado"
              },
              order: [["id", "DESC"]]
            });

          case 4:
            ArrayReporteBudgetsByProjectIdByAccountId = _context15.sent;
            res.json({
              ArrayReporteBudgetsByProjectIdByAccountId: ArrayReporteBudgetsByProjectIdByAccountId
            });
            _context15.next = 11;
            break;

          case 8:
            _context15.prev = 8;
            _context15.t0 = _context15["catch"](1);
            console.log("ERROR AL QUERE LISTAR  ArrayReporteBudgetsByProjectIdByAccountId:" + _context15.t0);

          case 11:
          case "end":
            return _context15.stop();
        }
      }
    }, _callee15, null, [[1, 8]]);
  }));
  return _budgets_by_projectid_and_atlasaccountid.apply(this, arguments);
}

function findAtlasAccountsByProjAct(_x31, _x32) {
  return _findAtlasAccountsByProjAct.apply(this, arguments);
}
/********FIN DE REPORTS FUNCTIONS */

/************************************ */

/* Reporte ATLAS semanal para las graficas del dashboard */


function _findAtlasAccountsByProjAct() {
  _findAtlasAccountsByProjAct = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(req, res) {
    var _req$params7, project_id, code_activity, results;

    return regeneratorRuntime.wrap(function _callee16$(_context16) {
      while (1) {
        switch (_context16.prev = _context16.next) {
          case 0:
            _req$params7 = req.params, project_id = _req$params7.project_id, code_activity = _req$params7.code_activity; // obtenemos el id del proyecto y de activity

            _context16.prev = 1;
            _context16.next = 4;
            return _database.sequelize.query("SELECT DISTINCT(budgetlines_atlas.code_atlas) AS code_atlas2, atlas_account.name AS name,  atlas_account.code AS code FROM budgetlines_atlas , atlas_accounts as atlas_account Where budgetlines_atlas.code_atlas = atlas_account.id  AND budgetlines_atlas.project_id = " + project_id + " AND budgetlines_atlas.status = 'Aprobado' AND budgetlines_atlas.code_activity = '" + code_activity + "'", {
              type: _sequelize["default"].QueryTypes.SELECT
            });

          case 4:
            results = _context16.sent;
            console.log("Result=" + results);
            res.json({
              results: results
            });
            /*const atlasaccounts = await BudgetLineAtlas.findAll({
                attributes: [[sequelize["default"].fn('DISTINCT', sequelize["default"].col('budgetlines_atlas.code_atlas')), 'code_atlas2']],
                include: [{
                model: AtlasAccount,
                attributes: ["name", "code"]
              }],
                where: {
                project_id: project_id,
                status: "Aprobado",
                code_activity: code_activity
              }
              });
            res.json({
              atlasaccounts,
            });*/

            _context16.next = 12;
            break;

          case 9:
            _context16.prev = 9;
            _context16.t0 = _context16["catch"](1);
            console.log("ERROR AL QUERE LISTAR findAtlasAccountsByProjAct:" + _context16.t0);

          case 12:
          case "end":
            return _context16.stop();
        }
      }
    }, _callee16, null, [[1, 9]]);
  }));
  return _findAtlasAccountsByProjAct.apply(this, arguments);
}

function GraficaAtlasByProjectID(_x33, _x34) {
  return _GraficaAtlasByProjectID.apply(this, arguments);
}
/* Reporte NO ATLAS semanal para las graficas del dashboard */


function _GraficaAtlasByProjectID() {
  _GraficaAtlasByProjectID = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17(req, res) {
    var id, ArrayGraficabyProject;
    return regeneratorRuntime.wrap(function _callee17$(_context17) {
      while (1) {
        switch (_context17.prev = _context17.next) {
          case 0:
            id = req.params.id; // obtenemos el id del proyecto

            _context17.prev = 1;
            _context17.next = 4;
            return _BudgetLineAtlas["default"].findAll({
              attributes: [
              /*sequelize.fn('date_part', 'week', sequelize.col('date_start'))*/
              [_sequelize["default"].literal("date_part('week', date_start)"), 'week'], [_sequelize["default"].fn("SUM", _sequelize["default"].col("balance")), "balance"]],
              where: {
                project_id: id,
                status: "Aprobado"
              },

              /*group: [sequelize.fn('date_part', 'week', sequelize.col('date_start'))],*/

              /*order: sequelize.col("date_part('week', date_start)")*/
              group: ['week'],
              order: _sequelize["default"].col("week")
            });

          case 4:
            ArrayGraficabyProject = _context17.sent;
            res.json({
              ArrayGraficabyProject: ArrayGraficabyProject
            });
            _context17.next = 11;
            break;

          case 8:
            _context17.prev = 8;
            _context17.t0 = _context17["catch"](1);
            console.log("ERROR AL QUERE LISTAR  Grafica_atlas_by_project:" + _context17.t0);

          case 11:
          case "end":
            return _context17.stop();
        }
      }
    }, _callee17, null, [[1, 8]]);
  }));
  return _GraficaAtlasByProjectID.apply(this, arguments);
}

function GraficaByProjectID(_x35, _x36) {
  return _GraficaByProjectID.apply(this, arguments);
}

function _GraficaByProjectID() {
  _GraficaByProjectID = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18(req, res) {
    var id, ArrayGraficabyProject;
    return regeneratorRuntime.wrap(function _callee18$(_context18) {
      while (1) {
        switch (_context18.prev = _context18.next) {
          case 0:
            id = req.params.id; // obtenemos el id del proyecto

            _context18.prev = 1;
            _context18.next = 4;
            return _Budgetline["default"].findAll({
              attributes: [
              /*sequelize.fn('date_part', 'week', sequelize.col('date_start'))*/
              [_sequelize["default"].literal("date_part('week', date_start)"), 'week'], [_sequelize["default"].fn("SUM", _sequelize["default"].col("balance")), "balance"]],
              where: {
                project_id: id,
                status: "Aprobado"
              },

              /*group: [sequelize.fn('date_part', 'week', sequelize.col('date_start'))],*/

              /*order: sequelize.col("date_part('week', date_start)")*/
              group: ['week'],
              order: _sequelize["default"].col("week")
            });

          case 4:
            ArrayGraficabyProject = _context18.sent;
            res.json({
              ArrayGraficabyProject: ArrayGraficabyProject
            });
            _context18.next = 11;
            break;

          case 8:
            _context18.prev = 8;
            _context18.t0 = _context18["catch"](1);
            console.log("ERROR AL QUERE LISTAR  Grafica_atlas_by_project:" + _context18.t0);

          case 11:
          case "end":
            return _context18.stop();
        }
      }
    }, _callee18, null, [[1, 8]]);
  }));
  return _GraficaByProjectID.apply(this, arguments);
}