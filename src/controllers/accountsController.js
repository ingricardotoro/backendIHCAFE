
import Account from '../models/Account'

export async function listAccounts(req, res) {

    try {
        const cuentas = await Account.findAll();
        res.json({
            cuentas
        })
    } catch (error) {
        console.log("ERROR AL QUERE LISTAR Account:" + error);
    }

}


export async function CreateAccount(req, res) {
    const {
        name,
        description,
        coin,
        person_id
    } = req.body;
    try {
        let newAccount = await Account.create(
            {
                name,
                description,
                initialbalance: 0.0,
                actualbalance: 0.0,
                coin,
                person_id
            },
            {
                fields: [
                    "name",
                    "description",
                    "initialbalance",
                    "actualbalance",
                    "coin",
                    "person_id"
                ],
            }
        );

        if (newAccount) {
            return res.json({
                message: "Cuenta Creada Exitosamente",
                data: newAccount,
            });
        } else {
            return res.json({
                message: "No se Pudo Crear newAccount",
                data: {},
            });
        }
    } catch (error) {
        //console.log(error);
        res.status(500).json({
            message: "Error al crear nuevas Cuentas",
            data: {},
        });
    }
}