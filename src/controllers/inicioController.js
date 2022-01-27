export async function showInicio(req, res) {
    var data = {
        Porta: 'IHCAFE',
        TEC: 'MERN',
        Dev: 'Marvin',
    };
    res.json(data);
}