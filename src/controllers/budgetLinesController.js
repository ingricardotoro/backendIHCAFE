import Budgetline from '../models/Budgetline';
import Category from '../models/Category';
import Person from '../models/Person';
import Project from '../models/Project';
import Budget from '../models/Budget';
import Archivo from '../models/Archivo';
import sequelize from 'sequelize';
import BudgetLineAtlas from '../models/BudgetLineAtlas';
import AtlasAccount from '../models/AtlasAccount';

//funcion para obtener todos los renglones presupuestario de este projecto id
//nos ayuda a calcular los totales de presupuestos para las RowCardProjects
export async function budgetLinesbyProjectId(req,res){
    const { id } = req.params;
    try {
       
        const  budgetLines =await  Budgetline.findAll({
            include: [ Person ],
            order: [['category_id', 'ASC']],
            where:{
                project_id:id
            }
        });
        res.json({
            budgetLines
        })
      
    } catch (error) {
        console.log("ERROR AL QUERE LISTAR Budgetline:"+error);
    }
   
} 

//Funcion para obtener los diferentes id de las categorias de los budgetlines
//nos ayuda en generar los TableCost
export async function budgetLinesCatgoriesByProjectId(req,res){
    const { id } = req.params;
    try {
       
    const  budgetCategories =await  Budgetline.findAll({
     
        attributes: [ [sequelize.fn('DISTINCT', sequelize.col('category_id')), 'category_id'] ],
        where:{
            project_id:id
        }
    });
    res.json({
        budgetCategories
    })
      
    } catch (error) {
        console.log("ERROR AL QUERE LISTAR BudgetlineCategories:"+error);
    }
   
}

//funcion para mostar los renglones presupuestarios clasificados por projectos y categorias
//ayuda a desplegar las tablas de renglones
export async function budgetLinesbyProjectIdCategories(req,res){

    const { idPro, idCat } = req.params;
    try {
       
        const  budgetLinesCat =await  Budgetline.findAll({
            /* include: [
                { model: Category, where: { id: idCat }}
             ], */
             include:[Category, Person],
            // attributes: [sequelize.fn('DISTINCT', sequelize.col('category_id')), 'categorias'],
             //attributes: [['category_id','categoria'] ],
         
            order: [['category_id', 'ASC']],
            where:{
                project_id:idPro,
                category_id:idCat
            }
        });
        res.json({
            budgetLinesCat
        })
      
    } catch (error) {
        console.log("ERROR AL QUERE LISTAR Budgetline Category:"+error);
    }
}

//funion para crear nuevos renglones presupuestarios
export async function createBudgetLines(req, res){

    const {code , name , description , date_start , date_end ,category_id, account_id , project_id ,user_id,supplier_id, buddgetstart , buddgeupdate , buddgetfinal , balance , returns , deviation , status , approval , approvalby_id, dateapproval } = req.body;
    try {
        let newBudgetLine = await Budgetline.create({
            code ,
            name ,
            description ,
            date_start ,
            date_end ,
            category_id ,
            account_id ,
            project_id,
            user_id ,
            supplier_id,
            buddgetstart ,
            buddgeupdate ,
            buddgetfinal ,
            balance ,
            returns ,
            deviation ,
            status ,
            approval ,
            approvalby_id,
            dateapproval
            
        },{
            fields:['code' , 'name' , 'description' , 'date_start' , 'date_end' , 'category_id', 'account_id', 'project_id' , 'user_id' , 'supplier_id' , 'buddgetstart' , 'buddgeupdate' , 'buddgetfinal' , 'balance' , 'returns' , 'deviation' , 'status' , 'approval' , 'approvalby_id', 'dateapproval']
        });

        if (newBudgetLine){

            //acutualizamos la base de datos , el balance y el budget star, ya que solo es soliictado
            try {

                 //buscamos el projecto y el presupuesto al que pertenece este renglon.
                const project_budget =await  Project.findOne({
                    where:{
                        id:project_id
                    },
                    include:[Budget] 
                });
            
                //obtenemos el presupuesto inicial y el balance actual de la base de datos
                const Budgetstart_old = project_budget.budget.buddgetstart;
                const balance_old = project_budget.budget.balance;
            
                //calculamos el nuevo balance y budgetstart
                const newBudgetStar = parseFloat(Budgetstart_old) + parseFloat(buddgetstart);
                const newBalance = parseFloat(balance_old) + parseFloat(balance);

                const result_update = await Budget.update({
                    buddgetstart:newBudgetStar,
                    balance:newBalance
                },
                    {
                        where:{id:project_budget.budget.id}
                    }
                )

                if(result_update){
                    res.json({
                        message:"BudgetStarNEW Actualizado Satifactoriamente"
                    })
                }
                
            }catch(erro){
                console.log(erro);
                return res.json({
                    message: 'Something Wrong in Update BudgetLine',
                    data:{}
                });
            }
           

            return res.json({
                message:"Renglon Presupuestario Creado Exitosamente",
                data:newBudgetLine
            });

        }else{
            return res.json({
                message:"No se Pudo Crear el Nuevo Renglon Presupuestario",
                data:{}
            });
        }

    } catch (error) {
       console.log(error);
        res.status(500).json({
                message:"Error al crar nuevo Renglon Presupuestario",
                data:{}
        });
    }

}

export async function AprobarBudgetLinesbyId(req, res){

    let Nuevo_status = '';

    const { id, status } = req.params;
    console.log("VALOR DE ID:"+id);
    console.log("VALOR DE SATUS:"+status);
    if (status!=0) {
        
        if (status=="1") {
            Nuevo_status ="Aprobado";
        }
        if(status=="2") {
            Nuevo_status ="No Aprobado";
        }

        try { 
            const result = await Budgetline.update({
                status:Nuevo_status
            },
            {
                where:{id}
            }
            );
    
            if(result){
                res.json({
                    message:"Actualizado Satifactoriamente"
                })
            }
              
        }catch(erro){
            console.log(erro);
            return res.json({
                message: 'Something Wrong in Update',
                data:{}
            });
        }
        
    }
   
    
}


/// CREACION DE RENGLON PPRESUPUESTARIO MODALIDAD ATLAS/////
//funion para crear nuevos renglones presupuestarios en la tabla budgetlines_atlas
export async function createBudgetLinesAtlas(req, res){

    const {code_resultado , code_producto,code_activity,code_atlas,code_sub_atlas,code,details, date_start , date_end , account_id , project_id ,user_id,supplier_id, budgetstart , budgeupdate , budgetfinal , balance , returns , deviation , status , approval , approvalby_id, dateapproval } = req.body;
    try {
        let newBudgetLineAtlas = await BudgetLineAtlas.create({
            code_resultado,
            code_producto,
            code_activity,
            code_atlas,
            code_sub_atlas,
            code ,
            details,
            date_start ,
            date_end ,
            account_id ,
            project_id,
            user_id ,
            supplier_id,
            budgetstart ,
            budgeupdate ,
            budgetfinal ,
            balance ,
            returns ,
            deviation ,
            status ,
            approval ,
            approvalby_id,
            dateapproval
            
        },{
            fields:['code_resultado' , 'code_producto' , 'code_activity' , 'code_atlas' ,'code_sub_atlas' , 'code' ,'details', 'date_start' , 'date_end' , 'account_id', 'project_id' , 'user_id' , 'supplier_id' , 'budgetstart' , 'budgeupdate' , 'budgetfinal' , 'balance' , 'returns' , 'deviation' , 'status' , 'approval' , 'approvalby_id', 'dateapproval']
        });

        if (newBudgetLineAtlas){

            //acutualizamos la base de datos , el balance y el budget star, ya que solo es soliictado
            try {

                 //buscamos el projecto y el presupuesto al que pertenece este renglon.
                const project_budget =await  Project.findOne({
                    where:{
                        id:project_id
                    },
                    include:[Budget] 
                });
            
                //obtenemos el presupuesto inicial y el balance actual de la base de datos
                const Budgetstart_old = project_budget.budget.budgetstart;
                const balance_old = project_budget.budget.balance;
            
                //calculamos el nuevo balance y budgetstart
                const newBudgetStar = parseFloat(Budgetstart_old) + parseFloat(budgetstart);
                const newBalance = parseFloat(balance_old) + parseFloat(balance);

                const result_update = await Budget.update({
                    buddgetstart:newBudgetStar,
                    balance:newBalance
                },
                    {
                        where:{id:project_budget.budget.id}
                    }
                )

                if(result_update){
                    res.json({
                        message:"BudgetStarNEW Atlas Actualizado Satifactoriamente"
                    })
                }
                
            }catch(erro){
                console.log(erro);
                return res.json({
                    message: 'Something Wrong in Update BudgetLine Atlas',
                    data:{}
                });
            }
           

            return res.json({
                message:"Renglon Presupuestario Atlas Creado Exitosamente",
                data:newBudgetLine
            });

        }else{
            return res.json({
                message:"No se Pudo Crear el Nuevo Renglon Presupuestario ATLAS",
                data:{}
            });
        }

    } catch (error) {
       console.log(error);
        res.status(500).json({
                message:"Error al crar nuevo Renglon Presupuestario Atlas",
                data:{}
        });
    }

}
//funcion para obtener todos los renglones presupuestarios atlas de este projecto id
//nos ayuda a calcular los totales de presupuestos para las RowCardProjects
export async function budgetLinesAtlasbyProjectId(req,res){
    const { id } = req.params;
    try {
       
        const  budgetLines_atlas =await  BudgetLineAtlas.findAll({
            include: [ Person, AtlasAccount ],
            order: [['id', 'ASC']],
            where:{
                project_id:id
            }
        });
        res.json({
            budgetLines_atlas
        })
      
    } catch (error) {
        console.log("ERROR AL QUERE LISTAR las Budgetline-Atlas:"+error);
    }
   
} 

//Funcion para obtener los diferentes id de las categorias Atlas de los budgetlines
//nos ayuda en generar los TableCostAtlas
export async function budgetLinesAccountsAtlasByProjectId(req,res){
    const { id } = req.params;
    try {
       
    const  budgetAccountAtlas =await  BudgetlineAtlas.findAll({
     
        attributes: [ [sequelize.fn('DISTINCT', sequelize.col('code_atlas')), 'code_atlas'] ],
        where:{
            project_id:id
        }
    });
    res.json({
        budgetAccountAtlas
    })
      
    } catch (error) {
        console.log("ERROR AL QUERE LISTAR BudgetlineCategories:"+error);
    }
   
}
//funcion para aprobar un budgetLineAtlas
export async function AprobarBudgetLinesAtlasbyId(req, res){

    let Nuevo_status = '';

    const { id, status } = req.params;
    console.log("VALOR DE ID:"+id);
    console.log("VALOR DE STATUS:"+status);
    if (status!=0) {
        
        if (status=="1") {
            Nuevo_status ="Aprobado";
        }
        if(status=="2") {
            Nuevo_status ="No Aprobado";
        }

        try { 
            const result = await BudgetLineAtlas.update({
                status:Nuevo_status
            },
            {
                where:{id}
            }
            );
    
            if(result){
                res.json({
                    message:"Actualizado Satifactoriamente"
                })
            }
              
        }catch(erro){
            console.log(erro);
            return res.json({
                message: 'Something Wrong in Update',
                data:{}
            });
        }
        
    }
   
    
}
