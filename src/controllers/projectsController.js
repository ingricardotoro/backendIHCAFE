import Project from "../models/Project";
import Budget from "../models/Budget";

export async function listProjects(req, res) {
  try {
    const projects = await Project.findAll({ include: [Budget] });
    res.json({
      projects,
    });
  } catch (error) {
    console.log("ERROR AL QUERE LISTAR PROJECTS:" + error);
  }
}

export async function findProject(req, res) {
  const { id } = req.params;
  try {
    const project = await Project.findOne({
      include: [Budget],
      where: {
        id,
      },
    });
    res.json({
      data: project,
    });
  } catch (error) {
    console.log("ERROR AL QUERE BUSCAR EL PROJECT:" + error);
  }
}

export async function findProjectsByBudgetId(req, res) {
  const { id } = req.params;
  try {
    const projectsbybudgetid = await Project.findAll({
      where: {
        budget_id: id,
      },
    });
    res.json({
      projectsbybudgetid: projectsbybudgetid,
    });
  } catch (error) {
    console.log("ERROR AL QUERE BUSCAR EL PROJECT BY BUDGETID:" + error);
  }
}

export async function deleteProject(req, res) {
  const { id } = req.params;
  try {
    const deleteRowCount = await Project.destroy({
      where: {
        id,
      },
    });
    res.json({
      message: "Projecto Eliminado Satifactoriamente",
      count: deleteRowCount,
    });
  } catch (error) {
    console.log("ERROR AL QUERE ELIMINAR EL PROJECT:" + error);
  }
}

export async function createProjects(req, res) {
  const {
    code,
    name,
    description,
    budgetstart,
    startdate,
    enddate,
    status,
    location,
    budget_id,
    team_id,
    priority,
  } = req.body;
  try {
    let newProject = await Project.create(
      {
        code,
        name,
        description,
        budgetstart,
        startdate,
        enddate,
        status,
        location,
        budget_id,
        team_id,
        priority,
      },
      {
        fields: [
          "code",
          "name",
          "description",
          "budgetstart",
          "startdate",
          "enddate",
          "status",
          "location",
          "budget_id",
          "team_id",
          "priority",
        ],
      }
    );

    if (newProject) {
      return res.json({
        message: "Projecto Creado Exitosamente",
        data: newProject,
      });
    } else {
      return res.json({
        message: "No se Pudo Crear newProject",
        data: {},
      });
    }
  } catch (error) {
    //console.log(error);
    res.status(500).json({
      message: "Error al crar nuevos projectos",
      data: {},
    });
  }
}

export async function updateProject(req, res) {
  const { id } = req.params;
  const {
    code,
    name,
    description,
    category_id,
    startdate,
    enddate,
    department_id,
    status,
    location,
    budget_id,
    team_id,
    priority,
    color,
  } = req.body;

  try {
    const result = await Project.update(
      {
        code,
        name,
        description,
        category_id,
        startdate,
        enddate,
        department_id,
        status,
        location,
        budget_id,
        team_id,
        priority,
        color,
      },
      {
        where: { id },
      }
    );

    if (result) {
      res.json({
        message: "Projecto Actualizado Satifactoriamente",
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
