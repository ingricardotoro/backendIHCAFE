"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reportepdf = reportepdf;

var _pdfCreatorNode = _interopRequireDefault(require("pdf-creator-node"));

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
function reportepdf(_x, _x2) {
  return _reportepdf.apply(this, arguments);
}
/*****************REPORTES ATLAS*************************** */

/*********************************************************** */

/*****************REPORTES ESTANDARS*************************** */

/*********************************************************** */


function _reportepdf() {
  _reportepdf = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var html, options;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            html = _fs["default"].readFileSync('report.html', 'utf8');
            options = {
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
                  2: 'Second page',
                  // Any page number is working. 1-based index
                  "default": '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>',
                  // fallback value
                  last: 'Last Page'
                }
              }
            };

            _pdfCreatorNode["default"].create(document, options).then(function (res) {
              console.log(res);
            })["catch"](function (error) {
              console.error(error);
            });

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _reportepdf.apply(this, arguments);
}