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
