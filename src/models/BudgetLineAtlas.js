//para modelar datos 
import Sequelize from 'sequelize';
import Person from './Person';
import Account from './Account';
import Project from './Project';
import AtlasAccount from './AtlasAccount';
import Archivo from './Archivo';

//import connection object
import { sequelize } from '../database/database';

const BudgetLineAtlas = sequelize.define('budgetlines_atlas', {

    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    code_resultado: {
        type: Sequelize.STRING,
        allowNull: false
    },
    code_producto: {
        type: Sequelize.STRING,
        allowNull: false
    },
    code_activity: {
        type: Sequelize.STRING,
        allowNull: false
    },
    code_atlas: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: AtlasAccount,
            key: 'id',
        }
    },
    code_sub_atlas: {
        /*type: Sequelize.STRING, 
        allowNull: false*/
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: AtlasAccount,
            key: 'id',
        }
    },
    code: {
        type: Sequelize.STRING,
    },
    details: {
        type: Sequelize.TEXT,
    },
    comentario: {
        type: Sequelize.TEXT,
    },

    date_start: {
        type: Sequelize.DATEONLY,
    },
    date_end: {
        type: Sequelize.DATEONLY,
    },

    account_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Account,
            key: 'id',
        }
    },
    project_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Project,
            key: 'id',
        }
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Person,
            key: 'id',
        }
    },
    supplier_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Person,
            key: 'id',
        }
    },
    budgetstart: {
        type: Sequelize.DOUBLE,
        allowNull: false,
    },
    budgeupdate: {
        type: Sequelize.DOUBLE,
        allowNull: false,
    },
    budgetfinal: {
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
            key: 'id',
        }
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

    }

}, { timestamps: true });

BudgetLineAtlas.belongsTo(Project, { foreignKey: 'project_id' });
BudgetLineAtlas.belongsTo(Person, { foreignKey: 'supplier_id' });
//BudgetLineAtlas.belongsTo(AtlasAccount, { foreignKey: 'code_atlas' });
BudgetLineAtlas.belongsTo(AtlasAccount, { foreignKey: 'code_atlas', targetKey: 'id' });
//BudgetLineAtlas.belongsTo(AtlasAccount,  {foreignKey: 'code_sub_atlas'});


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

export default BudgetLineAtlas;