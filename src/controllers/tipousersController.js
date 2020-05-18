import TipoUser from '../models/TipoUser'

//codigo para listar tipousuarios
export async function listTipoUsers(req, res) {
    try {
        const tipousers = await TipoUser.findAll();
        res.json({
            tipousers
        });
    } catch (error) {
        console.log("ERROR AL QUERE LISTAR Tipo de Usuarios:" + error);
    }
}