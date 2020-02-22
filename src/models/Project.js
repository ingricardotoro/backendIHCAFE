//para modelar datos 
import Sequelize from 'sequelize';
import Task from './Task';
import Category from './Category';
import Department from './Department';
import Budget from './Budget';
import Team from './Team';

//import connection object
import { sequelize } from '../database/database';

const Project = sequelize.define('projects',{

    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    code:{
        type: Sequelize.STRING,
    },
    name:{
        type: Sequelize.STRING, 
        allowNull: false,
    },
    description:{
        type:Sequelize.TEXT
    },
    priority:{
        type: Sequelize.STRING, 
        allowNull: false,
    },
    color:{
        type: Sequelize.STRING, 
        allowNull: false,
        defaultValue: "red"
    },
    category_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: Category,
          key: 'id',
        }
    },
    department_id:{
        type: Sequelize.INTEGER,
        references: {
          model: Department,
          key: 'id',
         }
    },
    budget_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: Budget,
          key: 'id',
        }
    },
    team_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: Team,
          key: 'id',
        }
    },
    startdate:{
        type:Sequelize.DATEONLY,
        allowNull: false,
    },
    enddate:{
        type:Sequelize.DATEONLY,
        allowNull: false,
    },
    status:{
        type: Sequelize.STRING, 
        allowNull: false,
    },
    location:{
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

Project.belongsTo(Budget, {foreignKey: 'budget_id'});


Project.hasMany(Task, {foreignKey: 'id'});
Task.belongsTo(Project, {foreignKey: 'project_id'});

export default Project;