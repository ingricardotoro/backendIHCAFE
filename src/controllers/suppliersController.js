import Supplier from '../models/Supplier'

//codigo para obtener los RESULTADOS ATLAS , de codigo 0
export async function listSuppliers(req, res) {

    try {

        const suppliers = await Supplier.findAll()
        res.json({
            suppliers
        })

    } catch (error) {
        console.log("ERROR AL QUERE LISTAR los Beneficiarios o PROVEEDORES:" + error);
    }

}


export async function createSupplier(req, res) {

    const {
        company,
        phone1,
        contact_name,
        phone2,
        address,
        email
    } = req.body;

    try {
        let newSupplier = await Supplier.create(
            {
                company,
                phone1,
                contact_name,
                phone2,
                address,
                email
            },
            {
                fields: [
                    "company",
                    "phone1",
                    "contact_name",
                    "phone2",
                    "address",
                    "email"
                ],
            }
        );

        if (newSupplier) {
            return res.json({
                message: "newSupplier Creado Exitosamente",
                data: newSupplier,
            });
        } else {
            return res.json({
                message: "No se Pudo Crear newSupplier",
                data: {},
            });
        }

    } catch (error) {
        //console.log(error);
        res.status(500).json({
            message: "Error al crear newSupplier",
            data: {},
        });
    }
}

export async function deleteSupplier(req, res) {
    const { id } = req.params;
    try {
        const deleteRowCount = await Supplier.destroy({
            where: {
                id,
            },
        });
        res.json({
            message: "Supplier Eliminado Satifactoriamente",
            count: deleteRowCount,
        });
    } catch (error) {
        console.log("ERROR AL QUERE ELIMINAR Supplier:" + error);
    }
}
