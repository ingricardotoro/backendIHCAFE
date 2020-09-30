"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _Budgetline = _interopRequireDefault(require("./Budgetline"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//para modelar datos 
//import connection object
var Archivo_Estandar = _database.sequelize.define('archivos_estandar', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  filename: {
    type: _sequelize["default"].STRING,
    allowNull: false
  },
  description: {
    type: _sequelize["default"].STRING,
    allowNull: false
  },
  filedir: {
    type: _sequelize["default"].STRING,
    allowNull: false
  },
  fase: {
    type: _sequelize["default"].STRING
  },
  budgetline_id: {
    type: _sequelize["default"].INTEGER,
    allowNull: true,
    references: {
      model: _Budgetline["default"],
      key: 'id'
    }
  },
  budget_id: {
    type: _sequelize["default"].INTEGER,
    allowNull: true
  },
  createdAt: {
    type: _sequelize["default"].DATE,
    defaultValue: _sequelize["default"].NOW
  },
  updatedAt: {
    type: _sequelize["default"].DATE,
    defaultValue: _sequelize["default"].NOW
  }
}, {
  timestamps: true
}); //Archivo.belongsTo(BudgetLineAtlas, {foreignKey: 'budgetlineatlas_id', targetKey: 'id'});
//Archivo.belongsTo(BudgetLineAtlas, {foreignKey: 'budgetlineatlas_id'});
//Archivo.belongsTo(BudgetLineAtlas);


var _default = Archivo_Estandar;
exports["default"] = _default;