"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//para modelar datos 
//import connection object
var Category = _database.sequelize.define('categories', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: _sequelize["default"].STRING,
    allowNull: false
  },
  code: {
    type: _sequelize["default"].STRING,
    allowNull: false
  },
  description: {
    type: _sequelize["default"].TEXT
  },
  parent_category: {
    type: _sequelize["default"].INTEGER,
    allowNull: false
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
});

var _default = Category;
exports["default"] = _default;