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
var Person = _database.sequelize.define('persons', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  fullname: {
    type: _sequelize["default"].STRING,
    allowNull: false
  },
  jobtitle: {
    type: _sequelize["default"].STRING
  },
  gender: {
    type: _sequelize["default"].STRING,
    allowNull: false
  },
  address: {
    type: _sequelize["default"].TEXT
  },
  phone1: {
    type: _sequelize["default"].STRING
  },
  phone2: {
    type: _sequelize["default"].STRING
  },
  email: {
    type: _sequelize["default"].STRING
  },
  filename: {
    type: _sequelize["default"].TEXT
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

var _default = Person;
exports["default"] = _default;