import Team from '../models/Team'

export async function listTeams(req, res) {

    try {
        const teams = await Team.findAll();
        res.json({
            teams
        })
    } catch (error) {
        console.log("ERROR AL QUERE LISTAR EQUIPOS:" + error);
    }
}

export async function createTeam(req, res) {

    const {
        name,
        description
    } = req.body;

    try {
        let newTeam = await Team.create(
            {
                name,
                description
            },
            {
                fields: [
                    "name",
                    "description"
                ],
            }
        );

        if (newTeam) {
            return res.json({
                message: "Equipo Creado Exitosamente",
                data: newTeam,
            });
        } else {
            return res.json({
                message: "No se Pudo Crear Nuevo Equipo",
                data: {},
            });
        }

    } catch (error) {
        //console.log(error);
        res.status(500).json({
            message: "Error al crear nuevo Equipo",
            data: {},
        });
    }
}


export async function deleteTeam(req, res) {
    const { id } = req.params;
    try {
        const deleteRowCount = await Team.destroy({
            where: {
                id,
            },
        });
        res.json({
            message: "Equipo Eliminado Satifactoriamente",
            count: deleteRowCount,
        });
    } catch (error) {
        console.log("ERROR AL QUERE ELIMINAR Equipo:" + error);
    }
}
