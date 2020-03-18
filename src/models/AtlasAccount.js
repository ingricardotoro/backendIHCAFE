//para modelar datos 
import Sequelize from 'sequelize';

//import connection object
import { sequelize } from '../database/database';

const AtlasAccount = sequelize.define('atlas_accounts',{

    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
   
    name:{
        type: Sequelize.TEXT, 
        allowNull: false,
    },
    code:{
        type: Sequelize.STRING, 
        allowNull: false,
    },
    details:{
        type:Sequelize.TEXT
    },
    code_atlas:{
        type: Sequelize.STRING,
        allowNull: false,
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

export default AtlasAccount;