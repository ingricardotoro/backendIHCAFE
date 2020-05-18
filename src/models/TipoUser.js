//para modelar datos 
import Sequelize from 'sequelize';

//import connection object
import { sequelize } from '../database/database';

const tipoUser = sequelize.define('tipousers', {

    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    tipo_user: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
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

export default tipoUser;