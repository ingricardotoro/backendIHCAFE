require('dotenv').config();
//importamos el objeto servidor
import express, { json } from 'express';
//morgan ayuda a recibir en consola las peticiones http
import morgan from 'morgan';
import path from 'path';
//import multer from "multer"; // para subir archivos

//importamos el middleare core para el enlace entre servidores
import cors from 'cors';

/*const whiteList = [
    'https://sipa.ihcafe.hn',
    'https://167.99.15.83',
    'https://167.99.15.83:80',
    'https://167.99.15.83:8080',
    'http://localhost:3001',
];

 const corsOptions = {
    origin: function(origin, callback) {
        if (whiteList.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not Allow by CORS2'));
        }
    },
}; */

//Import Routes
import inicioRoutes from './routes/inicio';
import projectRoutes from './routes/projects';
import budgetstRoutes from './routes/budgets';
import budgetLinesRoutes from './routes/budgetslines';
import categoriesRoutes from './routes/categories';
import teamsRoutes from './routes/teams';
import teamMembersRoutes from './routes/teammembers';
import rolesRoutes from './routes/roles';
import taskRoutes from './routes/task';
import accountsRoutes from './routes/accounts';
import atlasRoutes from './routes/atlas';
import suppliersRoutes from './routes/suppliers';
import filesRoutes from './routes/files';
import coinsRoutes from './routes/coins';
import conversionsRoutes from './routes/conversions';
import reportsRoutes from './routes/reports';
import usersRoutes from './routes/users';
import tipousersRoutes from './routes/tipousers';

//Initialization
const app = express();

//settings
app.set('port', process.env.PORT || 4000);

//middlewares
app.use(morgan('dev'));
app.options('*', cors());
app.use(cors());
app.use(json()); // para entender archivos json

//routes
app.use('/api', inicioRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/budgets', budgetstRoutes);
app.use('/api/budgetlines', budgetLinesRoutes);
app.use('/api/categories', categoriesRoutes);
app.use('/api/teams', teamsRoutes);
app.use('/api/teammembers', teamMembersRoutes);
app.use('/api/roles', rolesRoutes);
app.use('/api/accounts', accountsRoutes);
app.use('/api/atlas', atlasRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/suppliers', suppliersRoutes);
app.use('/api/files', filesRoutes);
app.use('/api/coins', coinsRoutes);
app.use('/api/conversions', conversionsRoutes);
app.use('/api/reports', reportsRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/tipousers', tipousersRoutes);

//crear carpeta publica para el navegador
//app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(path.join(__dirname, '../src/public')));

//app.use(express.static(__dirname + '../src/public'));
//app.use(express.static('public'));
export default app;