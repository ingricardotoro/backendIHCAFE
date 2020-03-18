"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _Person = _interopRequireDefault(require("./Person"));

var _Project = _interopRequireDefault(require("./Project"));

var _Rol = _interopRequireDefault(require("./Rol"));

var _Team = _interopRequireDefault(require("./Team"));

var _File = _interopRequireDefault(require("./File"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//para modelar datos 
//import connection object
var Teams = _database.sequelize.define('teams', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  team_id: {
    type: _sequelize["default"].INTEGER,
    allowNull: false,
    references: {
      model: _Team["default"],
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
  rol_id: {
    type: _sequelize["default"].INTEGER,
    allowNull: false,
    references: {
      model: _Rol["default"],
      key: 'id'
    }
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

var _default = Teams;
exports["default"] = _default;