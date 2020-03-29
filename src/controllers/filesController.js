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

//funcion para eliminar archivos por id
export async function DeleteFileById(req, res){

    const { id } = req.params;
    try {
        const deleteRowCount = await Archivo.destroy({
            where:{
                id
            }
        });
        res.json({
            message:"Archivo Eliminado Satifactoriamente",
            count:deleteRowCount
        });
    } catch (error) {
        console.log("ERROR AL QUERE ELIMINAR EL Archivo:"+error);
    }
}