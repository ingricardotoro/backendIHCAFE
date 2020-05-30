//para modelar datos 
import Sequelize from 'sequelize';
import Coin from './Coin';
import User from './User';

//import connection object
import { sequelize } from '../database/database';

const Account = sequelize.define('accounts', {

    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.TEXT
    },
    /*  category_id: {
         type: Sequelize.INTEGER,
         allowNull: false,
         references: {
           model: Category,
           key: 'id',
          }
     }, */
    person_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id',
        }
    },
    initialbalance: {
        type: Sequelize.DOUBLE,
        allowNull: false,
    },
    actualbalance: {
        type: Sequelize.DOUBLE,
        allowNull: false,
    },
    coin_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Coin,
            key: 'id',
        }
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

Account.belongsTo(Coin, { foreignKey: 'coin' });
Account.belongsTo(User, { foreignKey: 'person_id' });

export default Account;