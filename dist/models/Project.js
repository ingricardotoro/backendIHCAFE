"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _Task = _interopRequireDefault(require("./Task"));

var _Category = _interopRequireDefault(require("./Category"));

var _Department = _interopRequireDefault(require("./Department"));

var _Budget = _interopRequireDefault(require("./Budget"));

var _Team = _interopRequireDefault(require("./Team"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//para modelar datos 
//import connection object
var Project = _database.sequelize.define('projects', {
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
  priority: {
    type: _sequelize["default"].STRING,
    allowNull: false
  },
  color: {
    type: _sequelize["default"].STRING,
    allowNull: false,
    defaultValue: "red"
  },
  category_id: {
    type: _sequelize["default"].INTEGER,
    allowNull: false,
    references: {
      model: _Category["default"],
      key: 'id'
    }
  },
  department_id: {
    type: _sequelize["default"].INTEGER,
    references: {
      model: _Department["default"],
      key: 'id'
    }
  },
  budget_id: {
    type: _sequelize["default"].INTEGER,
    allowNull: false,
    references: {
      model: _Budget["default"],
      key: 'id'
    }
  },
  team_id: {
    type: _sequelize["default"].INTEGER,
    allowNull: false,
    references: {
      model: _Team["default"],
      key: 'id'
    }
  },
  startdate: {
    type: _sequelize["default"].DATEONLY,
    allowNull: false
  },
  enddate: {
    type: _sequelize["default"].DATEONLY,
    allowNull: false
  },
  status: {
    type: _sequelize["default"].STRING,
    allowNull: false
  },
  location: {
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

Project.belongsTo(_Budget["default"], {
  foreignKey: 'budget_id'
});
Project.hasMany(_Task["default"], {
  foreignKey: 'id'
});

_Task["default"].belongsTo(Project, {
  foreignKey: 'project_id'
});

var _default = Project;
exports["default"] = _default;