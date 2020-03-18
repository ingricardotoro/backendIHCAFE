//para modelar datos 
import Sequelize from 'sequelize';
import Person from './Person';

//import connection object
import { sequelize } from '../database/database';

const Dollar = sequelize.define('dollars',{

    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
   
    date:{
        type: Sequelize.DATEONLY, 
        allowNull: false,
    },
    value:{
        type:Sequelize.DOUBLE
    },
    person_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: Person,
          key: 'id',
         }
    },
    active:{
        type:Sequelize.BOOLEAN
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

export default Dollar;