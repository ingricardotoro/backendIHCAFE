import Budgetline from "../models/Budgetline";
import Category from "../models/Category";
import Person from "../models/Person";
import Project from "../models/Project";
import Budget from "../models/Budget";
//import Archivo_Atlas from "../models/Archivo_Estandar";
import sequelize from "sequelize";
import BudgetLineAtlas from "../models/BudgetLineAtlas";
import BudgetLine from "../models/Budgetline";
import AtlasAccount from "../models/AtlasAccount";

import { sequelize as sequelizeDb } from '../database/database';

//funcion para obtener todos los renglones presupuestario de este projecto id
//nos ayuda a calcular los totales de presupuestos para las RowCardProjects
export async function budgetLinesbyProjectId(req, res) {
  const { id } = req.params;
  try {
    const budgetLines = await BudgetLine.findAll({
      include: [Person],
      order: [
        ["code", "Desc"]
      ],
      where: {
        project_id: id,
      },
    });
    res.json({
      budgetLines,
    });
  } catch (error) {
    console.log("ERROR AL QUERE LISTAR Budgetline:" + error);
  }
}

//Funcion para obtenet un Unico renglon presupuestario dado el proyectoId y el Id del Bidget
export async function budgetLinesbyProjectIdAndBudgetId(req, res) {
  const { proyectid, id } = req.params;

  //obtenemos el proyecto para determinar si el presupuesto es de tipo atlas
  const project = await Project.findOne({
    include: [Budget],
    where: {
      id: proyectid
    },
  })

  try {
    //verificamos si es del tipo Atlas o Estandar
    if (project.budget.tipo == "atlas") {

      const budgetLine = await BudgetLineAtlas.findOne({
        include: [Person],
        where: {
          project_id: proyectid,
          id
        },
      });
      res.json({
        budgetLine,
      });

    } else {

      const budgetLine = await BudgetLine.findOne({
        include: [Person],
        where: {
          project_id: proyectid,
          id
        },
      });
      res.json({
        budgetLine,
      })
    }

  } catch (error) {
    console.log("ERROR AL QUERE LISTAR One Budgetline:" + error);
  }
}

//Funcion par aeditar un renglon dado su proyectId y su Id unico
export async function updateBudgetLinesbyProjectIdAndBudgetId(req, res) {

  const { proyectid, id } = req.params;

  //obtenemos el proyecto para determinar si el presupuesto es de tipo atlas
  const project = await Project.findOne({
    include: [Budget],
    where: {
      id: proyectid
    },
  })

  const {
    code,
    description,
    date_start,
    date_end,
    category_id,
    sub_category_code,
    account_id,
    supplier_id,
    balance

  } = req.body;

  if (project.budget.tipo == "atlas") {
    try {
      const result = await BudgetlineAtlas.update({
        code,
        description,
        date_start,
        date_end,
        category_id,
        sub_category_code,
        account_id,
        supplier_id,
        balance
      }, {
        where: {
          project_id: proyectid,
          id
        },
      });

      if (result) {
        res.json({
          message: "REnglon Presupuestario Atlas Actualizado Satifactoriamente",
        });
      }
    } catch (erro) {
      console.log(erro);
      return res.json({
        message: "Something Wrong in Update",
        data: {},
      });
    }
  } else {
    try {
      const result = await Budgetline.update({
        code,
        description,
        date_start,
        date_end,
        category_id,
        sub_category_code,
        account_id,
        supplier_id,
        balance
      }, {
        where: {
          project_id: proyectid,
          id
        },
      });

      if (result) {
        res.json({
          message: "REnglon Presupuestario Estandar Actualizado Satifactoriamente",
        });
      }
    } catch (erro) {
      console.log(erro);
      return res.json({
        message: "Something Wrong in Update",
        data: {},
      });
    }
  }



}


//Funcion para obtener los diferentes id de las categorias de los budgetlines
//nos ayuda en generar los TableCost
export async function budgetLinesCatgoriesByProjectId(req, res) {
  const { id } = req.params;
  try {
    const budgetCategories = await Budgetline.findAll({
      attributes: [
        [sequelize.fn("DISTINCT", sequelize.col("category_id")), "category_id"],
      ],
      where: {
        project_id: id,
      },
    });
    res.json({
      budgetCategories,
    });
  } catch (error) {
    console.log("ERROR AL QUERE LISTAR BudgetlineCategories:" + error);
  }
}

//funcion para mostar los renglones presupuestarios clasificados por projectos y categorias
//ayuda a desplegar las tablas de renglones
export async function budgetLinesbyProjectIdCategories(req, res) {
  const { idPro, idCat } = req.params;
  try {
    const budgetLinesCat = await Budgetline.findAll({
      /* include: [
                { model: Category, where: { id: idCat }}
             ], */
      include: [Category, Person],
      // attributes: [sequelize.fn('DISTINCT', sequelize.col('category_id')), 'categorias'],
      //attributes: [['category_id','categoria'] ],

      order: [
        ["category_id", "ASC"]
      ],
      where: {
        project_id: idPro,
        category_id: idCat,
      },
    });
    res.json({
      budgetLinesCat,
    });
  } catch (error) {
    console.log("ERROR AL QUERE LISTAR Budgetline Category:" + error);
  }
}

//funion para crear nuevos renglones presupuestarios
export async function createBudgetLines(req, res) {
  const {
    code,
    name,
    description,
    date_start,
    date_end,
    category_id,
    sub_category_code,
    account_id,
    project_id,
    user_id,
    supplier_id,
    buddgetstart,
    buddgeupdate,
    buddgetfinal,
    balance,
    status,
    /*returns,
    deviation,
    approval,
    approvalby_id,
    dateapproval,*/
  } = req.body;
  try {
    let newBudgetLine = await Budgetline.create({
      code,
      name,
      description,
      date_start,
      date_end,
      category_id,
      sub_category_code,
      account_id,
      project_id,
      user_id,
      supplier_id,
      buddgetstart,
      buddgeupdate,
      buddgetfinal,
      balance,
      status,
      /*returns,
      deviation,
      approval,
      approvalby_id,
      dateapproval,*/
    }, {
      fields: [
        "code",
        "name",
        "description",
        "date_start",
        "date_end",
        "category_id",
        "sub_category_code",
        "account_id",
        "project_id",
        "user_id",
        "supplier_id",
        "buddgetstart",
        "buddgeupdate",
        "buddgetfinal",
        "balance",
        "status",
        /*"returns",
        "deviation",
        "approval",
        "approvalby_id",
        "dateapproval",*/
      ],
    });

    if (newBudgetLine) {
      //acutualizamos la base de datos , el balance y el budget star, ya que solo es soliictado
      try {
        //buscamos el projecto y el presupuesto al que pertenece este renglon.
        const project_budget = await Project.findOne({
          where: {
            id: project_id,
          },
          include: [Budget],
        });

        //obtenemos el presupuesto inicial y el balance actual de la base de datos
        const Budgetstart_old = project_budget.budget.buddgetstart;
        const balance_old = project_budget.budget.balance;

        //calculamos el nuevo balance y budgetstart
        const newBudgetStar =
          parseFloat(Budgetstart_old) + parseFloat(buddgetstart);
        const newBalance = parseFloat(balance_old) + parseFloat(balance);

        const result_update = await Budget.update({
          buddgetstart: newBudgetStar,
          balance: newBalance,
        }, {
          where: { id: project_budget.budget.id },
        });

        if (result_update) {
          res.json({
            message: "BudgetStarNEW Actualizado Satifactoriamente",
          });
        }
      } catch (erro) {
        console.log(erro);
        return res.json({
          message: "Something Wrong in Update BudgetLine",
          data: {},
        });
      }

      return res.json({
        message: "Renglon Presupuestario Creado Exitosamente",
        data: newBudgetLine,
      });
    } else {
      return res.json({
        message: "No se Pudo Crear el Nuevo Renglon Presupuestario",
        data: {},
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error al crear nuevo Renglon Presupuestario",
      data: {},
    });
  }
}

export async function AprobarBudgetLinesbyId(req, res) {
  let Nuevo_status = "";

  const { id, status, valor } = req.params;

  if (status != 0) {
    if (status == "1") {
      Nuevo_status = "Aprobado";
    }
    if (status == "2") {
      Nuevo_status = "No Aprobado";
    }

    try {
      const result = await Budgetline.update({
        status: Nuevo_status,
        balance: valor,
      }, {
        where: { id },
      });

      if (result) {
        res.json({
          message: "Actualizado Satifactoriamente",
        });
      }
    } catch (erro) {
      console.log(erro);
      return res.json({
        message: "Something Wrong in Update",
        data: {},
      });
    }
  }
}

//funcion para eliminar un budgetLine
export async function deleteBudgetLines(req, res) {
  const { id } = req.params;
  try {
    const deleteRowCount = await BudgetLine.destroy({
      where: {
        id,
      },
    });
    res.json({
      message: "BudgetLine Eliminado Satifactoriamente",
      count: deleteRowCount,
    });
  } catch (error) {
    console.log("ERROR AL QUERE ELIMINAR EL BudgetLine:" + error);
  }
}

/// CREACION DE RENGLON PPRESUPUESTARIO MODALIDAD ATLAS/////
//funion para crear nuevos renglones presupuestarios en la tabla budgetlines_atlas
export async function createBudgetLinesAtlas(req, res) {
  const {
    code_resultado,
    code_producto,
    code_activity,
    code_atlas,
    code_sub_atlas,
    code,
    details,
    date_start,
    date_end,
    account_id,
    project_id,
    user_id,
    supplier_id,
    budgetstart,
    budgeupdate,
    budgetfinal,
    balance,
    returns,
    deviation,
    status,
    approval,
    approvalby_id,
    dateapproval,
    comentario,
  } = req.body;
  try {
    let newBudgetLineAtlas = await BudgetLineAtlas.create({
      code_resultado,
      code_producto,
      code_activity,
      code_atlas,
      code_sub_atlas,
      code,
      details,
      date_start,
      date_end,
      account_id,
      project_id,
      user_id,
      supplier_id,
      budgetstart,
      budgeupdate,
      budgetfinal,
      balance,
      returns,
      deviation,
      status,
      approval,
      approvalby_id,
      dateapproval,
      comentario,
    }, {
      fields: [
        "code_resultado",
        "code_producto",
        "code_activity",
        "code_atlas",
        "code_sub_atlas",
        "code",
        "details",
        "date_start",
        "date_end",
        "account_id",
        "project_id",
        "user_id",
        "supplier_id",
        "budgetstart",
        "budgeupdate",
        "budgetfinal",
        "balance",
        "returns",
        "deviation",
        "status",
        "approval",
        "approvalby_id",
        "dateapproval",
        "comentario",
      ],
    });

    if (newBudgetLineAtlas) {
      //acutualizamos la base de datos , el balance y el budget star, ya que solo es soliictado
      try {
        //buscamos el projecto y el presupuesto al que pertenece este renglon.
        const project_budget = await Project.findOne({
          where: {
            id: project_id,
          },
          include: [Budget],
        });

        //obtenemos el presupuesto inicial y el balance actual de la base de datos
        const Budgetstart_old = project_budget.budget.budgetstart;
        const balance_old = project_budget.budget.balance;

        //calculamos el nuevo balance y budgetstart
        const newBudgetStar =
          parseFloat(Budgetstart_old) + parseFloat(budgetstart);
        const newBalance = parseFloat(balance_old) + parseFloat(balance);

        const result_update = await Budget.update({
          budgetstart: newBudgetStar,
          balance: newBalance,
        }, {
          where: { id: project_budget.budget.id },
        });

        if (result_update) {
          res.json({
            message: "BudgetStarNEW Atlas Creado Satifactoriamente",
          });
        }
      } catch (erro) {
        console.log(erro);
        return res.json({
          message: "Something Wrong in Update BudgetLine Atlas",
          data: {},
        });
      }

      return res.json({
        message: "Renglon Presupuestario Atlas Creado Exitosamente",
        data: newBudgetLine,
      });
    } else {
      return res.json({
        message: "No se Pudo Crear el Nuevo Renglon Presupuestario ATLAS",
        data: {},
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error al crar nuevo Renglon Presupuestario Atlas",
      data: {},
    });
  }
}

//funcion para obtener todos los renglones presupuestarios atlas de este projecto id
//nos ayuda a calcular los totales de presupuestos para las RowCardProjects
export async function budgetLinesAtlasbyProjectId(req, res) {
  const { id } = req.params;
  try {
    const budgetLines_atlas = await BudgetLineAtlas.findAll({
      include: [Person, AtlasAccount],
      order: [
        ["id", "DESC"]
      ],
      where: {
        project_id: id,
      },
    });
    res.json({
      budgetLines_atlas,
    });
  } catch (error) {
    console.log("ERROR AL QUERE LISTAR las Budgetline-Atlas:" + error);
  }
}

//Funcion para obtener los diferentes id de las categorias Atlas de los budgetlines
//nos ayuda en generar los TableCostAtlas
export async function budgetLinesAccountsAtlasByProjectId(req, res) {
  const { id } = req.params;
  try {
    const budgetAccountAtlas = await BudgetlineAtlas.findAll({

      attributes: [
        [sequelize.fn("DISTINCT", sequelize.col("code_atlas")), "code_atlas"],
      ],
      where: {
        project_id: id,
      },
    });
    res.json({
      budgetAccountAtlas,
    });
  } catch (error) {
    console.log("ERROR AL QUERE LISTAR BudgetlineCategories:" + error);
  }
}

//funcion para aprobar un budgetLineAtlas
export async function AprobarBudgetLinesAtlasbyId(req, res) {
  let Nuevo_status = "";

  const { id, status, valor, comentario } = req.params;

  if (status != 0) {
    if (status == "1") {
      Nuevo_status = "Aprobado";
    }
    if (status == "2") {
      Nuevo_status = "No Aprobado";
    }

    try {
      const result = await BudgetLineAtlas.update({
        status: Nuevo_status,
        budgetstart: valor,
        comentario: comentario,
      }, {
        where: { id },
      });

      if (result) {
        res.json({
          message: "Actualizado Satifactoriamente",
        });
      }
    } catch (erro) {
      console.log(erro);
      return res.json({
        message: "Something Wrong in Update",
        data: {},
      });
    }
  }
}

//funcion para eliminar un budgetLineAtlas
export async function deleteBudgetLinesAtlas(req, res) {
  const { id } = req.params;
  try {
    const deleteRowCount = await BudgetLineAtlas.destroy({
      where: {
        id,
      },
    });
    res.json({
      message: "BudgetLineAtlas Eliminado Satifactoriamente",
      count: deleteRowCount,
    });
  } catch (error) {
    console.log("ERROR AL QUERE ELIMINAR EL BudgetLineAtlas:" + error);
  }
}

/********INICIO DE REPORTS FUNCTIONS */
/************************************ */
export async function ReporteAtlasByProjectID(req, res) {

  const { id } = req.params; // obtenemos el id del proyecto
  try {
    const ArrayReportebyProject = await BudgetLineAtlas.findAll({

      attributes: ["code_atlas",

        [sequelize.fn("SUM", sequelize.col("balance")), "TOTAL"],
        [sequelize.fn("SUM", sequelize.col("budgetstart")), "inicial"]
      ],

      include: [{
        model: AtlasAccount,
        attributes: ["name", "code"]
      }],

      where: {
        project_id: id,
        status: "Aprobado"
      },

      group: ["budgetlines_atlas.code_atlas", "atlas_account.id"],

    });
    res.json({
      ArrayReportebyProject,
    });
  } catch (error) {
    console.log("ERROR AL QUERE LISTAR  Reporte_atlas_by_project:" + error);
  }

}

export async function budgets_by_projectid_and_atlasaccountid(req, res) {

  const { project_id, atlas_account_id, coin_id, year } = req.params; // obtenemos los valores enviados
  try {
    const ArrayReporteBudgetsByProjectIdByAccountId = await BudgetLineAtlas.findAll({

      include: [{
        model: AtlasAccount,
        attributes: ["name", "code"]
      }],

      where: {
        project_id: project_id,
        code_atlas: atlas_account_id,
        status: "Aprobado"
      },

      order: [
        ["id", "DESC"]
      ],

    });
    res.json({
      ArrayReporteBudgetsByProjectIdByAccountId,
    });
  } catch (error) {
    console.log("ERROR AL QUERE LISTAR  ArrayReporteBudgetsByProjectIdByAccountId:" + error);
  }

}

//reporte para obtener los codigos atlas desde los busgetsLines, filtrados por projectos y activities
export async function findAtlasAccountsByProjAct(req, res) {


  const { project_id, code_activity } = req.params; // obtenemos el id del proyecto y de activity
  try {

    const results = await sequelizeDb.query(
      "SELECT DISTINCT(budgetlines_atlas.code_atlas) AS code_atlas2, atlas_account.name AS name,  atlas_account.code AS code FROM budgetlines_atlas , atlas_accounts as atlas_account Where budgetlines_atlas.code_atlas = atlas_account.id  AND budgetlines_atlas.project_id = " + project_id + " AND budgetlines_atlas.status = 'Aprobado' AND budgetlines_atlas.code_activity = '" + code_activity + "'", { type: sequelize.QueryTypes.SELECT }
    )
    console.log("Result=" + results)
    res.json({
      results,
    });

    /*const atlasaccounts = await BudgetLineAtlas.findAll({

      attributes: [[sequelize["default"].fn('DISTINCT', sequelize["default"].col('budgetlines_atlas.code_atlas')), 'code_atlas2']],

      include: [{
        model: AtlasAccount,
        attributes: ["name", "code"]
      }],

      where: {
        project_id: project_id,
        status: "Aprobado",
        code_activity: code_activity
      }

    });
    res.json({
      atlasaccounts,
    });*/
  } catch (error) {
    console.log("ERROR AL QUERE LISTAR findAtlasAccountsByProjAct:" + error);
  }

}


/********FIN DE REPORTS FUNCTIONS */
/************************************ */


/* Reporte ATLAS semanal para las graficas del dashboard */
export async function GraficaAtlasByProjectID(req, res) {

  const { id } = req.params; // obtenemos el id del proyecto
  try {
    const ArrayGraficabyProject = await BudgetLineAtlas.findAll({

      attributes: [
        /*sequelize.fn('date_part', 'week', sequelize.col('date_start'))*/
        [sequelize.literal(`date_part('week', date_start)`), 'week'],
        [sequelize.fn("SUM", sequelize.col("balance")), "balance"],
      ],

      where: {
        project_id: id,
        status: "Aprobado"
      },

      /*group: [sequelize.fn('date_part', 'week', sequelize.col('date_start'))],*/
      /*order: sequelize.col("date_part('week', date_start)")*/
      group: ['week'],
      order: sequelize.col("week")

    });
    res.json({
      ArrayGraficabyProject,
    });
  } catch (error) {
    console.log("ERROR AL QUERE LISTAR  Grafica_atlas_by_project:" + error);
  }
}

/* Reporte NO ATLAS semanal para las graficas del dashboard */
export async function GraficaByProjectID(req, res) {

  const { id } = req.params; // obtenemos el id del proyecto
  try {
    const ArrayGraficabyProject = await BudgetLine.findAll({

      attributes: [
        /*sequelize.fn('date_part', 'week', sequelize.col('date_start'))*/
        [sequelize.literal(`date_part('week', date_start)`), 'week'],
        [sequelize.fn("SUM", sequelize.col("balance")), "balance"],
      ],

      where: {
        project_id: id,
        status: "Aprobado"
      },

      /*group: [sequelize.fn('date_part', 'week', sequelize.col('date_start'))],*/
      /*order: sequelize.col("date_part('week', date_start)")*/
      group: ['week'],
      order: sequelize.col("week")

    });
    res.json({
      ArrayGraficabyProject,
    });
  } catch (error) {
    console.log("ERROR AL QUERE LISTAR  Grafica_atlas_by_project:" + error);
  }

}