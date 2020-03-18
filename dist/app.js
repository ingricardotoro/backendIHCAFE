"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireWildcard(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _path = _interopRequireDefault(require("path"));

var _multer = _interopRequireDefault(require("multer"));

var _cors = _interopRequireDefault(require("cors"));

var _projects = _interopRequireDefault(require("./routes/projects"));

var _budgets = _interopRequireDefault(require("./routes/budgets"));

var _budgetslines = _interopRequireDefault(require("./routes/budgetslines"));

var _categories = _interopRequireDefault(require("./routes/categories"));

var _teams = _interopRequireDefault(require("./routes/teams"));

var _task = _interopRequireDefault(require("./routes/task"));

var _accounts = _interopRequireDefault(require("./routes/accounts"));

var _atlas = _interopRequireDefault(require("./routes/atlas"));

var _suppliers = _interopRequireDefault(require("./routes/suppliers"));

var _files = _interopRequireDefault(require("./routes/files"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

require('dotenv').config(); //importamos el objeto servidor 


//Initialization
var app = (0, _express["default"])(); //settings

app.set('port', process.env.PORT || 5000); //middlewares

app.use((0, _morgan["default"])('dev'));
app.use((0, _cors["default"])());
app.use((0, _express.json)()); // para entender archivos json
//routes

app.use('/api/projects', _projects["default"]);
app.use('/api/budgets', _budgets["default"]);
app.use('/api/budgetlines', _budgetslines["default"]);
app.use('/api/categories', _categories["default"]);
app.use('/api/teams', _teams["default"]);
app.use('/api/accounts', _accounts["default"]);
app.use('/api/atlas', _atlas["default"]);
app.use('/api/tasks', _task["default"]);
app.use('/api/suppliers', _suppliers["default"]);
app.use('/api/files', _files["default"]); //crar carpeta publica para el navegador

app.use(_express["default"]["static"](_path["default"].join(__dirname, 'public')));
var _default = app;
exports["default"] = _default;