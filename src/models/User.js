//para modelar datos 
import Sequelize from 'sequelize';
import TipoUser from './TipoUser'

//import connection object
import { sequelize } from '../database/database';

const User = sequelize.define('users', {

    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    lastname: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    username: {
        type: Sequelize.STRING
    },
    tipo_user_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
            model: TipoUser,
            key: 'id'
        }

    },

    password: {
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


User.belongsTo(TipoUser, { foreignKey: 'tipo_user_id', targetKey: 'id' });

export default User;

