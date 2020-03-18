//para modelar datos 
import Sequelize from 'sequelize';
import File from './File';

//import connection object
import { sequelize } from '../database/database';

const Team = sequelize.define('teams',{

    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
   
    name:{
        type: Sequelize.STRING, 
        allowNull: false,
    },
    description:{
        type:Sequelize.TEXT
    },
   
    files_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: File,
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