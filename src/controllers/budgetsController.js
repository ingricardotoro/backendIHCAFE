import Budget from '../models/Budget';
import Account from '../models/Account';
export async function createBudget(req, res){

    const {code , name , description , excercise_start , excercise_end , account_id , person_id , buddgetstart , buddgeupdate , buddgetfinal , balance , returns , deviation , status , approval , approvalby_id, dateapproval } = req.body;
    try {
        let newBudget = await Budget.create({
            code ,
            name ,
            description ,
            excercise_start ,
            excercise_end ,
            account_id ,
            person_id ,
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
            fields:['code' , 'name' , 'description' , 'excercise_start' , 'excercise_end' , 'account_id' , 'person_id' , 'buddgetstart' , 'buddgeupdate' , 'buddgetfinal' , 'balance' , 'returns' , 'deviation' , 'status' , 'approval' , 'approvalby_id', 'dateapproval']
        });

        if (newBudget){
            //res.redirect('https://ihcafe-35ae7.firebaseapp.com/budgets');
            return res.json({
                message:"Presupuesto Creado Exitosamente",
                data:newBudget
            });
        }else{
            return res.json({
                message:"No se Pudo Crear el Nuevo Presupuesto",
                data:{}
            });
        }

    } catch (error) {
       console.log(error);
        res.status(500).json({
                message:"Error al crar nuevos Presupuestos",
                data:{}
        });
    }

}

export async function listBudgets(req,res){
    try {
        const budgets =await Budget.findAll({include:[Account] } );
        res.json({
            budgets
        })
    } catch (error) {
        console.log("ERROR AL QUERE LISTAR BUSGETS:"+error);
    }
   
}
