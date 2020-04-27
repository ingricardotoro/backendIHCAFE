import { Router } from "express";
const router = Router();

//import {createProjects,listProjects,findProject,deleteProject,updateProject } from '../controllers/projectsController';
// rutas /api/projets
import {
  createBudget,
  listBudgets,
  deleteBudget,
  findBudgetById,
  updateBudget,
  listBudgets_atlas,
  listBudgets_all
} from "../controllers/budgetsController";

router.post("/", createBudget);
router.get("/", listBudgets);
router.get("/atlas", listBudgets_atlas);
router.get("/all", listBudgets_all);
//router.get('/:id', findProject);
router.post("/delete/:id", deleteBudget);
router.post("/findBudgetById/:id", findBudgetById);
router.post("/edit/:id", updateBudget);

export default router;
