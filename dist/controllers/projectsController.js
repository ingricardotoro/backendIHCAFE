"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listProjects = listProjects;
exports.findProject = findProject;
exports.deleteProject = deleteProject;
exports.createProjects = createProjects;
exports.updateProject = updateProject;

var _Project = _interopRequireDefault(require("../models/Project"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function listProjects(_x, _x2) {
  return _listProjects.apply(this, arguments);
}

function _listProjects() {
  _listProjects = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var projects;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Project["default"].findAll();

          case 3:
            projects = _context.sent;
            res.json({
              data: projects
            });
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log("ERROR AL QUERE LISTAR PROJECTS:" + _context.t0);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));
  return _listProjects.apply(this, arguments);
}

function findProject(_x3, _x4) {
  return _findProject.apply(this, arguments);
}

function _findProject() {
  _findProject = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var id, project;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;
            _context2.prev = 1;
            _context2.next = 4;
            return _Project["default"].findOne({
              where: {
                id: id
              }
            });

          case 4:
            project = _context2.sent;
            res.json({
              data: project
            });
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            console.log("ERROR AL QUERE BUSCAR EL PROJECT:" + _context2.t0);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 8]]);
  }));
  return _findProject.apply(this, arguments);
}

function deleteProject(_x5, _x6) {
  return _deleteProject.apply(this, arguments);
}

function _deleteProject() {
  _deleteProject = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.prev = 1;
            _context3.next = 4;
            return _Project["default"].destroy({
              where: {
                id: id
              }
            });

          case 4:
            deleteRowCount = _context3.sent;
            res.json({
              message: "Projecto Eliminado Satifactoriamente",
              count: deleteRowCount
            });
            _context3.next = 11;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](1);
            console.log("ERROR AL QUERE ELIMINAR EL PROJECT:" + _context3.t0);

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 8]]);
  }));
  return _deleteProject.apply(this, arguments);
}

function createProjects(_x7, _x8) {
  return _createProjects.apply(this, arguments);
}

function _createProjects() {
  _createProjects = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(req, res) {
    var _req$body, code, name, description, category_id, startdate, enddate, department_id, status, location, budget_id, team_id, priority, color, newProject;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body = req.body, code = _req$body.code, name = _req$body.name, description = _req$body.description, category_id = _req$body.category_id, startdate = _req$body.startdate, enddate = _req$body.enddate, department_id = _req$body.department_id, status = _req$body.status, location = _req$body.location, budget_id = _req$body.budget_id, team_id = _req$body.team_id, priority = _req$body.priority, color = _req$body.color;
            _context4.prev = 1;
            _context4.next = 4;
            return _Project["default"].create({
              code: code,
              name: name,
              description: description,
              category_id: category_id,
              startdate: startdate,
              enddate: enddate,
              department_id: department_id,
              status: status,
              location: location,
              budget_id: budget_id,
              team_id: team_id,
              priority: priority,
              color: color
            }, {
              fields: ['code', 'name', 'description', 'category_id', 'startdate', 'enddate', 'department_id', 'status', 'location', 'budget_id', 'team_id', 'priority', 'color']
            });

          case 4:
            newProject = _context4.sent;

            if (!newProject) {
              _context4.next = 9;
              break;
            }

            return _context4.abrupt("return", res.json({
              message: "Projecto Creado Exitosamente",
              data: newProject
            }));

          case 9:
            return _context4.abrupt("return", res.json({
              message: "No se Pudo Crear newProject",
              data: {}
            }));

          case 10:
            _context4.next = 15;
            break;

          case 12:
            _context4.prev = 12;
            _context4.t0 = _context4["catch"](1);
            //console.log(error);
            res.status(500).json({
              message: "Error al crar nuevos projectos",
              data: {}
            });

          case 15:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 12]]);
  }));
  return _createProjects.apply(this, arguments);
}

function updateProject(_x9, _x10) {
  return _updateProject.apply(this, arguments);
}

function _updateProject() {
  _updateProject = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(req, res) {
    var id, _req$body2, code, name, description, category_id, startdate, enddate, department_id, status, location, budget_id, team_id, priority, color, result;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, code = _req$body2.code, name = _req$body2.name, description = _req$body2.description, category_id = _req$body2.category_id, startdate = _req$body2.startdate, enddate = _req$body2.enddate, department_id = _req$body2.department_id, status = _req$body2.status, location = _req$body2.location, budget_id = _req$body2.budget_id, team_id = _req$body2.team_id, priority = _req$body2.priority, color = _req$body2.color;
            _context5.prev = 2;
            _context5.next = 5;
            return _Project["default"].update({
              code: code,
              name: name,
              description: description,
              category_id: category_id,
              startdate: startdate,
              enddate: enddate,
              department_id: department_id,
              status: status,
              location: location,
              budget_id: budget_id,
              team_id: team_id,
              priority: priority,
              color: color
            }, {
              where: {
                id: id
              }
            });

          case 5:
            result = _context5.sent;

            if (result) {
              res.json({
                message: "Projecto Actualizado Satifactoriamente"
              });
            }

            _context5.next = 13;
            break;

          case 9:
            _context5.prev = 9;
            _context5.t0 = _context5["catch"](2);
            console.log(_context5.t0);
            return _context5.abrupt("return", res.json({
              message: 'Something Wrong in Update',
              data: {}
            }));

          case 13:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[2, 9]]);
  }));
  return _updateProject.apply(this, arguments);
}