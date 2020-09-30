"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _Person = _interopRequireDefault(require("./Person"));

var _Account = _interopRequireDefault(require("./Account"));

var _Project = _interopRequireDefault(require("./Project"));

var _Category = _interopRequireDefault(require("./Category"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//para modelar datos
//import connection object
var BudgetLine = _database.sequelize.define("budgetlines", {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  code: {
    type: _sequelize["default"].INTEGER
  },
  name: {
    type: _sequelize["default"].STRING,
    allowNull: false
  },
  description: {
    type: _sequelize["default"].TEXT
  },
  date_start: {
    type: _sequelize["default"].DATEONLY
  },
  date_end: {
    type: _sequelize["default"].DATEONLY
  },
  category_id: {
    type: _sequelize["default"].INTEGER,
    allowNull: true,
    references: {
      model: _Category["default"],
      key: "id"
    }
  },
  sub_category_code: {
    type: _sequelize["default"].STRING,
    allowNull: true,
    references: {
      model: _Category["default"],
      key: "code"
    }
  },
  account_id: {
    type: _sequelize["default"].INTEGER,
    allowNull: false,
    references: {
      model: _Account["default"],
      key: "id"
    }
  },
  project_id: {
    type: _sequelize["default"].INTEGER,
    allowNull: false,
    references: {
      model: _Project["default"],
      key: "id"
    }
  },
  user_id: {
    type: _sequelize["default"].INTEGER,
    allowNull: false,
    references: {
      model: _Person["default"],
      key: "id"
    }
  },
  supplier_id: {
    type: _sequelize["default"].INTEGER,
    allowNull: false,
    references: {
      model: _Person["default"],
      key: "id"
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
    allowNull: true,
    references: {
      model: _Person["default"],
      key: "id"
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
});

BudgetLine.belongsTo(_Project["default"], {
  foreignKey: "project_id"
}); //BudgetLine.belongsTo(Category, { foreignKey: "category_id" });
//BudgetLine.belongsTo(Category, { foreignKey: "sub_category_code" });

BudgetLine.belongsTo(_Person["default"], {
  foreignKey: "supplier_id"
}); //BudgetLine.belongsTo(Person, {foreignKey: 'approvalby_id'});
//Budget.hasMany(Project);
//Project.belongsTo(Budget, {foreignKey: 'budget_id'});

BudgetLine.belongsTo(_Category["default"], {
  foreignKey: "category_id",
  targetKey: "id"
});
BudgetLine.belongsTo(_Category["default"], {
  foreignKey: "sub_category_code",
  targetKey: "code"
});
var _default = BudgetLine;
exports["default"] = _default;