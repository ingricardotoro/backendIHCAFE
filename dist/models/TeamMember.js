"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _User = _interopRequireDefault(require("./User"));

var _Rol = _interopRequireDefault(require("./Rol"));

var _Team = _interopRequireDefault(require("./Team"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//para modelar datos 
//import connection object
var TeamMember = _database.sequelize.define('team_members', {
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
      model: _User["default"],
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

TeamMember.belongsTo(_Team["default"], {
  foreignKey: 'team_id',
  targetKey: 'id'
});
TeamMember.belongsTo(_User["default"], {
  foreignKey: 'person_id',
  targetKey: 'id'
});
TeamMember.belongsTo(_Rol["default"], {
  foreignKey: 'rol_id',
  targetKey: 'id'
});
var _default = TeamMember;
exports["default"] = _default;