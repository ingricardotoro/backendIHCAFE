"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sequelize = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//create cadena de conexion
var sequelize = new _sequelize["default"]('budgetsIHCAFE', 'userIHCAFE', 'Sistemas20!', {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    require: 30000,
    idle: 10000
  } //logging:false // para ver las respuestas de la bd por consola

});
exports.sequelize = sequelize;