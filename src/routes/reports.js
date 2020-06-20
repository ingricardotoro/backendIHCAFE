import { Router } from 'express';
const router = Router();

import {
    createReports,
    fetchPdf,
    reportepdf,

    /**REPORTES ATLAS */
    budgets_by_projectid_and_atlasaccountid
    /**FIN DE REPORTES ATLAS */

    /**REPORTES ESTANDARS */

    /**FIN DE REPORTES ATLAS */


} from '../controllers/reportsController';
// rutas /api/reports
//router.post('/create-pdf', createReports);

//router.get('/fetch-pdf', fetchPdf);

router.get('/reportepdf', reportepdf);


/*Rutas de Reportes Atlas */
router.get('/budgets_by_projectid_and_atlasaccountid', budgets_by_projectid_and_atlasaccountid);





/*router.get('/:id', findProject);
router.post('/findProjectsByBudgetId/:id', findProjectsByBudgetId);
router.delete('/:id', deleteProject);
router.put('/:id', updateProject);*/

export default router;
