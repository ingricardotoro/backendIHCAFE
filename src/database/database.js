require("dotenv").config();
import Sequelize from "sequelize";

//create cadena de conexion
export const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_URI,
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      require: 30000,
      idle: 10000,
    },
    logging: false, // para ver las respuestas de la bd por consola
  }
);
