//para modelar datos 
import Sequelize from 'sequelize';

//import connection object
import { sequelize } from '../database/database';

import BudgetLine from './Budgetline';

const Archivo_Estandar = sequelize.define('archivos_estandar', {

    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    filename: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    filedir: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    fase: {
        type: Sequelize.STRING
    },


    budgetline_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
            model: BudgetLine,
            key: 'id'
        }
    },

    budget_id: {
        type: Sequelize.INTEGER,
        allowNull: true,

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

//Archivo.belongsTo(BudgetLineAtlas, {foreignKey: 'budgetlineatlas_id', targetKey: 'id'});
//Archivo.belongsTo(BudgetLineAtlas, {foreignKey: 'budgetlineatlas_id'});
//Archivo.belongsTo(BudgetLineAtlas);

export default Archivo_Estandar;