"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _Coin = _interopRequireDefault(require("./Coin"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//para modelar datos
//import connection object
var Conversion = _database.sequelize.define("conversions", {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  coin_id: {
    type: _sequelize["default"].INTEGER,
    allowNull: false,
    references: {
      model: _Coin["default"],
      key: 'id'
    }
  },
  value: {
    type: _sequelize["default"].DOUBLE,
    allowNull: false
  },
  description: {
    type: _sequelize["default"].TEXT
  },
  dateinitial: {
    type: _sequelize["default"].DATEONLY
  },
  datefinal: {
    type: _sequelize["default"].DATEONLY
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

Conversion.belongsTo(_Coin["default"], {
  foreignKey: 'coin_id'
});
var _default = Conversion;
exports["default"] = _default;