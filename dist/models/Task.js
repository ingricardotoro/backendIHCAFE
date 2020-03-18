"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _Category = _interopRequireDefault(require("./Category"));

var _Project = _interopRequireDefault(require("./Project"));

var _Account = _interopRequireDefault(require("./Account"));

var _Dollar = _interopRequireDefault(require("./Dollar"));

var _Team = _interopRequireDefault(require("./Team"));

var _File = _interopRequireDefault(require("./File"));

var _Person = _interopRequireDefault(require("./Person"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//para modelar datos 
//import connection object
var Task = _database.sequelize.define('tasks', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  code: {
    type: _sequelize["default"].STRING(50)
  },
  name: {
    type: _sequelize["default"].STRING,
    allowNull: false
  },
  description: {
    type: _sequelize["default"].TEXT
  },
  status: {
    type: _sequelize["default"].STRING,
    allowNull: false
  },
  priority: {
    type: _sequelize["default"].STRING,
    allowNull: false
  },
  startdate: {
    type: _sequelize["default"].DATEONLY,
    allowNull: false
  },
  complete: {
    type: _sequelize["default"].INTEGER,
    allowNull: false
  },
  duration: {
    type: _sequelize["default"].INTEGER,
    allowNull: false
  },
  category_id: {
    type: _sequelize["default"].INTEGER,
    allowNull: false,
    references: {
      model: _Category["default"],
      key: 'id'
    }
  },
  project_id: {
    type: _sequelize["default"].INTEGER,
    allowNull: false,
    references: {
      model: _Project["default"],
      key: 'id'
    }
  },
  account_id: {
    type: _sequelize["default"].INTEGER,
    allowNull: false,
    references: {
      model: _Account["default"],
      key: 'id'
    }
  },
  dollar_id: {
    type: _sequelize["default"].INTEGER,
    allowNull: false,
    references: {
      model: _Dollar["default"],
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
  file_id: {
    type: _sequelize["default"].INTEGER,
    allowNull: false,
    references: {
      model: _File["default"],
      key: 'id'
    }
  },
  responsable_id: {
    type: _sequelize["default"].INTEGER,
    allowNull: false,
    references: {
      model: _Person["default"],
      key: 'id'
    }
  },
  approvalby_id: {
    type: _sequelize["default"].INTEGER,
    allowNull: false,
    references: {
      model: _Person["default"],
      key: 'id'
    }
  },
  approval: {
    type: _sequelize["default"].BOOLEAN,
    allowNull: false
  },
  dateapproval: {
    type: _sequelize["default"].DATEONLY,
    allowNull: false
  },
  notes: {
    type: _sequelize["default"].TEXT
  },
  color: {
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

var _default = Task;
exports["default"] = _default;