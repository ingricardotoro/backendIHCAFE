//para modelar datos 
import Sequelize from 'sequelize';
import Person from './Person';
import Project from './Project';
import Rol from './Rol';
import Rol from './Team';
import File from './File';

//import connection object
import { sequelize } from '../database/database';

const Team = sequelize.define('teams',{

    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
   
    team_id:{
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
    
    createdAt:{
        type:Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        
    },
    updatedAt:{
        type:Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        
    }

},{timestamps:true });

export default Team;