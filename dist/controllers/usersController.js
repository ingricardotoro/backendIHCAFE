"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listUsers = listUsers;
exports.findUser = findUser;
exports.login = login;
exports.register = register;
exports.deleteUser = deleteUser;

var _User = _interopRequireDefault(require("../models/User"));

var _TipoUser = _interopRequireDefault(require("../models/TipoUser"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//codigo para listar usuarios
function listUsers(_x, _x2) {
  return _listUsers.apply(this, arguments);
}

function _listUsers() {
  _listUsers = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var users;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _User["default"].findAll({
              include: [_TipoUser["default"]]
            });

          case 3:
            users = _context.sent;
            res.json({
              users: users
            });
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log("ERROR AL QUERE LISTAR Usuarios:" + _context.t0);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));
  return _listUsers.apply(this, arguments);
}

function findUser(_x3, _x4) {
  return _findUser.apply(this, arguments);
} //codigo para realizar el login


function _findUser() {
  _findUser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id, user;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;
            _context2.prev = 1;
            _context2.next = 4;
            return _User["default"].findOne({
              where: {
                id: id
              }
            });

          case 4:
            user = _context2.sent;
            res.json({
              data: user
            });
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            console.log("ERROR AL QUERE BUSCAR EL User:" + _context2.t0);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 8]]);
  }));
  return _findUser.apply(this, arguments);
}

function login(_x5, _x6) {
  return _login.apply(this, arguments);
} //codigo para registrar nuevos usuarios


function _login() {
  _login = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            //confirmamos si el usuario existe
            _User["default"].findOne({
              where: {
                username: req.body.username
              }
            }).then(function (user) {
              if (user) {
                if (_bcrypt["default"].compareSync(req.body.password, user.password)) {
                  var token = _jsonwebtoken["default"].sign(user.dataValues, 'secret', {
                    expiresIn: 1440
                  });

                  res.send(token);
                }
              } else {
                res.status(400).json({
                  error: 'Usuario no existe'
                });
              }
            })["catch"](function (err) {
              res.status(400).json({
                error: err
              });
            });

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _login.apply(this, arguments);
}

function register(_x7, _x8) {
  return _register.apply(this, arguments);
} //codigo para eliminar usuarios


function _register() {
  _register = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var _req$body, name, lastname, username, tipo_user_id, password, user, saltRounds, hash, newUser;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, lastname = _req$body.lastname, username = _req$body.username, tipo_user_id = _req$body.tipo_user_id;
            password = req.body.password;
            user = ''; //vefiricamos que el username no este registrado

            _context4.prev = 3;
            _context4.next = 6;
            return _User["default"].findOne({
              where: {
                username: username
              }
            });

          case 6:
            user = _context4.sent;
            _context4.next = 12;
            break;

          case 9:
            _context4.prev = 9;
            _context4.t0 = _context4["catch"](3);
            console.log("ERROR AL QUERER Verificar Usuario LOGIN:" + _context4.t0);

          case 12:
            if (user) {
              _context4.next = 32;
              break;
            }

            saltRounds = 10; //encriptamos la clave

            hash = _bcrypt["default"].hashSync(password, saltRounds);
            password = hash;
            _context4.prev = 16;
            _context4.next = 19;
            return _User["default"].create({
              name: name,
              lastname: lastname,
              username: username,
              password: password,
              tipo_user_id: tipo_user_id
            }, {
              fields: ["name", "lastname", "username", "password", "tipo_user_id"]
            });

          case 19:
            newUser = _context4.sent;

            if (!newUser) {
              _context4.next = 24;
              break;
            }

            return _context4.abrupt("return", res.json({
              message: "Nuevo Usuario Creado Exitosamente" //data: newUser,

            }));

          case 24:
            return _context4.abrupt("return", res.json({
              message: "No se Pudo Crear nuevo usuario",
              data: {}
            }));

          case 25:
            _context4.next = 30;
            break;

          case 27:
            _context4.prev = 27;
            _context4.t1 = _context4["catch"](16);
            //console.log(error);
            res.status(500).json({
              message: "Error al crear nuevos usuario",
              data: {}
            });

          case 30:
            _context4.next = 33;
            break;

          case 32:
            return _context4.abrupt("return", res.json({
              message: "Usuario Ya existe",
              data: {}
            }));

          case 33:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[3, 9], [16, 27]]);
  }));
  return _register.apply(this, arguments);
}

function deleteUser(_x9, _x10) {
  return _deleteUser.apply(this, arguments);
}

function _deleteUser() {
  _deleteUser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            _context5.prev = 1;
            _context5.next = 4;
            return _User["default"].destroy({
              where: {
                id: id
              }
            });

          case 4:
            deleteRowCount = _context5.sent;
            res.json({
              message: "User Eliminado Satifactoriamente",
              count: deleteRowCount
            });
            _context5.next = 11;
            break;

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](1);
            console.log("ERROR AL QUERE ELIMINAR User:" + _context5.t0);

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[1, 8]]);
  }));
  return _deleteUser.apply(this, arguments);
}