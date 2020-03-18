require('dotenv').config();
//importamos el objeto servidor 
import express, { json } from 'express';
//morgan ayuda a recibir en consola las peticiones http
import morgan from 'morgan';

//importamos el middleare core para el enlace entre servidores
import cors from 'cors';

//Import Routes
import projectRoutes from './routes/projects';
import budgetstRoutes from './routes/budgets';
import budgetLinesRoutes from './routes/budgetslines';
import categoriesRoutes from './routes/categories';
import teamsRoutes from './routes/teams';
import taskRoutes from './routes/task';
import accountsRoutes from './routes/accounts';

//Initialization
const app = express();

//settings
app.set('port',process.env.PORT || 5000);

//middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(json()); // para entender archivos json

//routes
app.use('/api/projects',projectRoutes); 
app.use('/api/budgets',budgetstRoutes); 
app.use('/api/budgetlines',budgetLinesRoutes);
app.use('/api/categories',categoriesRoutes);
app.use('/api/teams',teamsRoutes);
app.use('/api/accounts',accountsRoutes);

app.use('/api/tasks',taskRoutes); 

export default app;