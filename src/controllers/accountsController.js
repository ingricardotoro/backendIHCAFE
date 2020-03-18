
import Account from '../models/Account'

export async function listAccounts(req,res){
   
    try {
        const cuentas =await Account.findAll();
        res.json({
            cuentas
        })
    } catch (error) {
        console.log("ERROR AL QUERE LISTAR Account:"+error);
    }
   
} 
