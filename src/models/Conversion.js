//para modelar datos
import Sequelize from "sequelize";
import Coin from './Coin';

//import connection object
import { sequelize } from "../database/database";

const Conversion = sequelize.define(
    "conversions",
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        coin_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: Coin,
                key: 'id',
            }
        },
        value: {
            type: Sequelize.DOUBLE,
            allowNull: false,
        },
        description: {
            type: Sequelize.TEXT,
        },

        dateinitial: {
            type: Sequelize.DATEONLY,
        },

        datefinal: {
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
Conversion.belongsTo(Coin, { foreignKey: 'coin_id' });

export default Conversion;
