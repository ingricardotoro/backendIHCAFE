const pdf = require('html-pdf');
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

export async function reportepdf(req, res) {

    const content = `
        <h1>Título en el PDF creado con el paquete html-pdf</h1>
        <p>Generando un PDF con un HTML sencillo</p>
        `;

    pdf.create(content).toFile('./html-pdf.pdf', function (err, res) {
        if (err) {
            console.log(err);
        } else {
            console.log(res);
        }
    });

}

