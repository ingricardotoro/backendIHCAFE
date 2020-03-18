//para modelar datos 
import Sequelize from 'sequelize';

//import connection object
import { sequelize } from '../database/database';

const Rol = sequelize.define('roles',{

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
   
    createdAt:{
        type:Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        
    },
    updatedAt:{
        type:Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        
    }

},{timestamps:true });

export default Rol;