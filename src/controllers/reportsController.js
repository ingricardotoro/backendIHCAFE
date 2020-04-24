import pdf from 'html-pdf'
import pdfTemplate from '../templates/report'


export async function createReports(req, res) {
    console.log(req.data)
    pdf.create(pdfTemplate(req.data), {}).toFile('Reportes.pdf', (err) => {
        if (err) {
            return Promise.reject();
        }

        Promise.resolve();
    });
}

export async function fetchPdf(req, res) {
    res.sendFile('${__dirname}/Reportes.pdf')
}

