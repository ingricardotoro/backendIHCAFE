require('dotenv').config();
//importamos el objeto servidor
import express, { json } from 'express';
//morgan ayuda a recibir en consola las peticiones http
import morgan from 'morgan';
import path from 'path';
//import multer from "multer"; // para subir archivos

//importamos el middleare core para el enlace entre servidores
import cors from 'cors';

const whiteList = [
    'http://167.99.15.83',
    'http://167.99.15.83:80',
    'http://167.99.15.83:8080',
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
};

//Import Routes
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
app.use(cors());
app.use(json()); // para entender archivos json

//routes
app.use('/api/projects', cors(corsOptions), projectRoutes);
app.use('/api/budgets', cors(corsOptions), budgetstRoutes);
app.use('/api/budgetlines', cors(corsOptions), budgetLinesRoutes);
app.use('/api/categories', cors(corsOptions), categoriesRoutes);
app.use('/api/teams', cors(corsOptions), teamsRoutes);
app.use('/api/teammembers', cors(corsOptions), teamMembersRoutes);
app.use('/api/roles', cors(corsOptions), rolesRoutes);
app.use('/api/accounts', cors(corsOptions), accountsRoutes);
app.use('/api/atlas', cors(corsOptions), atlasRoutes);
app.use('/api/tasks', cors(corsOptions), taskRoutes);
app.use('/api/suppliers', cors(corsOptions), suppliersRoutes);
app.use('/api/files', cors(corsOptions), filesRoutes);
app.use('/api/coins', cors(corsOptions), coinsRoutes);
app.use('/api/conversions', cors(corsOptions), conversionsRoutes);
app.use('/api/reports', cors(corsOptions), reportsRoutes);
app.use('/api/users', cors(corsOptions), usersRoutes);
app.use('/api/tipousers', cors(corsOptions), tipousersRoutes);

//crear carpeta publica para el navegador
//app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(path.join(__dirname, '../src/public')));

//app.use(express.static(__dirname + '../src/public'));
//app.use(express.static('public'));
export default app;