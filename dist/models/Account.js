"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _Category = _interopRequireDefault(require("./Category"));

var _Person = _interopRequireDefault(require("./Person"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//para modelar datos 
//import connection object
var Account = _database.sequelize.define('accounts', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: _sequelize["default"].STRING,
    allowNull: false
  },
  description: {
    type: _sequelize["default"].TEXT
  },
  category_id: {
    type: _sequelize["default"].INTEGER,
    allowNull: false,
    references: {
      model: _Category["default"],
      key: 'id'
    }
  },
  person_id: {
    type: _sequelize["default"].INTEGER,
    allowNull: false,
    references: {
      model: _Person["default"],
      key: 'id'
    }
  },
  initialbalance: {
    type: _sequelize["default"].DOUBLE,
    allowNull: false
  },
  actualbalance: {
    type: _sequelize["default"].DOUBLE,
    allowNull: false
  },
  coin: {
    type: _sequelize["default"].STRING,
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

var _default = Account;
exports["default"] = _default;