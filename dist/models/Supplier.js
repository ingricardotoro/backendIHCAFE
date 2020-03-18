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
var Supplier = _database.sequelize.define('suppliers', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  company: {
    type: _sequelize["default"].STRING,
    allowNull: true
  },
  contact_name: {
    type: _sequelize["default"].STRING,
    allowNull: false
  },
  address: {
    type: _sequelize["default"].TEXT
  },
  email: {
    type: _sequelize["default"].STRING,
    allowNull: true
  },
  phone1: {
    type: _sequelize["default"].STRING,
    allowNull: true
  },
  phone2: {
    type: _sequelize["default"].STRING,
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
});

var _default = Supplier;
exports["default"] = _default;