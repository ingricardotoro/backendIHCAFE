import Supplier from '../models/Supplier'

//codigo para obtener los RESULTADOS ATLAS , de codigo 0
export async function ListSuppliers(req,res){
    
    try {
       
        const suppliers = await  Supplier.findAll()
        res.json({
            suppliers
        })
      
    } catch (error) {
        console.log("ERROR AL QUERE LISTAR los Beneficiarios o PROVEEDORES:"+error);
    }
   
} 
