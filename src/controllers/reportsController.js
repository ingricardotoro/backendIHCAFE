import pdf from 'html-pdf'
import pdfTemplate from '../templates/report'


export async function createReports(req, res) {
    console.log(req.body)
    pdf.create(pdfTemplate(req.body), {}).toFile('Reportes.pdf', (err) => {
        if (err) {
            res.send(Promise.reject());
        }

        res.send(Promise.resolve());
    });
}

export async function fetchPdf(req, res) {
    res.sendFile('${__dirname}/Reportes.pdf')
}

