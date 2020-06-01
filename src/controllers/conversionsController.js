import Conversion from "../models/Conversion";
import Coin from '../models/Coin'

export async function ListConversionsByCoinId(req, res) {
    //id del coin
    const { id } = req.params;
    try {
        const conversions = await Conversion.findAll({
            include: [Coin],
            where: {
                coin_id: id,
            }
        });
        res.json({
            conversions,
        });
    } catch (error) {
        console.log("ERROR AL QUERE LISTAR Las conversiones:" + error);
    }
}


export async function createConversion(req, res) {

    const {
        coin_id,
        description,
        value,
        dateinitial,
        datefinal
    } = req.body;

    try {
        let newConversion = await Conversion.create(
            {
                coin_id,
                description,
                value,
                dateinitial,
                datefinal
            },
            {
                fields: [
                    "coin_id",
                    "description",
                    "value",
                    "dateinitial",
                    "datefinal"
                ],
            }
        );

        if (newConversion) {
            return res.json({
                message: "Conversion Creada Exitosamente",
                data: newConversion,
            });
        } else {
            return res.json({
                message: "No se Pudo Crear Nueva Conversion",
                data: {},
            });
        }

    } catch (error) {
        //console.log(error);
        res.status(500).json({
            message: "Error al crear nuevas Conversions",
            data: {},
        });
    }
}

export async function deleteConversion(req, res) {
    const { id } = req.params;
    try {
        const deleteRowCount = await Conversion.destroy({
            where: {
                id,
            },
        });
        res.json({
            message: "Conversion Eliminada Satifactoriamente",
            count: deleteRowCount,
        });
    } catch (error) {
        console.log("ERROR AL QUERE ELIMINAR Conversion:" + error);
    }
}