import { Router } from 'express';
const router = Router();

import {
    createReports,
    fetchPdf,
    reportepdf,

    /**REPORTES ESTANDARS */

    /**FIN DE REPORTES ATLAS */


} from '../controllers/reportsController';
// rutas /api/reports
//router.post('/create-pdf', createReports);

//router.get('/fetch-pdf', fetchPdf);

router.get('/reportepdf', reportepdf);




/*router.get('/:id', findProject);
router.post('/findProjectsByBudgetId/:id', findProjectsByBudgetId);
router.delete('/:id', deleteProject);
router.put('/:id', updateProject);*/

export default router;
