"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _Person = _interopRequireDefault(require("./Person"));

var _Account = _interopRequireDefault(require("./Account"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//para modelar datos 
//import connection object
var Budget = _database.sequelize.define('budgets', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  code: {
    type: _sequelize["default"].STRING
  },
  name: {
    type: _sequelize["default"].STRING,
    allowNull: false
  },
  description: {
    type: _sequelize["default"].TEXT
  },
  excercise_start: {
    type: _sequelize["default"].DATEONLY
  },
  excercise_end: {
    type: _sequelize["default"].DATEONLY
  },
  account_id: {
    type: _sequelize["default"].INTEGER,
    allowNull: false,
    references: {
      model: _Account["default"],
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
  buddgetstart: {
    type: _sequelize["default"].DOUBLE,
    allowNull: false
  },
  buddgeupdate: {
    type: _sequelize["default"].DOUBLE,
    allowNull: false
  },
  buddgetfinal: {
    type: _sequelize["default"].DOUBLE,
    allowNull: false
  },
  balance: {
    type: _sequelize["default"].DOUBLE,
    allowNull: false
  },
  returns: {
    type: _sequelize["default"].DOUBLE
  },
  deviation: {
    type: _sequelize["default"].DOUBLE
  },
  status: {
    type: _sequelize["default"].STRING,
    allowNull: false
  },
  approval: {
    type: _sequelize["default"].BOOLEAN
  },
  approvalby_id: {
    type: _sequelize["default"].INTEGER,
    allowNull: false,
    references: {
      model: _Person["default"],
      key: 'id'
    }
  },
  dateapproval: {
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
}); //Budget.hasMany(Project);
//Project.belongsTo(Budget, {foreignKey: 'budget_id'});


Budget.belongsTo(_Account["default"], {
  foreignKey: 'account_id'
});
var _default = Budget;
exports["default"] = _default;