import Account from '../models/Account'
import Coin from '../models/Coin'
import User from '../models/User'

export async function listAccounts(req, res) {

    try {
        const cuentas = await Account.findAll({ include: [Coin, User] });
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
        coin_id,
        person_id
    } = req.body;
    try {
        let newAccount = await Account.create({
            name,
            description,
            initialbalance: 0.0,
            actualbalance: 0.0,
            coin_id,
            person_id
        }, {
            fields: [
                "name",
                "description",
                "initialbalance",
                "actualbalance",
                "coin_id",
                "person_id"
            ],
        });

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


export async function deleteAccount(req, res) {
    const { id } = req.params;
    try {
        const deleteRowCount = await Account.destroy({
            where: {
                id,
            },
        });
        res.json({
            message: "Cuenta Eliminada Satifactoriamente",
            count: deleteRowCount,
        });
    } catch (error) {
        console.log("ERROR AL QUERE ELIMINAR CUENTA:" + error);
    }
}