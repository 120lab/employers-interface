const formidable = require('formidable'),
    http = require('http'),
    util = require('util');
const csv = require('csv-parser');
const fs = require('fs');
const Json2csvParser = require('json2csv').Parser;

var headersValid = false;
var dataValid = false;
var rowNumber = 0;
var validations = [];


const validationFields = ['action', 'rowNumber', 'colName', 'err'];


http.createServer(function (req, res) {
    if (req.url == '/upload' && req.method.toLowerCase() == 'post') {
        // parse a file upload
        var form = new formidable.IncomingForm();

        form.parse(req, function (err, fields, files) {

            fs.createReadStream(files.upload.path)
                .pipe(csv())

                .on('headers', function (headerList) {

                    validations = [];

                    if (headerList[0] != 'KOD-MEZAHE-KUPA-H-P') {
                        validations.push({ action: 'Read headers', colName: 'KOD-MEZAHE-KUPA-H-P', rowNumber: 0, err: 'KOD-MEZAHE-KUPA-H-P' + ' does not exist' });
                    }
                    if (headerList[1] != 'SUG-MAFKID') {
                        validations.push({ action: 'Read headers', colName: 'SUG-MAFKID', rowNumber: 0, err: 'SUG-MAFKID' + ' does not exist' });
                    }
                    if (headerList[2] != 'SUG-MEZAHE-MAASIK') {
                        validations.push({ action: 'Read headers', colName: 'SUG-MEZAHE-MAASIK', rowNumber: 0, err: 'SUG-MEZAHE-MAASIK' + ' does not exist' });
                    }
                    if (headerList[3] != 'MISPAR-ZIHUY-MAASIK') {
                        validations.push({ action: 'Read headers', colName: 'MISPAR-ZIHUY-MAASIK', rowNumber: 0, err: 'MISPAR-ZIHUY-MAASIK' + ' does not exist' });

                    }
                    if (headerList[4] != 'SCHUM-HAFKADA-KOLEL') {
                        validations.push({ action: 'Read headers', colName: 'SCHUM-HAFKADA-KOLEL', rowNumber: 0, err: 'SCHUM-HAFKADA-KOLEL' + ' does not exist' });
                    }
                    if (headerList[5] != 'SHEM-MAASIK') {
                        validations.push({ action: 'Read headers', colName: 'SHEM-MAASIK', rowNumber: 0, err: 'SHEM-MAASIK' + ' does not exist' });
                    }
                    if (headerList[6] != 'SUG-PEULA') {
                        validations.push({ action: 'Read headers', colName: 'SUG-PEULA', rowNumber: 0, err: 'SUG-PEULA' + ' does not exist' });
                    }
                    if (headerList[7] != 'KOD-EMTZAI-TASHLUM') {
                        validations.push({ action: 'Read headers', colName: 'KOD-EMTZAI-TASHLUM', rowNumber: 0, err: 'KOD-EMTZAI-TASHLUM' + ' does not exist' });
                    }
                    if (headerList[8] != 'SACH-HAFKADA-KUPA-H-P') {
                        validations.push({ action: 'Read headers', colName: 'SACH-HAFKADA-KUPA-H-P', rowNumber: 0, err: 'SACH-HAFKADA-KUPA-H-P' + ' does not exist' });
                    }
                    if (headerList[9] != 'TAARICH-ERECH-HAFKADA-LEKUPA') {
                        validations.push({ action: 'Read headers', colName: 'TAARICH-ERECH-HAFKADA-LEKUPA', rowNumber: 0, err: 'TAARICH-ERECH-HAFKADA-LEKUPA' + ' does not exist' });
                    }
                    if (headerList[10] != 'MISPAR-ASMACHTA-LEAHAVARAT-KSAFIM') {
                        validations.push({ action: 'Read headers', colName: 'MISPAR-ASMACHTA-LEAHAVARAT-KSAFIM', rowNumber: 0, err: 'MISPAR-ASMACHTA-LEAHAVARAT-KSAFIM' + ' does not exist' });
                    }
                    if (headerList[11] != 'MISPAR-ZIHUI') {
                        validations.push({ action: 'Read headers', colName: 'MISPAR-ZIHUI', rowNumber: 0, err: 'MISPAR-ZIHUI' + ' does not exist' });
                    }
                    if (headerList[12] != 'MISPAR-BANK-MAASIK') {
                        validations.push({ action: 'Read headers', colName: 'MISPAR-BANK-MAASIK', rowNumber: 0, err: 'MISPAR-BANK-MAASIK' + ' does not exist' });
                    }
                    if (headerList[13] != 'MISPAR-SNIF-MAASIK') {
                        validations.push({ action: 'Read headers', colName: 'MISPAR-SNIF-MAASIK', rowNumber: 0, err: 'MISPAR-SNIF-MAASIK' + ' does not exist' });
                    }
                    if (headerList[14] != 'MISPAR-CHESHBON-MAASIK') {
                        validations.push({ action: 'Read headers', colName: 'MISPAR-CHESHBON-MAASIK', rowNumber: 0, err: 'MISPAR-CHESHBON-MAASIK' + ' does not exist' });
                    }
                    if (headerList[15] != 'SUG-KARTIS-MAASIK') {
                        validations.push({ action: 'Read headers', colName: 'SUG-KARTIS-MAASIK', rowNumber: 0, err: 'SUG-KARTIS-MAASIK' + ' does not exist' });
                    }
                    if (headerList[16] != 'SUG-CHESHBON-MAASIK') {
                        validations.push({ action: 'Read headers', colName: 'SUG-CHESHBON-MAASIK', rowNumber: 0, err: 'SUG-CHESHBON-MAASIK' + ' does not exist' });
                    }
                    if (headerList[17] != 'SUG-CHESHBON-KOLET-TASHLUM') {
                        validations.push({ action: 'Read headers', colName: 'SUG-CHESHBON-KOLET-TASHLUM', rowNumber: 0, err: 'SUG-CHESHBON-KOLET-TASHLUM' + ' does not exist' });
                    }
                    if (headerList[18] != 'MISPAR-BANK-KOLET') {
                        validations.push({ action: 'Read headers', colName: 'MISPAR-BANK-KOLET', rowNumber: 0, err: 'MISPAR-BANK-KOLET' + ' does not exist' });
                    }
                    if (headerList[19] != 'MISPAR-SNIF-KOLET') {
                        validations.push({ action: 'Read headers', colName: 'MISPAR-SNIF-KOLET', rowNumber: 0, err: 'MISPAR-SNIF-KOLET' + ' does not exist' });
                    }
                    if (headerList[20] != 'MISPAR-CHESHBON-KOLET') {
                        validations.push({ action: 'Read headers', colName: 'MISPAR-CHESHBON-KOLET', rowNumber: 0, err: 'MISPAR-CHESHBON-KOLET' + ' does not exist' });
                    }
                    if (headerList[21] != 'MISPAR-ZIHUI-KODEM') {
                        validations.push({ action: 'Read headers', colName: 'MISPAR-ZIHUI-KODEM', rowNumber: 0, err: 'MISPAR-ZIHUI-KODEM' + ' does not exist' });
                    }
                    if (headerList[22] != 'MISPAR-MISLAKA-KODEM') {
                        validations.push({ action: 'Read headers', colName: 'MISPAR-MISLAKA-KODEM', rowNumber: 0, err: 'MISPAR-MISLAKA-KODEM' + ' does not exist' });
                    }
                    if (headerList[23] != 'SHEM-KOVETZ-SHEL-MISMACH-BERAMAT-EIRUA-VEBERAMAT-LAKOACH') {
                        validations.push({ action: 'Read headers', colName: 'SHEM-KOVETZ-SHEL-MISMACH-BERAMAT-EIRUA-VEBERAMAT-LAKOACH', rowNumber: 0, err: 'SHEM-KOVETZ-SHEL-MISMACH-BERAMAT-EIRUA-VEBERAMAT-LAKOACH' + ' does not exist' });
                    }
                    if (headerList[24] != 'SUG-MISMACH') {
                        validations.push({ action: 'Read headers', colName: 'SUG-MISMACH', rowNumber: 0, err: 'SUG-MISMACH' + ' does not exist' });
                    }
                    if (headerList[25] != 'SUG-KUPA') {
                        validations.push({ action: 'Read headers', colName: 'SUG-KUPA', rowNumber: 0, err: 'SUG-KUPA' + ' does not exist' });
                    }
                    if (headerList[26] != 'SUG-MEZAHE-OVED') {
                        validations.push({ action: 'Read headers', colName: 'SUG-MEZAHE-OVED', rowNumber: 0, err: 'SUG-MEZAHE-OVED' + ' does not exist' });
                    }
                    if (headerList[27] != 'MISPAR-MEZAHE') {
                        validations.push({ action: 'Read headers', colName: 'MISPAR-MEZAHE', rowNumber: 0, err: 'MISPAR-MEZAHE' + ' does not exist' });
                    }
                    if (headerList[28] != 'SHEM-PRATI') {
                        validations.push({ action: 'Read headers', colName: 'SHEM-PRATI', rowNumber: 0, err: 'SHEM-PRATI' + ' does not exist' });
                    }
                    if (headerList[29] != 'SHEM-MISHPACHA') {
                        validations.push({ action: 'Read headers', colName: 'SHEM-MISHPACHA', rowNumber: 0, err: 'SHEM-MISHPACHA' + ' does not exist' });
                    }
                    if (headerList[30] != 'CHODESH-MASKORET') {
                        validations.push({ action: 'Read headers', colName: 'CHODESH-MASKORET', rowNumber: 0, err: 'CHODESH-MASKORET' + ' does not exist' });
                    }
                    if (headerList[31] != 'MAHAMAD-HAFKADA-BEKUPA') {
                        validations.push({ action: 'Read headers', colName: 'MAHAMAD-HAFKADA-BEKUPA', rowNumber: 0, err: 'MAHAMAD-HAFKADA-BEKUPA' + ' does not exist' });
                    }
                    if (headerList[32] != 'SUG-TAKBUL') {
                        validations.push({ action: 'Read headers', colName: 'SUG-TAKBUL', rowNumber: 0, err: 'SUG-TAKBUL' + ' does not exist' });
                    }
                    if (headerList[33] != 'SACHAR-MEDUVACH') {
                        validations.push({ action: 'Read headers', colName: 'SACHAR-MEDUVACH', rowNumber: 0, err: 'SACHAR-MEDUVACH' + ' does not exist' });
                    }
                    if (headerList[34] != 'STATUS-OVED-BECHODESH-MASKORET') {
                        validations.push({ action: 'Read headers', colName: 'STATUS-OVED-BECHODESH-MASKORET', rowNumber: 0, err: 'STATUS-OVED-BECHODESH-MASKORET' + ' does not exist' });
                    }
                    if (headerList[35] != 'TAARICH-TCHILAT-STATUS') {
                        validations.push({ action: 'Read headers', colName: 'TAARICH-TCHILAT-STATUS', rowNumber: 0, err: 'TAARICH-TCHILAT-STATUS' + ' does not exist' });
                    }
                    if (headerList[36] != 'CHELKIUT-MISRA') {
                        validations.push({ action: 'Read headers', colName: 'CHELKIUT-MISRA', rowNumber: 0, err: 'CHELKIUT-MISRA' + ' does not exist' });
                    }
                    if (headerList[37] != 'YEMEI-AVODA-BECHODESH') {
                        validations.push({ action: 'Read headers', colName: 'YEMEI-AVODA-BECHODESH', rowNumber: 0, err: 'YEMEI-AVODA-BECHODESH' + ' does not exist' });
                    }
                    if (headerList[38] != 'SUG-HAFRASHA-A') {
                        validations.push({ action: 'Read headers', colName: 'SUG-HAFRASHA-A', rowNumber: 0, err: 'SUG-HAFRASHA-A' + ' does not exist' });
                    }
                    if (headerList[39] != 'SHIUR-HAFRASHA-A') {
                        validations.push({ action: 'Read headers', colName: 'SHIUR-HAFRASHA-A', rowNumber: 0, err: 'SHIUR-HAFRASHA-A' + ' does not exist' });
                    }
                    if (headerList[40] != 'SCHUM-HAFRASHA-A') {
                        validations.push({ action: 'Read headers', colName: 'SCHUM-HAFRASHA-A', rowNumber: 0, err: 'SCHUM-HAFRASHA-A' + ' does not exist' });
                    }
                    if (headerList[41] != 'SACH-TASHLUMIM-PTURIM-A') {
                        validations.push({ action: 'Read headers', colName: 'SACH-TASHLUMIM-PTURIM-A', rowNumber: 0, err: 'SACH-TASHLUMIM-PTURIM-A' + ' does not exist' });
                    }
                    if (headerList[42] != 'MISPAR-MEZAHE-RESHUMA-A') {
                        validations.push({ action: 'Read headers', colName: 'MISPAR-MEZAHE-RESHUMA-A', rowNumber: 0, err: 'MISPAR-MEZAHE-RESHUMA-A' + ' does not exist' });
                    }
                    if (headerList[43] != 'SUG-HAFRASHA-B') {
                        validations.push({ action: 'Read headers', colName: 'SUG-HAFRASHA-B', rowNumber: 0, err: 'SUG-HAFRASHA-B' + ' does not exist' });
                    }
                    if (headerList[44] != 'SHIUR-HAFRASHA-B') {
                        validations.push({ action: 'Read headers', colName: 'SHIUR-HAFRASHA-B', rowNumber: 0, err: 'SHIUR-HAFRASHA-B' + ' does not exist' });
                    }
                    if (headerList[45] != 'SCHUM-HAFRASHA-B') {
                        validations.push({ action: 'Read headers', colName: 'SCHUM-HAFRASHA-B', rowNumber: 0, err: 'SCHUM-HAFRASHA-B' + ' does not exist' });
                    }
                    if (headerList[46] != 'SACH-TASHLUMIM-PTURIM-B') {
                        validations.push({ action: 'Read headers', colName: 'SACH-TASHLUMIM-PTURIM-B', rowNumber: 0, err: 'SACH-TASHLUMIM-PTURIM-B' + ' does not exist' });
                    }
                    if (headerList[47] != 'MISPAR-MEZAHE-RESHUMA-B') {
                        validations.push({ action: 'Read headers', colName: 'MISPAR-MEZAHE-RESHUMA-B', rowNumber: 0, err: 'MISPAR-MEZAHE-RESHUMA-B' + ' does not exist' });
                    }
                    if (headerList[48] != 'SUG-HAFRASHA-C') {
                        validations.push({ action: 'Read headers', colName: 'SUG-HAFRASHA-C', rowNumber: 0, err: 'SUG-HAFRASHA-C' + ' does not exist' });
                    }
                    if (headerList[49] != 'SHIUR-HAFRASHA-C') {
                        validations.push({ action: 'Read headers', colName: 'SHIUR-HAFRASHA-C', rowNumber: 0, err: 'SHIUR-HAFRASHA-C' + ' does not exist' });
                    }
                    if (headerList[50] != 'SCHUM-HAFRASHA-C') {
                        validations.push({ action: 'Read headers', colName: 'SCHUM-HAFRASHA-C', rowNumber: 0, err: 'SCHUM-HAFRASHA-C' + ' does not exist' });
                    }
                    if (headerList[51] != 'SACH-TASHLUMIM-PTURIM-C') {
                        validations.push({ action: 'Read headers', colName: 'SACH-TASHLUMIM-PTURIM-C', rowNumber: 0, err: 'SACH-TASHLUMIM-PTURIM-C' + ' does not exist' });
                    }
                    if (headerList[52] != 'MISPAR-MEZAHE-RESHUMA-C') {
                        validations.push({ action: 'Read headers', colName: 'MISPAR-MEZAHE-RESHUMA-C ]', rowNumber: 0, err: 'MISPAR-MEZAHE-RESHUMA-C ]' + ' does not exist' });
                    }

                    if (validations.length == 0)
                        headersValid = true;
                })
                .on('data', function (data) {
                    if (!headersValid) {
                        validations.push({ action: 'File headers check', colName: '', rowNumber: 0, err: 'File headers Invalid' });
                        return;
                    }
                    else if (rowNumber == 0) {
                        validations.push({ action: 'File headers check', colName: '', rowNumber: 0, err: 'File headers valid' });
                    }

                    rowNumber++;


                    if (data['KOD-MEZAHE-KUPA-H-P'].length > 30) {
                        validations.push({ action: 'Read headers', colName: 'KOD-MEZAHE-KUPA-H-P', rowNumber: rowNumber, err: 'KOD-MEZAHE-KUPA-H-P' + ' length > 30' });

                    }
                    if (data['SUG-MAFKID'] != 1 && data['SUG-MAFKID'] != 2) {
                        validations.push({ action: 'Read headers', colName: 'SUG-MAFKID', rowNumber: rowNumber, err: 'SUG-MAFKID' + ' 1,2' });
                    }
                    if (data['SUG-MEZAHE-MAASIK'] != 1 && data['SUG-MEZAHE-MAASIK'] != 2 && data['SUG-MEZAHE-MAASIK'] != 3 && data['SUG-MEZAHE-MAASIK'] != 4 && data['SUG-MEZAHE-MAASIK'] != 5
                        && data['SUG-MEZAHE-MAASIK'] != 7 && data['SUG-MEZAHE-MAASIK'] != 8 && data['SUG-MEZAHE-MAASIK'] != 9 && data['SUG-MEZAHE-MAASIK'] != 10 && data['SUG-MEZAHE-MAASIK'] != 11
                        && data['SUG-MEZAHE-MAASIK'] != 12 && data['SUG-MEZAHE-MAASIK'] != 13) {
                        validations.push({ action: 'Read headers', colName: 'SUG-MEZAHE-MAASIK', rowNumber: rowNumber, err: 'SUG-MEZAHE-MAASIK' + ' values 1,2,3,4,5,7,8,9,10,11,12,13' });
                    }
                    if (data['MISPAR-ZIHUY-MAASIK'].length > 16) {
                        validations.push({ action: 'Read headers', colName: 'MISPAR-ZIHUY-MAASIK', rowNumber: rowNumber, err: 'MISPAR-ZIHUY-MAASIK' + ' length > 16' });
                    }
                    if (Number.isFinite(data['SCHUM-HAFKADA-KOLEL'])) {
                        validations.push({ action: 'Read headers', colName: 'SCHUM-HAFKADA-KOLEL', rowNumber: rowNumber, err: 'SCHUM-HAFKADA-KOLEL' + ' value decimal 15.2' });
                    }
                    if (data['SHEM-MAASIK'].length > 100) {
                        validations.push({ action: 'Read headers', colName: 'SHEM-MAASIK', rowNumber: rowNumber, err: 'SHEM-MAASIK' + ' length > 100' });
                    }
                    if (data['SUG-PEULA'] != 1 && data['SUG-PEULA'] != 2 && data['SUG-PEULA'] != 3) {
                        validations.push({ action: 'Read headers', colName: 'SUG-PEULA', rowNumber: rowNumber, err: 'SUG-PEULA' + ' values = 1,2,3' });
                    }
                    if (data['KOD-EMTZAI-TASHLUM'] != 1 && data['KOD-EMTZAI-TASHLUM'] != 2 && data['KOD-EMTZAI-TASHLUM'] != 3 && data['KOD-EMTZAI-TASHLUM'] != 4
                        && data['KOD-EMTZAI-TASHLUM'] != 5 && data['KOD-EMTZAI-TASHLUM'] != 6 && data['KOD-EMTZAI-TASHLUM'] != 7) {
                        validations.push({ action: 'Read headers', colName: 'KOD-EMTZAI-TASHLUM', rowNumber: rowNumber, err: 'KOD-EMTZAI-TASHLUM' + ' values = 1,2,3,4,5,6,7' });
                    }
                    if (Number.isFinite(data['SACH-HAFKADA-KUPA-H-P'])) {
                        validations.push({ action: 'Read headers', colName: 'SACH-HAFKADA-KUPA-H-P', rowNumber: rowNumber, err: 'SACH-HAFKADA-KUPA-H-P' + ' value decimal 15.2' });
                    }
                    if (data['TAARICH-ERECH-HAFKADA-LEKUPA'].length > 8) {
                        validations.push({ action: 'Read headers', colName: 'TAARICH-ERECH-HAFKADA-LEKUPA', rowNumber: rowNumber, err: 'TAARICH-ERECH-HAFKADA-LEKUPA' + ' length > 8' });
                    }
                    if (data['MISPAR-ASMACHTA-LEAHAVARAT-KSAFIM'].length > 50) {
                        validations.push({ action: 'Read headers', colName: 'MISPAR-ASMACHTA-LEAHAVARAT-KSAFIM', rowNumber: rowNumber, err: 'MISPAR-ASMACHTA-LEAHAVARAT-KSAFIM' + ' length > 50' });
                    }
                    if (data['MISPAR-ZIHUI'].length > 36) {
                        validations.push({ action: 'Read headers', colName: 'MISPAR-ZIHUI', rowNumber: rowNumber, err: 'MISPAR-ZIHUI' + ' length > 36' });
                    }
                    if (data['MISPAR-BANK-MAASIK'].length > 3) {
                        validations.push({ action: 'Read headers', colName: 'MISPAR-BANK-MAASIK', rowNumber: rowNumber, err: 'MISPAR-BANK-MAASIK' + ' length > 3' });
                    }
                    if (data['MISPAR-SNIF-MAASIK'].length > 3) {
                        validations.push({ action: 'Read headers', colName: 'MISPAR-SNIF-MAASIK', rowNumber: rowNumber, err: 'MISPAR-SNIF-MAASIK' + ' length > 3' });
                    }
                    if (data['MISPAR-CHESHBON-MAASIK'].length > 20) {
                        validations.push({ action: 'Read headers', colName: 'MISPAR-CHESHBON-MAASIK', rowNumber: rowNumber, err: 'MISPAR-CHESHBON-MAASIK' + ' length > 20' });
                    }
                    if (data['SUG-KARTIS-MAASIK'] != 1 && data['SUG-KARTIS-MAASIK'] != 2 && data['SUG-KARTIS-MAASIK'] != 3 && data['SUG-KARTIS-MAASIK'] != 4 && data['SUG-KARTIS-MAASIK'] != 5) {
                        validations.push({ action: 'Read headers', colName: 'SUG-KARTIS-MAASIK', rowNumber: rowNumber, err: 'SUG-KARTIS-MAASIK' + ' value = 1,2,3,4,5' });
                    }
                    if (data['SUG-CHESHBON-MAASIK'] != 1 && data['SUG-CHESHBON-MAASIK'] != 2) {
                        validations.push({ action: 'Read headers', colName: 'SUG-CHESHBON-MAASIK', rowNumber: rowNumber, err: 'SUG-CHESHBON-MAASIK' + ' value = 1,2' });
                    }
                    if (data['SUG-CHESHBON-KOLET-TASHLUM'] != 1 && data['SUG-CHESHBON-KOLET-TASHLUM'] != 2) {
                        validations.push({ action: 'Read headers', colName: 'SUG-CHESHBON-KOLET-TASHLUM', rowNumber: rowNumber, err: 'SUG-CHESHBON-KOLET-TASHLUM' + ' value = 1,2' });
                    }
                    if (data['MISPAR-BANK-KOLET'].length > 3) {
                        validations.push({ action: 'Read headers', colName: 'MISPAR-BANK-KOLET', rowNumber: rowNumber, err: 'MISPAR-BANK-KOLET' + ' length > 3' });
                    }
                    if (data['MISPAR-SNIF-KOLET'].length > 3) {
                        validations.push({ action: 'Read headers', colName: 'MISPAR-SNIF-KOLET', rowNumber: rowNumber, err: 'MISPAR-SNIF-KOLET' + ' length > 3' });
                    }
                    if (data['MISPAR-CHESHBON-KOLET'].length > 20) {
                        validations.push({ action: 'Read headers', colName: 'MISPAR-CHESHBON-KOLET', rowNumber: rowNumber, err: 'MISPAR-CHESHBON-KOLET' + ' length > 20' });
                    }
                    if (data['MISPAR-ZIHUI-KODEM'].length > 36) {
                        validations.push({ action: 'Read headers', colName: 'MISPAR-ZIHUI-KODEM', rowNumber: rowNumber, err: 'MISPAR-ZIHUI-KODEM' + ' length > 36' });
                    }
                    if (data['MISPAR-MISLAKA-KODEM'].length > 36) {
                        validations.push({ action: 'Read headers', colName: 'MISPAR-MISLAKA-KODEM', rowNumber: rowNumber, err: 'MISPAR-MISLAKA-KODEM' + ' length > 36' });
                    }
                    if (data['SHEM-KOVETZ-SHEL-MISMACH-BERAMAT-EIRUA-VEBERAMAT-LAKOACH'].length > 100) {
                        validations.push({ action: 'Read headers', colName: 'SHEM-KOVETZ-SHEL-MISMACH-BERAMAT-EIRUA-VEBERAMAT-LAKOACH', rowNumber: rowNumber, err: 'SHEM-KOVETZ-SHEL-MISMACH-BERAMAT-EIRUA-VEBERAMAT-LAKOACH' + ' length > 100' });
                    }
                    if (data['SUG-MISMACH'] != 3) {
                        validations.push({ action: 'Read headers', colName: 'SUG-MISMACH', rowNumber: rowNumber, err: 'SUG-MISMACH' + ' value = 3' });
                    }
                    if (data['SUG-KUPA'] != 1 && data['SUG-KUPA'] != 2 && data['SUG-KUPA'] != 3 && data['SUG-KUPA'] != 4) {
                        validations.push({ action: 'Read headers', colName: 'SUG-KUPA', rowNumber: rowNumber, err: 'SUG-KUPA' + ' value = 1,2,3,4' });
                    }
                    if (data['SUG-MEZAHE-OVED'] != 1 && data['SUG-MEZAHE-OVED'] != 2) {
                        validations.push({ action: 'Read headers', colName: 'SUG-MEZAHE-OVED', rowNumber: rowNumber, err: 'SUG-MEZAHE-OVED' + ' value = 1,2' });
                    }
                    if (data['MISPAR-MEZAHE'].length > 16) {
                        validations.push({ action: 'Read headers', colName: 'MISPAR-MEZAHE', rowNumber: rowNumber, err: 'MISPAR-MEZAHE' + ' length >16' });
                    }
                    if (data['SHEM-PRATI'].length > 20) {
                        validations.push({ action: 'Read headers', colName: 'SHEM-PRATI', rowNumber: rowNumber, err: 'SHEM-PRATI' + ' length >20' });
                    }
                    if (data['SHEM-MISHPACHA'].length > 20) {
                        validations.push({ action: 'Read headers', colName: 'SHEM-MISHPACHA', rowNumber: rowNumber, err: 'SHEM-MISHPACHA' + ' length >20' });
                    }
                    if (data['CHODESH-MASKORET'].length > 6) {
                        validations.push({ action: 'Read headers', colName: 'CHODESH-MASKORET', rowNumber: rowNumber, err: 'CHODESH-MASKORET' + ' length >6' });
                    }
                    if (data['MAHAMAD-HAFKADA-BEKUPA'] != 1 && data['MAHAMAD-HAFKADA-BEKUPA'] != 2 && data['MAHAMAD-HAFKADA-BEKUPA'] != 3) {
                        validations.push({ action: 'Read headers', colName: 'MAHAMAD-HAFKADA-BEKUPA', rowNumber: rowNumber, err: 'MAHAMAD-HAFKADA-BEKUPA' + ' value = 1,2,3' });
                    }
                    if (data['SUG-TAKBUL'] != 1 && data['SUG-TAKBUL'] != 2 && data['SUG-TAKBUL'] != 3 && data['SUG-TAKBUL'] != 4 && data['SUG-TAKBUL'] != 5) {
                        validations.push({ action: 'Read headers', colName: 'SUG-TAKBUL', rowNumber: rowNumber, err: 'SUG-TAKBUL' + ' value = 1,2,3,4,5' });
                    }
                    if (Number.isFinite(data['SACHAR-MEDUVACH'])) {
                        validations.push({ action: 'Read headers', colName: 'SACHAR-MEDUVACH', rowNumber: rowNumber, err: 'SACHAR-MEDUVACH' + ' value decimal 15.2' });
                    }
                    if (data['STATUS-OVED-BECHODESH-MASKORET'] != 1 && data['STATUS-OVED-BECHODESH-MASKORET'] != 2
                        && data['STATUS-OVED-BECHODESH-MASKORET'] != 3 && data['STATUS-OVED-BECHODESH-MASKORET'] != 4
                        && data['STATUS-OVED-BECHODESH-MASKORET'] != 5 && data['STATUS-OVED-BECHODESH-MASKORET'] != 6
                        && data['STATUS-OVED-BECHODESH-MASKORET'] != 8 && data['STATUS-OVED-BECHODESH-MASKORET'] != 9
                        && data['STATUS-OVED-BECHODESH-MASKORET'] != 10 && data['STATUS-OVED-BECHODESH-MASKORET'] != 11
                        && data['STATUS-OVED-BECHODESH-MASKORET'] != 12 && data['STATUS-OVED-BECHODESH-MASKORET'] != 13
                        && data['STATUS-OVED-BECHODESH-MASKORET'] != 14) {
                        validations.push({ action: 'Read headers', colName: 'STATUS-OVED-BECHODESH-MASKORET', rowNumber: rowNumber, err: 'STATUS-OVED-BECHODESH-MASKORET' + ' value = 1,2,3,4,5,6,8,9,10,11,12,13,14' });
                    }
                    if (data['TAARICH-TCHILAT-STATUS'].length > 8) {
                        validations.push({ action: 'Read headers', colName: 'TAARICH-TCHILAT-STATUS', rowNumber: rowNumber, err: 'TAARICH-TCHILAT-STATUS' + ' length >8' });
                    }
                    if (Number.isFinite(data['CHELKIUT-MISRA'])) {
                        validations.push({ action: 'Read headers', colName: 'CHELKIUT-MISRA', rowNumber: rowNumber, err: 'CHELKIUT-MISRA' + ' decimal value 5.2' });
                    }
                    if (Number.isFinite(data['YEMEI-AVODA-BECHODESH'])) {
                        validations.push({ action: 'Read headers', colName: 'YEMEI-AVODA-BECHODESH', rowNumber: rowNumber, err: 'YEMEI-AVODA-BECHODESH' + ' length >31' });
                    }
                    if (data['SUG-HAFRASHA-A'] != 1 && data['SUG-HAFRASHA-A'] != 2 && data['SUG-HAFRASHA-A'] != 3 && data['SUG-HAFRASHA-A'] != 4 && data['SUG-HAFRASHA-A'] != 5 && data['SUG-HAFRASHA-A'] != 6 && data['SUG-HAFRASHA-A'] != 7 && data['SUG-HAFRASHA-A'] != 8) {
                        validations.push({ action: 'Read headers', colName: 'SUG-HAFRASHA-A', rowNumber: rowNumber, err: 'SUG-HAFRASHA-A' + ' value = 1,2,3,4,5,6,7,8' });
                    }
                    if (Number.isFinite(data['SHIUR-HAFRASHA-A'])) {
                        validations.push({ action: 'Read headers', colName: 'SHIUR-HAFRASHA-A', rowNumber: rowNumber, err: 'SHIUR-HAFRASHA-A' + ' decimal value 4.2' });
                    }
                    if (Number.isFinite(data['SCHUM-HAFRASHA-A'])) {
                        validations.push({ action: 'Read headers', colName: 'SCHUM-HAFRASHA-A', rowNumber: rowNumber, err: 'SCHUM-HAFRASHA-A' + ' decimal value 15.2' });
                    }
                    if (Number.isFinite(data['SACH-TASHLUMIM-PTURIM-A'])) {
                        validations.push({ action: 'Read headers', colName: 'SACH-TASHLUMIM-PTURIM-A', rowNumber: rowNumber, err: 'SACH-TASHLUMIM-PTURIM-A' + ' decimal value 15.2' });
                    }
                    if (data['MISPAR-MEZAHE-RESHUMA-A'].length > 36) {
                        validations.push({ action: 'Read headers', colName: 'MISPAR-MEZAHE-RESHUMA-A', rowNumber: rowNumber, err: 'MISPAR-MEZAHE-RESHUMA-A' + ' length >36' });
                    }
                    if (data['SUG-HAFRASHA-B'] != 1 && data['SUG-HAFRASHA-B'] != 2 && data['SUG-HAFRASHA-B'] != 3 && data['SUG-HAFRASHA-B'] != 4 && data['SUG-HAFRASHA-B'] != 5 && data['SUG-HAFRASHA-B'] != 6 && data['SUG-HAFRASHA-B'] != 7 && data['SUG-HAFRASHA-B'] != 8) {
                        validations.push({ action: 'Read headers', colName: 'SUG-HAFRASHA-B', rowNumber: rowNumber, err: 'SUG-HAFRASHA-B' + ' value = 1,2,3,4,5,6,7,8' });
                    }
                    if (Number.isFinite(data['SHIUR-HAFRASHA-B'])) {
                        validations.push({ action: 'Read headers', colName: 'SHIUR-HAFRASHA-B', rowNumber: rowNumber, err: 'SHIUR-HAFRASHA-B' + ' decimal value 4.2' });
                    }
                    if (Number.isFinite(data['SCHUM-HAFRASHA-B'])) {
                        validations.push({ action: 'Read headers', colName: 'SCHUM-HAFRASHA-B', rowNumber: rowNumber, err: 'SCHUM-HAFRASHA-B' + ' decimal value 15.2' });
                    }
                    if (Number.isFinite(data['SACH-TASHLUMIM-PTURIM-B'])) {
                        validations.push({ action: 'Read headers', colName: 'SACH-TASHLUMIM-PTURIM-B', rowNumber: rowNumber, err: 'SACH-TASHLUMIM-PTURIM-B' + ' decimal value 15.2' });
                    }
                    if (data['MISPAR-MEZAHE-RESHUMA-B'].length > 36) {
                        validations.push({ action: 'Read headers', colName: 'MISPAR-MEZAHE-RESHUMA-B', rowNumber: rowNumber, err: 'MISPAR-MEZAHE-RESHUMA-B' + ' length >36' });
                    }
                    if (data['SUG-HAFRASHA-C'] != 1 && data['SUG-HAFRASHA-C'] != 2 && data['SUG-HAFRASHA-C'] != 3 && data['SUG-HAFRASHA-C'] != 4 && data['SUG-HAFRASHA-C'] != 5 && data['SUG-HAFRASHA-C'] != 6 && data['SUG-HAFRASHA-C'] != 7 && data['SUG-HAFRASHA-C'] != 8) {
                        validations.push({ action: 'Read headers', colName: 'SUG-HAFRASHA-C', rowNumber: rowNumber, err: 'SUG-HAFRASHA-C' + ' value = 1,2,3,4,5,6,7,8' });
                    }
                    if (Number.isFinite(data['SHIUR-HAFRASHA-C'])) {
                        validations.push({ action: 'Read headers', colName: 'SHIUR-HAFRASHA-C', rowNumber: rowNumber, err: 'SHIUR-HAFRASHA-C' + ' decimal value 4.2' });
                    }
                    if (Number.isFinite(data['SCHUM-HAFRASHA-C'])) {
                        validations.push({ action: 'Read headers', colName: 'SCHUM-HAFRASHA-C', rowNumber: rowNumber, err: 'SCHUM-HAFRASHA-C' + ' decimal value 15.2' });
                    }
                    if (Number.isFinite(data['SACH-TASHLUMIM-PTURIM-C'])) {
                        validations.push({ action: 'Read headers', colName: 'SACH-TASHLUMIM-PTURIM-C', rowNumber: rowNumber, err: 'SACH-TASHLUMIM-PTURIM-C' + ' decimal value 15.2' });
                    }
                    if (data['MISPAR-MEZAHE-RESHUMA-C'].length > 36) {
                        validations.push({ action: 'Read headers', colName: 'MISPAR-MEZAHE-RESHUMA-C ]', rowNumber: rowNumber, err: 'MISPAR-MEZAHE-RESHUMA-C ]' + ' length >36' });
                    }

                    if (validations.length == 1)
                        dataValid = true;
                })
                .on('end', function () {
                    //console.log(validations);

                    if (!dataValid) {
                        validations.push({ action: 'File data check', colName: '', rowNumber: 0, err: 'File data Invalid' });                        
                    }
                    else  {
                        validations.push({ action: 'File data check', colName: '', rowNumber: 0, err: 'File data valid' });
                    }


                    const json2csvParser = new Json2csvParser({ validationFields });
                    const csv = json2csvParser.parse(validations);
                    const resultFileName = "result_" + files.upload.name;

                    fs.writeFile(files.upload.path, 'data:text/csv;charset=utf-8,' + csv, (err) => {
                        if (err) throw err;
                        res.writeHead(200, { 'content-type': 'text/html' });
                        res.end(
                            '<html><head>' +
                            '</head>' +
                            '<body>' +
                            '<div style="height: 100vh;width: 100vw;display: flex;justify-content: center;align-items: center">' +
                            '<a href="' + encodeURI('data:text/csv;charset=utf-8,' + csv) + '" download="' + resultFileName + '">Download validation file</a>' +
                            '</div>' +
                            '</body>' +
                            '</html>'
                        );
                    });
                    // res.writeHead(200, { 'content-type': 'text/plain' });
                    // res.write(JSON.stringify(validations));
                    // res.end(util.inspect({ fields: fields, files: files }));
                })
        });



        return;
    }

    // show a file upload form    
    res.writeHead(200, { 'content-type': 'text/html' });
    res.end(
        '<html><head></head>' +
        '<body>' +
        '<div style="height: 100vh;width: 100vw;display: flex;justify-content: center;align-items: center">' +
        '<form action="/upload" enctype="multipart/form-data" method="post">' +
        '<input type="text" name="title" placeholder="File Title">' +
        '<input type="file" name="upload" multiple="multiple" size= /></br>' +
        '<input type="submit" value="Upload" style=";margin:10px;-moz-box-shadow: 1px 1px 6px 2px #9fb4f2;	-webkit-box-shadow: 1px 1px 6px 2px #9fb4f2;	box-shadow: 1px 1px 6px 2px #9fb4f2;	background-color:#7892c2;	-moz-border-radius:10px;	-webkit-border-radius:10px;	border-radius:10px;	border:2px solid #4e6096;	display:inline-block;	cursor:pointer;	color:#ffffff;	font-family:Arial;	font-size:19px;	padding:7px 76px;	text-decoration:none;	text-shadow:0px 1px 0px #283966;">' +
        '</form>' +
        '</div></body>' +
        '</html>'
    );
}).listen(8080);

