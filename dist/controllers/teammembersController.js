"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listTeamMembersByTeamId = listTeamMembersByTeamId;
exports.deleteTeammember = deleteTeammember;
exports.createTeammember = createTeammember;

var _TeamMember = _interopRequireDefault(require("../models/TeamMember"));

var _User = _interopRequireDefault(require("../models/User"));

var _Rol = _interopRequireDefault(require("../models/Rol"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function listTeamMembersByTeamId(_x, _x2) {
  return _listTeamMembersByTeamId.apply(this, arguments);
}

function _listTeamMembersByTeamId() {
  _listTeamMembersByTeamId = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var id, teammembers;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            //id del team
            id = req.params.id;
            _context.prev = 1;
            _context.next = 4;
            return _TeamMember["default"].findAll({
              include: [_Rol["default"], _User["default"]],
              where: {
                team_id: id
              }
            });

          case 4:
            teammembers = _context.sent;
            res.json({
              teammembers: teammembers
            });
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            console.log("ERROR AL Buscar teammembers:" + _context.t0);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 8]]);
  }));
  return _listTeamMembersByTeamId.apply(this, arguments);
}

function deleteTeammember(_x3, _x4) {
  return _deleteTeammember.apply(this, arguments);
}

function _deleteTeammember() {
  _deleteTeammember = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;
            _context2.prev = 1;
            _context2.next = 4;
            return _TeamMember["default"].destroy({
              where: {
                id: id
              }
            });

          case 4:
            deleteRowCount = _context2.sent;
            res.json({
              message: "TeamMember Eliminado Satifactoriamente",
              count: deleteRowCount
            });
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            console.log("ERROR AL QUERE ELIMINAR TeamMember:" + _context2.t0);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 8]]);
  }));
  return _deleteTeammember.apply(this, arguments);
}

function createTeammember(_x5, _x6) {
  return _createTeammember.apply(this, arguments);
}

function _createTeammember() {
  _createTeammember = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var _req$body, team_id, person_id, rol_id, newTeamMember;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, team_id = _req$body.team_id, person_id = _req$body.person_id, rol_id = _req$body.rol_id;
            _context3.prev = 1;
            _context3.next = 4;
            return _TeamMember["default"].create({
              team_id: team_id,
              person_id: person_id,
              rol_id: rol_id
            }, {
              fields: ["team_id", "person_id", "rol_id"]
            });

          case 4:
            newTeamMember = _context3.sent;

            if (!newTeamMember) {
              _context3.next = 9;
              break;
            }

            return _context3.abrupt("return", res.json({
              message: "TeamMember Creado Exitosamente",
              data: _TeamMember["default"]
            }));

          case 9:
            return _context3.abrupt("return", res.json({
              message: "No se Pudo Crear Nuevo TeamMember",
              data: {}
            }));

          case 10:
            _context3.next = 16;
            break;

          case 12:
            _context3.prev = 12;
            _context3.t0 = _context3["catch"](1);
            console.log(_context3.t0);
            res.status(500).json({
              message: "Error al crear nuevo TeamMember",
              data: {}
            });

          case 16:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 12]]);
  }));
  return _createTeammember.apply(this, arguments);
}