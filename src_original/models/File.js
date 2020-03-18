//para modelar datos 
import Sequelize from 'sequelize';

//import connection object
import { sequelize } from '../database/database';

const File = sequelize.define('files',{

    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
   
    filename:{
        type: Sequelize.STRING, 
        allowNull: false,
    },
    filedir:{
        type: Sequelize.STRING, 
       
    },
    type:{
        type:Sequelize.STRING
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

export default File;