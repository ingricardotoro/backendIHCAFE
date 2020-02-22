"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _Person = _interopRequireDefault(require("./Person"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//para modelar datos 
//import connection object
var Dollar = _database.sequelize.define('dollars', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  date: {
    type: _sequelize["default"].DATEONLY,
    allowNull: false
  },
  value: {
    type: _sequelize["default"].DOUBLE
  },
  person_id: {
    type: _sequelize["default"].INTEGER,
    allowNull: false,
    references: {
      model: _Person["default"],
      key: 'id'
    }
  },
  active: {
    type: _sequelize["default"].BOOLEAN
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

var _default = Dollar;
exports["default"] = _default;