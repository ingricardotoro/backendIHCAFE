//para modelar datos 
import Sequelize from 'sequelize';
import Person from './Person';
import Rol from './Rol';
import Team from './Team';

//import connection object
import { sequelize } from '../database/database';

const TeamMember = sequelize.define('team_members', {

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

TeamMember.belongsTo(Team, { foreignKey: 'team_id', targetKey: 'id' });
TeamMember.belongsTo(Rol, { foreignKey: 'rol_id', targetKey: 'id' });

export default TeamMember;