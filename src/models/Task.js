//para modelar datos 
import Sequelize from 'sequelize';
import Category from './Category';
import Project from './Project';
import Account from './Account';
import Dollar from './Dollar';
import Team from './Team';
import File from './File';
import Person from './Person';
//import connection object
import { sequelize } from '../database/database';

const Task = sequelize.define('tasks',{

    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    code:{
        type: Sequelize.STRING(50),
    },
    name:{
        type: Sequelize.STRING, 
        allowNull: false,
    },
    description:{
        type:Sequelize.TEXT
    },
    status:{
        type: Sequelize.STRING, 
        allowNull: false,
    },
    priority:{
        type: Sequelize.STRING, 
        allowNull: false,
    },
    startdate:{
        type:Sequelize.DATEONLY,
        allowNull: false,
    },
    complete:{
        type:Sequelize.INTEGER,
        allowNull: false,
    },
    duration:{
        type:Sequelize.INTEGER,
        allowNull: false,
    },
    category_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: Category,
          key: 'id',
         }
    },
    project_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: Project,
          key: 'id',
         }
    },
    account_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: Account,
          key: 'id',
         }
    },
    dollar_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: Dollar,
          key: 'id',
         }
    },
    team_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: Team,
          key: 'id',
         }
    },
    file_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: File,
          key: 'id',
         }
    },
    responsable_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: Person,
          key: 'id',
         }
    },
    approvalby_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: Person,
          key: 'id',
         }
    },
    approval:{
        type: Sequelize.BOOLEAN, 
        allowNull: false
    },
    dateapproval:{
        type: Sequelize.DATEONLY, 
        allowNull: false
    },
    notes:{
        type: Sequelize.TEXT
    },
    color:{
        type: Sequelize.STRING, 
        allowNull: false
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

export default Task;