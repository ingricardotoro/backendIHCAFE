"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _path = _interopRequireDefault(require("path"));

var _multer = _interopRequireDefault(require("multer"));

var _uuid = require("uuid");

var _Archivo = _interopRequireDefault(require("../models/Archivo"));

var _Archivo_Estandar = _interopRequireDefault(require("../models/Archivo_Estandar"));

require("@babel/polyfill");

var _filesController = require("../controllers/filesController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var router = (0, _express.Router)();

var storage = _multer["default"].diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, _path["default"].join(__dirname, "../../src/public/files"));
  },
  filename: function filename(req, file, cb) {
    cb(null, (0, _uuid.v4)() + _path["default"].extname(file.originalname).toLocaleLowerCase());
  }
});

var upload = (0, _multer["default"])({
  storage: storage,
  limits: {
    fileSize: 20000000
  },
  //20 megas
  fileFilter: function fileFilter(req, file, cb) {
    var filetypes = /jpeg|jpg|png|gif|pdf/;
    var mimetype = filetypes.test(file.mimetype);
    var extname = filetypes.test(_path["default"].extname(file.originalname));

    if (mimetype && extname) {
      return cb(null, true);
    }

    cb("Solo se Permite Archivos Tipo Imagen o PDF");
  }
}); //ruta para visualizar un  archivo, asignado a un budget y a un budgetLine Standar

router.post("/filesbybudgetid/:budget_id/:budgetline_id", _filesController.FileByBudgetId); //ruta para visualizar un  archivo, asignado a un budget y a un budgetLine Atlas  

router.post("/filesbybudgetid_atlas/:budget_id/:budgetlineatlas_id", _filesController.FileByBudgetIdAtlas); //ruta para eliminar un archivo por Id

router.post("/delete/:filename", _filesController.DeleteFileById); //ruta para eliminar un archivo aTLAS por Id

router.post("/delete_atlas/:filename", _filesController.DeleteFileByIdAtlas); //Ruta para almacenar el archivo para presupuestos ATLAS

router.post("/atlas", upload.single("archivo"), /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var dir, newFile;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log(req.file);
            dir = "files/";
            _context.prev = 2;
            _context.next = 5;
            return _Archivo["default"].create({
              filename: req.file.filename,
              filedir: dir,
              description: req.body.file_name,
              fase: req.body.fase,
              budget_id: req.body.budget_id,
              budgetlineatlas_id: req.body.budgetlineatlas_id
            }, {
              fields: ["filename", "filedir", "description", "fase", "budget_id", "budgetlineatlas_id"]
            });

          case 5:
            newFile = _context.sent;

            if (!newFile) {
              _context.next = 10;
              break;
            }

            //res.redirect('http://localhost:3000/project/'+req.body.project_id);
            res.redirect("http://167.99.15.83:3001/project/" + req.body.project_id);
            _context.next = 11;
            break;

          case 10:
            return _context.abrupt("return", res.json({
              message: "No se Pudo Crear el Nuevo Archivo",
              data: {}
            }));

          case 11:
            _context.next = 17;
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](2);
            console.log(_context.t0);
            res.status(500).json({
              message: "Error al crear nuevo File",
              data: {}
            });

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 13]]);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}()); //Ruta para almacenar el archivo para presupuestos estandar

router.post("/", upload.single("archivo"), /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
    var dir, newFile;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            console.log(req.file);
            dir = "files/";
            _context2.prev = 2;
            _context2.next = 5;
            return _Archivo_Estandar["default"].create({
              filename: req.file.filename,
              filedir: dir,
              description: req.body.file_name,
              fase: req.body.fase,
              budget_id: req.body.budget_id,
              budgetline_id: req.body.budgetline_id
            }, {
              fields: ["filename", "filedir", "description", "fase", "budget_id", "budgetline_id"]
            });

          case 5:
            newFile = _context2.sent;

            if (!newFile) {
              _context2.next = 10;
              break;
            }

            //res.redirect('http://localhost:3000/project/'+req.body.project_id);
            res.redirect("http://167.99.15.83:3001/project/" + req.body.project_id);
            _context2.next = 11;
            break;

          case 10:
            return _context2.abrupt("return", res.json({
              message: "No se Pudo Crear el Nuevo Archivo",
              data: {}
            }));

          case 11:
            _context2.next = 17;
            break;

          case 13:
            _context2.prev = 13;
            _context2.t0 = _context2["catch"](2);
            console.log(_context2.t0);
            res.status(500).json({
              message: "Error al crear nuevo File",
              data: {}
            });

          case 17:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[2, 13]]);
  }));

  return function (_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}());
var _default = router;
exports["default"] = _default;