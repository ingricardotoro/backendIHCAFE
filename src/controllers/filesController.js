import Archivo from '../models/Archivo'

export async function FileByBudgetId(req, res){

    const { id } = req.params;
   
        try {
       
            const files =await  Archivo.findAll({
               
                where:{
                    budgetlineatlas_id:id
                }
            });
            res.json({
                files
            })
          
        } catch (error) {
            console.log("ERROR AL QUERER BUSCAR El ARCHIVO POR BUDGETLINE:"+error);
        }
    

}