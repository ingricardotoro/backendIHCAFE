require("dotenv").config();
//importamos el objeto servidor
import express, { json } from "express";
//morgan ayuda a recibir en consola las peticiones http
import morgan from "morgan";
import path from "path";
//import multer from "multer"; // para subir archivos

//importamos el middleare core para el enlace entre servidores
import cors from "cors";

//Import Routes
import projectRoutes from "./routes/projects";
import budgetstRoutes from "./routes/budgets";
import budgetLinesRoutes from "./routes/budgetslines";
import categoriesRoutes from "./routes/categories";
import teamsRoutes from "./routes/teams";
import taskRoutes from "./routes/task";
import accountsRoutes from "./routes/accounts";
import atlasRoutes from "./routes/atlas";
import suppliersRoutes from "./routes/suppliers";
import filesRoutes from "./routes/files";
import coinsRoutes from "./routes/coins";
import reportsRoutes from "./routes/reports";


//Initialization
const app = express();

//settings
app.set("port", process.env.PORT || 4000);

//middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(json()); // para entender archivos json

//routes
app.use("/api/projects", projectRoutes);
app.use("/api/budgets", budgetstRoutes);
app.use("/api/budgetlines", budgetLinesRoutes);
app.use("/api/categories", categoriesRoutes);
app.use("/api/teams", teamsRoutes);
app.use("/api/accounts", accountsRoutes);
app.use("/api/atlas", atlasRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/suppliers", suppliersRoutes);
app.use("/api/files", filesRoutes);
app.use("/api/coins", coinsRoutes);
app.use("/api/reports", reportsRoutes);

//crear carpeta publica para el navegador
//app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(path.join(__dirname, "../src/public")));

//app.use(express.static(__dirname + '../src/public'));
//app.use(express.static('public'));
export default app;
