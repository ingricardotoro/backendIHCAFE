import { Router } from "express";
const router = Router();

import {
  createBudgetLines,
  budgetLinesbyProjectId,
  budgetLinesCatgoriesByProjectId,
  budgetLinesbyProjectIdCategories,
  AprobarBudgetLinesbyId,
  createBudgetLinesAtlas,
  budgetLinesAtlasbyProjectId,
  AprobarBudgetLinesAtlasbyId,
  deleteBudgetLines,
  deleteBudgetLinesAtlas,
} from "../controllers/budgetLinesController";

// ruta /api/budgetlines/project/:id -> para buscar los renglones de cada projecto
router.post("/project/:id", budgetLinesbyProjectId);
// ruta /api/budgetlines/project/:id -> para buscar las categorias de rengones de este projecto
router.post("/cat_project/:id", budgetLinesCatgoriesByProjectId);
// ruta /api/budgetlines/project/:id -> para buscar los renglones de cada projecto y categoria
router.post(
  "/project/category/:idPro/:idCat",
  budgetLinesbyProjectIdCategories
);

// ruta para actualizar el status del budget line por ser aprobado
router.post("/aprobar/:id/:status/:valor/:comentario", AprobarBudgetLinesbyId);

// ruta para actualizar el status del budget line por ser aprobado
router.post(
  "/aprobar_atlas/:id/:status/:valor/:comentario",
  AprobarBudgetLinesAtlasbyId
);

// ruta /api/budgetlines/project/:id -> para buscar los renglones de cada projecto
router.post("/atlas/project/:id", budgetLinesAtlasbyProjectId);

// ruta /api/budgetlines/ -> para crear un nuevo renglon
router.post("/", createBudgetLines);
router.post("/budgetlineatlas", createBudgetLinesAtlas);
//ruta para eliminar un BudgetLine
router.post("/delete/:id", deleteBudgetLines);

//ruta para eliminar un BudgetLineAtlas
router.post("/budgetlineatlas/delete/:id", deleteBudgetLinesAtlas);

//router.get('/', listBudgets);
//router.get('/:id', findProject);
//router.delete('/:id', deleteProject);
//router.put('/:id', updateProject);

export default router;
