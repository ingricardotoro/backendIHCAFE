"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _Person = _interopRequireDefault(require("./Person"));

var _Account = _interopRequireDefault(require("./Account"));

var _Project = _interopRequireDefault(require("./Project"));

var _AtlasAccount = _interopRequireDefault(require("./AtlasAccount"));

var _Archivo = _interopRequireDefault(require("./Archivo"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//para modelar datos 
//import connection object
var BudgetLineAtlas = _database.sequelize.define('budgetlines_atlas', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  code_resultado: {
    type: _sequelize["default"].STRING,
    allowNull: false
  },
  code_producto: {
    type: _sequelize["default"].STRING,
    allowNull: false
  },
  code_activity: {
    type: _sequelize["default"].STRING,
    allowNull: false
  },
  code_atlas: {
    type: _sequelize["default"].INTEGER,
    allowNull: false,
    references: {
      model: _AtlasAccount["default"],
      key: 'id'
    }
  },
  code_sub_atlas: {
    /*type: Sequelize.STRING, 
    allowNull: false*/
    type: _sequelize["default"].INTEGER,
    allowNull: false,
    references: {
      model: _AtlasAccount["default"],
      key: 'id'
    }
  },
  code: {
    type: _sequelize["default"].STRING
  },
  details: {
    type: _sequelize["default"].TEXT
  },
  comentario: {
    type: _sequelize["default"].TEXT
  },
  date_start: {
    type: _sequelize["default"].DATEONLY
  },
  date_end: {
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
  project_id: {
    type: _sequelize["default"].INTEGER,
    allowNull: false,
    references: {
      model: _Project["default"],
      key: 'id'
    }
  },
  user_id: {
    type: _sequelize["default"].INTEGER,
    allowNull: false,
    references: {
      model: _Person["default"],
      key: 'id'
    }
  },
  supplier_id: {
    type: _sequelize["default"].INTEGER,
    allowNull: false,
    references: {
      model: _Person["default"],
      key: 'id'
    }
  },
  budgetstart: {
    type: _sequelize["default"].DOUBLE,
    allowNull: false
  },
  budgeupdate: {
    type: _sequelize["default"].DOUBLE,
    allowNull: false
  },
  budgetfinal: {
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
});

BudgetLineAtlas.belongsTo(_Project["default"], {
  foreignKey: 'project_id'
});
BudgetLineAtlas.belongsTo(_Person["default"], {
  foreignKey: 'supplier_id'
}); //BudgetLineAtlas.belongsTo(AtlasAccount, { foreignKey: 'code_atlas' });

BudgetLineAtlas.belongsTo(_AtlasAccount["default"], {
  foreignKey: 'code_atlas',
  targetKey: 'id'
}); //BudgetLineAtlas.belongsTo(AtlasAccount,  {foreignKey: 'code_sub_atlas'});
//BudgetLineAtlas.belongsTo(AtlasAccount, {foreignKey: 'code_atlas', targetKey: 'code'});
//BudgetLineAtlas.belongsTo(AtlasAccount, {foreignKey: 'code_atlas'});
//BudgetLine.belongsTo(Person, {foreignKey: 'approvalby_id'});

/*BudgetLineAtlas.hasMany(Archivo);
Country.hasMany(City, {foreignKey: 'countryCode', sourceKey: 'isoCode'});
City.belongsTo(Country, {foreignKey: 'countryCode', targetKey: 'isoCode'});*/
//BudgetLineAtlas.hasMany(Archivo, {foreignKey: 'budgetlineatlas_id', sourceKey: 'id'});
//BudgetLineAtlas.hasMany(Archivo, {as: 'archivos', foreignKey : 'budgetlineatlas_id'})
//BudgetLineAtlas.hasMany(Archivo, {as: 'archivos', foreignKey: 'budgetlineatlas_id'});
//BudgetLineAtlas.hasMany(Archivo);
//Archivo.belongsTo(Country, {foreignKey: 'countryCode', targetKey: 'isoCode'});
//Project.belongsTo(Budget, {foreignKey: 'budget_id'});

var _default = BudgetLineAtlas;
exports["default"] = _default;