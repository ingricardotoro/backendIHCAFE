//para modelar datos 
import Sequelize from 'sequelize';
//import Category from './Category';
import Person from './Person';

//import connection object
import { sequelize } from '../database/database';

const Account = sequelize.define('accounts',{

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
          model: Person,
          key: 'id',
         }
    },
    initialbalance:{
        type:Sequelize.DOUBLE,
        allowNull: false,
    },
    actualbalance:{
        type:Sequelize.DOUBLE,
        allowNull: false,
    },
    coin:{
        type:Sequelize.STRING,
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

export default Account;