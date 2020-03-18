import {Router} from 'express';
import path from 'path';
import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';
import Archivo from '../models/Archivo'

const router = Router();


import {FileByBudgetId} from '../controllers/filesController';

/*const storage=multer.diskStorage({
    
    destination: path.join(__dirname, '../public/files'),
    filename: (req, file , cb) => {
        cb(null, file.originalname)
    }
});*/

/*const upload = multer({
    storage
}).single(req.body.file)*/
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../public/files'))
    },
    filename: function (req, file, cb) {
      cb(null, uuidv4()+path.extname(file.originalname).toLocaleLowerCase());
    }
  })
   
  const upload = multer({ 
      storage: storage,
      limits:{fileSize: 5000000}, //5 megas
      fileFilter: (req,file, cb) => {
        const filetypes = /jpeg|jpg|png|gif|pdf/;
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(path.extname(file.originalname));

        if (mimetype && extname){
            return cb(null,true);
        }
        cb("Solo se Permite Archivos Tipo Imagen");
      }
     
});

//const upload = multer ({dest: path.join(__dirname, '../public/files')});

//ruta para la creacion de un nuevo archivo, asignado a un budgetLiine Atlas
router.post('/filesbybudgetid/:id',FileByBudgetId);
router.post('/:id', upload.single('archivo'),async function (req, res, next ){
    console.log(req.file);
    const dir = '/files/'
    try {
        let newFile = await Archivo.create({
            filename: req.file.filename,
            filedir:  dir,
            description: req.body.file_name,
            fase : req.body.fase,
            budgetlineatlas_id:req.body.budget_id
        },{
            fields:['filename' , 'filedir' ,'description', 'fase' , 'budgetlineatlas_id']
        });

        if (newFile){
            
            res.redirect('http://localhost:3000/project/'+req.body.project_id);
    
        }else{
            return res.json({
                message:"No se Pudo Crear el Nuevo Archivo",
                data:{}
            });
        }

    } catch (error) {
       console.log(error);
        res.status(500).json({
                message:"Error al crear nuevo File",
                data:{}
        });
    }
    
});

/* router.get('/categories_parents',categoriesparents);
router.get('/categories_childs/:id',categories_childs);// para obtener todas las categorias hijas dado el id del padre
router.get('/child/:id',childbyid); // para solicitar una clasificacion hijo en especifico
 */

export default router;
