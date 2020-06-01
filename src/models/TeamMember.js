//para modelar datos 
import Sequelize from 'sequelize';
import Person from './Person';
import Rol from './Rol';
import Team from './Team';

//import connection object
import { sequelize } from '../database/database';

const Teammembers = sequelize.define('teammembers', {

    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    team_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Team,
            key: 'id',
        }
    },

    person_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Person,
            key: 'id',
        }
    },

    rol_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Rol,
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

Teammembers.belongsTo(Team, { foreignKey: 'team_id', targetKey: 'id' });
Teammembers.belongsTo(Rol, { foreignKey: 'rol_id', targetKey: 'id' });

export default Teammembers;