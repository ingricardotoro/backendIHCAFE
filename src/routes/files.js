import { Router } from "express";
import path from "path";
import multer from "multer";
import { v4 as uuidv4 } from "uuid";
import Archivo from "../models/Archivo";
import Archivo_Estandar from "../models/Archivo_Estandar";

import "@babel/polyfill";

const router = Router();

import { FileByBudgetId, FileByBudgetIdAtlas, DeleteFileById, DeleteFileByIdAtlas } from "../controllers/filesController";

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, "../../src/public/files"));
    },
    filename: function(req, file, cb) {
        cb(null, uuidv4() + path.extname(file.originalname).toLocaleLowerCase());
    },
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 20000000 }, //20 megas
    fileFilter: (req, file, cb) => {
        const filetypes = /jpeg|jpg|png|gif|pdf/;
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(path.extname(file.originalname));

        if (mimetype && extname) {
            return cb(null, true);
        }
        cb("Solo se Permite Archivos Tipo Imagen o PDF");
    },
});

//ruta para visualizar un  archivo, asignado a un budget y a un budgetLine Standar
router.post("/filesbybudgetid/:budget_id/:budgetline_id", FileByBudgetId);

//ruta para visualizar un  archivo, asignado a un budget y a un budgetLine Atlas  
router.post("/filesbybudgetid_atlas/:budget_id/:budgetlineatlas_id", FileByBudgetIdAtlas);

//ruta para eliminar un archivo por Id
router.post("/delete/:filename", DeleteFileById);

//ruta para eliminar un archivo aTLAS por Id
router.post("/delete_atlas/:filename", DeleteFileByIdAtlas);

//Ruta para almacenar el archivo para presupuestos ATLAS
router.post("/atlas", upload.single("archivo"), async function(req, res, next) {
    console.log(req.file);
    const dir = "files/";
    try {
        let newFile = await Archivo.create({
            filename: req.file.filename,
            filedir: dir,
            description: req.body.file_name,
            fase: req.body.fase,
            budget_id: req.body.budget_id,
            budgetlineatlas_id: req.body.budgetlineatlas_id,
        }, {
            fields: [
                "filename",
                "filedir",
                "description",
                "fase",
                "budget_id",
                "budgetlineatlas_id",
            ],
        });

        if (newFile) {
            //res.redirect('http://localhost:3000/project/'+req.body.project_id);
            res.redirect("http://167.99.15.83/project/" + req.body.project_id);
        } else {
            return res.json({
                message: "No se Pudo Crear el Nuevo Archivo",
                data: {},
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error al crear nuevo File",
            data: {},
        });
    }
});

//Ruta para almacenar el archivo para presupuestos estandar
router.post("/", upload.single("archivo"), async function(req, res, next) {
    console.log(req.file);
    const dir = "files/";
    try {
        let newFile = await Archivo_Estandar.create({
            filename: req.file.filename,
            filedir: dir,
            description: req.body.file_name,
            fase: req.body.fase,
            budget_id: req.body.budget_id,
            budgetline_id: req.body.budgetline_id,
        }, {
            fields: [
                "filename",
                "filedir",
                "description",
                "fase",
                "budget_id",
                "budgetline_id",
            ],
        });

        if (newFile) {
            //res.redirect('http://localhost:3000/project/'+req.body.project_id);
            res.redirect("http://167.99.15.83/project/" + req.body.project_id);
        } else {
            return res.json({
                message: "No se Pudo Crear el Nuevo Archivo",
                data: {},
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error al crear nuevo File",
            data: {},
        });
    }
});

export default router;