import Coin from "../models/Coin";

//codigo para obtener los RESULTADOS ATLAS , de codigo 0
export async function Listcoins(req, res) {
  try {
    const coins = await Coin.findAll();
    res.json({
      coins,
    });
  } catch (error) {
    console.log("ERROR AL QUERE LISTAR La monedas:" + error);
  }
}


export async function createCoin(req, res) {
  console.log("aqui vamos bien:");
  const {
    name,
    description,
    code,
  } = req.body;
  try {
    let newCoin = await Coin.create(
      {
        name,
        description,
        code
      },
      {
        fields: [
          "name",
          "description",
          "code"
        ],
      }
    );
    console.log("pasamos la creacion:" + newCoin);
    if (newCoin) {
      return res.json({
        message: "Moneda Creada Exitosamente",
        data: newCoin,
      });
    } else {
      return res.json({
        message: "No se Pudo Crear Nueva Moneda",
        data: {},
      });
    }

  } catch (error) {
    //console.log(error);
    res.status(500).json({
      message: "Error al crear nuevas Moneda",
      data: {},
    });
  }
}


export async function deleteCoin(req, res) {
  const { id } = req.params;
  try {
    const deleteRowCount = await Coin.destroy({
      where: {
        id,
      },
    });
    res.json({
      message: "Moneda Eliminada Satifactoriamente",
      count: deleteRowCount,
    });
  } catch (error) {
    console.log("ERROR AL QUERE ELIMINAR Moneda:" + error);
  }
}