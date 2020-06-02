//para modelar datos 
import Sequelize from 'sequelize';

//import connection object
import { sequelize } from '../database/database';

const Supplier = sequelize.define('suppliers', {

    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    company: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    contact_name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    address: {
        type: Sequelize.TEXT
    },
    email: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    phone1: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    phone2: {
        type: Sequelize.STRING,
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

export default Supplier;