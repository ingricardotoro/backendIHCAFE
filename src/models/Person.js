//para modelar datos 
import Sequelize from 'sequelize';

//import connection object
import { sequelize } from '../database/database';

const Person = sequelize.define('persons',{

    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
   
    fullname:{
        type: Sequelize.STRING, 
        allowNull: false,
    },
    jobtitle:{
        type:Sequelize.STRING
    },
    gender:{
        type: Sequelize.STRING, 
        allowNull: false,
    },
    address:{
        type: Sequelize.TEXT, 
    },
    phone1:{
        type: Sequelize.STRING, 
    },
    phone2:{
        type: Sequelize.STRING, 
    },
    email:{
        type: Sequelize.STRING, 
    },
    filename:{
        type: Sequelize.TEXT, 
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

export default Person;