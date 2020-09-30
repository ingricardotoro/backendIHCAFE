"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listTeams = listTeams;
exports.findOneTeam = findOneTeam;
exports.createTeam = createTeam;
exports.deleteTeam = deleteTeam;

var _Team = _interopRequireDefault(require("../models/Team"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function listTeams(_x, _x2) {
  return _listTeams.apply(this, arguments);
}

function _listTeams() {
  _listTeams = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var teams;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Team["default"].findAll();

          case 3:
            teams = _context.sent;
            res.json({
              teams: teams
            });
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log("ERROR AL QUERE LISTAR EQUIPOS:" + _context.t0);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));
  return _listTeams.apply(this, arguments);
}

function findOneTeam(_x3, _x4) {
  return _findOneTeam.apply(this, arguments);
}

function _findOneTeam() {
  _findOneTeam = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id, team;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;
            _context2.prev = 1;
            _context2.next = 4;
            return _Team["default"].findOne({
              where: {
                id: id
              }
            });

          case 4:
            team = _context2.sent;
            res.json({
              team: team
            });
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            console.log("ERROR AL Buscar EQUIPO:" + _context2.t0);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 8]]);
  }));
  return _findOneTeam.apply(this, arguments);
}

function createTeam(_x5, _x6) {
  return _createTeam.apply(this, arguments);
}

function _createTeam() {
  _createTeam = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var _req$body, name, description, newTeam;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, description = _req$body.description;
            _context3.prev = 1;
            _context3.next = 4;
            return _Team["default"].create({
              name: name,
              description: description
            }, {
              fields: ["name", "description"]
            });

          case 4:
            newTeam = _context3.sent;

            if (!newTeam) {
              _context3.next = 9;
              break;
            }

            return _context3.abrupt("return", res.json({
              message: "Equipo Creado Exitosamente",
              data: newTeam
            }));

          case 9:
            return _context3.abrupt("return", res.json({
              message: "No se Pudo Crear Nuevo Equipo",
              data: {}
            }));

          case 10:
            _context3.next = 15;
            break;

          case 12:
            _context3.prev = 12;
            _context3.t0 = _context3["catch"](1);
            //console.log(error);
            res.status(500).json({
              message: "Error al crear nuevo Equipo",
              data: {}
            });

          case 15:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 12]]);
  }));
  return _createTeam.apply(this, arguments);
}

function deleteTeam(_x7, _x8) {
  return _deleteTeam.apply(this, arguments);
}

function _deleteTeam() {
  _deleteTeam = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _context4.prev = 1;
            _context4.next = 4;
            return _Team["default"].destroy({
              where: {
                id: id
              }
            });

          case 4:
            deleteRowCount = _context4.sent;
            res.json({
              message: "Equipo Eliminado Satifactoriamente",
              count: deleteRowCount
            });
            _context4.next = 11;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](1);
            console.log("ERROR AL QUERE ELIMINAR Equipo:" + _context4.t0);

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 8]]);
  }));
  return _deleteTeam.apply(this, arguments);
}