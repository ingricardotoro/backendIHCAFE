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