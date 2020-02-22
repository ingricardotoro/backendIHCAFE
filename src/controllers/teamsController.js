import Team from '../models/Team'

export async function listTeams(req,res){
   
    try {
        const teams =await Team.findAll();
        res.json({
            teams
        })
    } catch (error) {
        console.log("ERROR AL QUERE LISTAR EQUIPOS:"+error);
    }
   
} 
