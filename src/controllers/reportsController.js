//const pdf = require('html-pdf');
import pdfTemplate from '../templates/report'
import pdf from 'pdf-creator-node'
import fs from 'fs'


/* export async function createReports(req, res) {
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
} */

export async function reportepdf(req, res) {

    const html = fs.readFileSync(pdfTemplate, 'utf8');
    var options = {
        format: "A3",
        orientation: "portrait",
        border: "10mm",
        header: {
            height: "45mm",
            contents: '<div style="text-align: center;">Author: Shyam Hajare</div>'
        },
        "footer": {
            "height": "28mm",
            "contents": {
                first: 'Cover page',
                2: 'Second page', // Any page number is working. 1-based index
                default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
                last: 'Last Page'
            }
        }
    }
    pdf.create(document, options)
        .then(res => {
            console.log(res)
        })
        .catch(error => {
            console.error(error)
        });

}

