"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listSuppliers = listSuppliers;
exports.createSupplier = createSupplier;
exports.deleteSupplier = deleteSupplier;

var _Supplier = _interopRequireDefault(require("../models/Supplier"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//codigo para obtener los RESULTADOS ATLAS , de codigo 0
function listSuppliers(_x, _x2) {
  return _listSuppliers.apply(this, arguments);
}

function _listSuppliers() {
  _listSuppliers = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var suppliers;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Supplier["default"].findAll();

          case 3:
            suppliers = _context.sent;
            res.json({
              suppliers: suppliers
            });
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log("ERROR AL QUERE LISTAR los Beneficiarios o PROVEEDORES:" + _context.t0);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));
  return _listSuppliers.apply(this, arguments);
}

function createSupplier(_x3, _x4) {
  return _createSupplier.apply(this, arguments);
}

function _createSupplier() {
  _createSupplier = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, company, phone1, contact_name, phone2, address, email, newSupplier;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, company = _req$body.company, phone1 = _req$body.phone1, contact_name = _req$body.contact_name, phone2 = _req$body.phone2, address = _req$body.address, email = _req$body.email;
            _context2.prev = 1;
            _context2.next = 4;
            return _Supplier["default"].create({
              company: company,
              phone1: phone1,
              contact_name: contact_name,
              phone2: phone2,
              address: address,
              email: email
            }, {
              fields: ["company", "phone1", "contact_name", "phone2", "address", "email"]
            });

          case 4:
            newSupplier = _context2.sent;

            if (!newSupplier) {
              _context2.next = 9;
              break;
            }

            return _context2.abrupt("return", res.json({
              message: "newSupplier Creado Exitosamente",
              data: newSupplier
            }));

          case 9:
            return _context2.abrupt("return", res.json({
              message: "No se Pudo Crear newSupplier",
              data: {}
            }));

          case 10:
            _context2.next = 15;
            break;

          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](1);
            //console.log(error);
            res.status(500).json({
              message: "Error al crear newSupplier",
              data: {}
            });

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 12]]);
  }));
  return _createSupplier.apply(this, arguments);
}

function deleteSupplier(_x5, _x6) {
  return _deleteSupplier.apply(this, arguments);
}

function _deleteSupplier() {
  _deleteSupplier = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.prev = 1;
            _context3.next = 4;
            return _Supplier["default"].destroy({
              where: {
                id: id
              }
            });

          case 4:
            deleteRowCount = _context3.sent;
            res.json({
              message: "Supplier Eliminado Satifactoriamente",
              count: deleteRowCount
            });
            _context3.next = 11;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](1);
            console.log("ERROR AL QUERE ELIMINAR Supplier:" + _context3.t0);

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 8]]);
  }));
  return _deleteSupplier.apply(this, arguments);
}