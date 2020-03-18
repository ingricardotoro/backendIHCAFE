"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.categoriesbyid = categoriesbyid;
exports.categoriesparents = categoriesparents;
exports.categories_childs = categories_childs;
exports.childbyid = childbyid;

var _Category = _interopRequireDefault(require("../models/Category"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function categoriesbyid(_x, _x2) {
  return _categoriesbyid.apply(this, arguments);
}

function _categoriesbyid() {
  _categoriesbyid = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var id, category;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = req.params.id;
            _context.prev = 1;
            _context.next = 4;
            return _Category["default"].findOne({
              where: {
                id: id
              }
            });

          case 4:
            category = _context.sent;
            res.json({
              category: category
            });
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            console.log("ERROR AL QUERE LISTAR La Categoria por Id:" + _context.t0);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 8]]);
  }));
  return _categoriesbyid.apply(this, arguments);
}

function categoriesparents(_x3, _x4) {
  return _categoriesparents.apply(this, arguments);
} //buscar las categorias hijas dado un id de categoria padre.


function _categoriesparents() {
  _categoriesparents = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var categories;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _Category["default"].findAll({
              where: {
                parent_category: 0
              }
            });

          case 3:
            categories = _context2.sent;
            res.json({
              categories: categories
            });
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            console.log("ERROR AL QUERE LISTAR La Categorias Padres:" + _context2.t0);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return _categoriesparents.apply(this, arguments);
}

function categories_childs(_x5, _x6) {
  return _categories_childs.apply(this, arguments);
}

function _categories_childs() {
  _categories_childs = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    var id, clasificaciones;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;

            if (!(id != 0)) {
              _context3.next = 12;
              break;
            }

            _context3.prev = 2;
            _context3.next = 5;
            return _Category["default"].findAll({
              where: {
                parent_category: id
              }
            });

          case 5:
            clasificaciones = _context3.sent;
            res.json({
              clasificaciones: clasificaciones
            });
            _context3.next = 12;
            break;

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](2);
            console.log("ERROR AL QUERE LISTAR La Categorias HIJOS:" + _context3.t0);

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[2, 9]]);
  }));
  return _categories_childs.apply(this, arguments);
}

function childbyid(_x7, _x8) {
  return _childbyid.apply(this, arguments);
}

function _childbyid() {
  _childbyid = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(req, res) {
    var id, child;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;

            if (!(id != 0)) {
              _context4.next = 12;
              break;
            }

            _context4.prev = 2;
            _context4.next = 5;
            return _Category["default"].findOne({
              where: {
                code: id
              }
            });

          case 5:
            child = _context4.sent;
            res.json({
              child: child
            });
            _context4.next = 12;
            break;

          case 9:
            _context4.prev = 9;
            _context4.t0 = _context4["catch"](2);
            console.log("ERROR AL QUERE LISTAR La Categoria HIJA:" + _context4.t0);

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[2, 9]]);
  }));
  return _childbyid.apply(this, arguments);
}