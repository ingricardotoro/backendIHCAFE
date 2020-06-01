import Rol from '../models/Rol'

export async function listRole(req, res) {

    try {
        const roles = await Rol.findAll();
        res.json({
            roles
        })
    } catch (error) {
        console.log("ERROR AL QUERE LISTAR Roles:" + error);
    }
}