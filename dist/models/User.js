"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _TipoUser = _interopRequireDefault(require("./TipoUser"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//para modelar datos 
//import connection object
var User = _database.sequelize.define('users', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: _sequelize["default"].STRING,
    allowNull: false
  },
  lastname: {
    type: _sequelize["default"].STRING,
    allowNull: false
  },
  username: {
    type: _sequelize["default"].STRING
  },
  tipo_user_id: {
    type: _sequelize["default"].INTEGER,
    allowNull: true,
    references: {
      model: _TipoUser["default"],
      key: 'id'
    }
  },
  password: {
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

User.belongsTo(_TipoUser["default"], {
  foreignKey: 'tipo_user_id',
  targetKey: 'id'
});
var _default = User;
exports["default"] = _default;