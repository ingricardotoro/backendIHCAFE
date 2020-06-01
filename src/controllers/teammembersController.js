import TeamMember from '../models/TeamMember'

export async function listTeamMembersByTeamId(req, res) {
    //id del team
    const { id } = req.params;
    try {
        const teammembers = await TeamMember.findAll({
            where: {
                team_id: id,
            }
        },
        );
        res.json({
            teammembers
        })
    } catch (error) {
        console.log("ERROR AL Buscar teammembers:" + error);
    }
}

export async function deleteTeammember(req, res) {
    const { id } = req.params;
    try {
        const deleteRowCount = await TeamMember.destroy({
            where: {
                id,
            },
        });
        res.json({
            message: "TeamMember Eliminado Satifactoriamente",
            count: deleteRowCount,
        });
    } catch (error) {
        console.log("ERROR AL QUERE ELIMINAR TeamMember:" + error);
    }
}

export async function createTeammember(req, res) {

    const {
        team_id,
        person_id,
        rol_id
    } = req.body;

    try {
        let newTeamMember = await TeamMember.create(
            {
                team_id,
                person_id,
                rol_id
            },
            {
                fields: [
                    "team_id",
                    "person_id",
                    "rol_id"
                ],
            }
        );

        if (newTeamMember) {
            return res.json({
                message: "TeamMember Creado Exitosamente",
                data: TeamMember,
            });
        } else {
            return res.json({
                message: "No se Pudo Crear Nuevo TeamMember",
                data: {},
            });
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error al crear nuevo TeamMember",
            data: {},
        });
    }
}
