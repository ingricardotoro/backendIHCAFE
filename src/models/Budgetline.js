//para modelar datos
import Sequelize from "sequelize";
import Person from "./Person";
import Account from "./Account";
import Project from "./Project";
import Category from "./Category";

//import connection object
import { sequelize } from "../database/database";

const BudgetLine = sequelize.define(
  "budgetlines",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    code: {
      type: Sequelize.INTEGER,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.TEXT,
    },
    date_start: {
      type: Sequelize.DATEONLY,
    },
    date_end: {
      type: Sequelize.DATEONLY,
    },
    category_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: Category,
        key: "id",
      },
    },
    sub_category_code: {
      type: Sequelize.STRING,
      allowNull: true,
      references: {
        model: Category,
        key: "code",
      },
    },
    account_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: Account,
        key: "id",
      },
    },
    project_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: Project,
        key: "id",
      },
    },
    user_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: Person,
        key: "id",
      },
    },
    supplier_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: Person,
        key: "id",
      },
    },
    buddgetstart: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
    buddgeupdate: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
    buddgetfinal: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
    balance: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
    returns: {
      type: Sequelize.DOUBLE,
    },
    deviation: {
      type: Sequelize.DOUBLE,
    },
    status: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    approval: {
      type: Sequelize.BOOLEAN,
    },
    approvalby_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: Person,
        key: "id",
      },
    },
    dateapproval: {
      type: Sequelize.DATEONLY,
    },
    createdAt: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
    updatedAt: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
  },
  { timestamps: true }
);

BudgetLine.belongsTo(Project, { foreignKey: "project_id" });
//BudgetLine.belongsTo(Category, { foreignKey: "category_id" });
//BudgetLine.belongsTo(Category, { foreignKey: "sub_category_code" });
BudgetLine.belongsTo(Person, { foreignKey: "supplier_id" });
//BudgetLine.belongsTo(Person, {foreignKey: 'approvalby_id'});
//Budget.hasMany(Project);
//Project.belongsTo(Budget, {foreignKey: 'budget_id'});
BudgetLine.belongsTo(Category, {
  foreignKey: "category_id",
  targetKey: "id",
});
BudgetLine.belongsTo(Category, {
  foreignKey: "sub_category_code",
  targetKey: "code",
});

export default BudgetLine;
