const app = require('../app-fwrk/app');
const sql = require('mssql');

const config = {
    user: app.db_user,
    password: app.db_password,
    server: app.db_server,
    database: app.db_database,

    options: {
        encrypt: true // Use this if you're on Windows Azure
    }
}

app.logger.info(config);

process.on('unhandledRejection', (reason, promise) => {
    app.logger.info('Unhandled Rejection at:', reason.stack || reason)
    // Recommended: send the information to sentry.io
    // or whatever crash reporting service you use
})

/*
    Business methods
*/
var spExecuteCommandSpecific = function (procedureName, inParam, outputParam) {

    return new Promise((resolve, reject) => {

       app.logger.info("mssql exec " + procedureName + " params " + JSON.stringify(inParam));

        const pool = new sql.ConnectionPool(config, err => {
            //console.dir(pool)

            const request = pool.request()
            // Stored procedure
            //request.input('CustomerKey', sql.Int, inParam['CustomerKey']);
            request.input('FileName', sql.NVarChar(500), inParam['FileName']);
            request.input('FileStamp', sql.NVarChar(500), inParam['FileStamp']);
            request.input('KOD_MEZAHE_KUPA_H_P', sql.NVarChar(500), inParam['KOD-MEZAHE-KUPA-H-P']);
            request.input('SUG_MAFKID', sql.NVarChar(500), inParam['SUG-MAFKID']);
            request.input('SUG_MEZAHE_MAASIK', sql.NVarChar(500), inParam['SUG-MEZAHE-MAASIK']);
            request.input('MISPAR_ZIHUY_MAASIK', sql.NVarChar(500), inParam['MISPAR-ZIHUY-MAASIK']);
            request.input('SCHUM_HAFKADA_KOLEL', sql.NVarChar(500), inParam['SCHUM-HAFKADA-KOLEL']);
            request.input('SHEM_MAASIK', sql.NVarChar(500), inParam['SHEM-MAASIK']);
            request.input('SUG_PEULA', sql.NVarChar(500), inParam['SUG-PEULA']);
            request.input('KOD_EMTZAI_TASHLUM', sql.NVarChar(500), inParam['KOD-EMTZAI-TASHLUM']);
            request.input('SACH_HAFKADA_KUPA_H_P', sql.NVarChar(500), inParam['SACH-HAFKADA-KUPA-H-P']);
            request.input('TAARICH_ERECH_HAFKADA_LEKUPA', sql.NVarChar(500), inParam['TAARICH-ERECH-HAFKADA-LEKUPA']);
            request.input('MISPAR_ASMACHTA_LEAHAVARAT_KSAFIM', sql.NVarChar(500), inParam['MISPAR-ASMACHTA-LEAHAVARAT-KSAFIM']);
            request.input('MISPAR_ZIHUI', sql.NVarChar(500), inParam['MISPAR-ZIHUI']);
            request.input('MISPAR_BANK_MAASIK', sql.NVarChar(500), inParam['MISPAR-BANK-MAASIK']);
            request.input('MISPAR_SNIF_MAASIK', sql.NVarChar(500), inParam['MISPAR-SNIF-MAASIK']);
            request.input('MISPAR_CHESHBON_MAASIK', sql.NVarChar(500), inParam['MISPAR-CHESHBON-MAASIK']);
            request.input('SUG_KARTIS_MAASIK', sql.NVarChar(500), inParam['SUG-KARTIS-MAASIK']);
            request.input('SUG_CHESHBON_MAASIK', sql.NVarChar(500), inParam['SUG-CHESHBON-MAASIK']);
            request.input('SUG_CHESHBON_KOLET_TASHLUM', sql.NVarChar(500), inParam['SUG-CHESHBON-KOLET-TASHLUM']);
            request.input('MISPAR_BANK_KOLET', sql.NVarChar(500), inParam['MISPAR-BANK-KOLET']);
            request.input('MISPAR_SNIF_KOLET', sql.NVarChar(500), inParam['MISPAR-SNIF-KOLET']);
            request.input('MISPAR_CHESHBON_KOLET', sql.NVarChar(500), inParam['MISPAR-CHESHBON-KOLET']);
            request.input('MISPAR_ZIHUI_KODEM', sql.NVarChar(500), inParam['MISPAR-ZIHUI-KODEM']);
            request.input('MISPAR_MISLAKA_KODEM', sql.NVarChar(500), inParam['MISPAR-MISLAKA-KODEM']);
            request.input('SHEM_KOVETZ_SHEL_MISMACH_BERAMAT_EIRUA_VEBERAMAT_LAKOACH', sql.NVarChar(500), inParam['SHEM-KOVETZ-SHEL-MISMACH-BERAMAT-EIRUA-VEBERAMAT-LAKOACH']);
            request.input('SUG_MISMACH', sql.NVarChar(500), inParam['SUG-MISMACH']);
            request.input('SUG_KUPA', sql.NVarChar(500), inParam['SUG-KUPA']);
            request.input('SUG_MEZAHE_OVED', sql.NVarChar(500), inParam['SUG-MEZAHE-OVED']);
            request.input('MISPAR_MEZAHE', sql.NVarChar(500), inParam['MISPAR-MEZAHE']);
            request.input('SHEM_PRATI', sql.NVarChar(500), inParam['SHEM-PRATI']);
            request.input('SHEM_MISHPACHA', sql.NVarChar(500), inParam['SHEM-MISHPACHA']);
            request.input('CHODESH_MASKORET', sql.NVarChar(500), inParam['CHODESH-MASKORET']);
            request.input('MAHAMAD_HAFKADA_BEKUPA', sql.NVarChar(500), inParam['MAHAMAD-HAFKADA-BEKUPA']);
            request.input('SUG_TAKBUL', sql.NVarChar(500), inParam['SUG-TAKBUL']);
            request.input('SACHAR_MEDUVACH', sql.NVarChar(500), inParam['SACHAR-MEDUVACH']);
            request.input('STATUS_OVED_BECHODESH_MASKORET', sql.NVarChar(500), inParam['STATUS-OVED-BECHODESH-MASKORET']);
            request.input('TAARICH_TCHILAT_STATUS', sql.NVarChar(500), inParam['TAARICH-TCHILAT-STATUS']);
            request.input('CHELKIUT_MISRA', sql.NVarChar(500), inParam['CHELKIUT-MISRA']);
            request.input('YEMEI_AVODA_BECHODESH', sql.NVarChar(500), inParam['YEMEI-AVODA-BECHODESH']);
            request.input('SUG_HAFRASHA_A', sql.NVarChar(500), inParam['SUG-HAFRASHA-A']);
            request.input('SHIUR_HAFRASHA_A', sql.NVarChar(500), inParam['SHIUR-HAFRASHA-A']);
            request.input('SCHUM_HAFRASHA_A', sql.NVarChar(500), inParam['SCHUM-HAFRASHA-A']);
            request.input('SACH_TASHLUMIM_PTURIM_A', sql.NVarChar(500), inParam['SACH-TASHLUMIM-PTURIM-A']);
            request.input('MISPAR_MEZAHE_RESHUMA_A', sql.NVarChar(500), inParam['MISPAR-MEZAHE-RESHUMA-A']);
            request.input('SUG_HAFRASHA_B', sql.NVarChar(500), inParam['SUG-HAFRASHA-B']);
            request.input('SHIUR_HAFRASHA_B', sql.NVarChar(500), inParam['SHIUR-HAFRASHA-B']);
            request.input('SCHUM_HAFRASHA_B', sql.NVarChar(500), inParam['SCHUM-HAFRASHA-B']);
            request.input('SACH_TASHLUMIM_PTURIM_B', sql.NVarChar(500), inParam['SACH-TASHLUMIM-PTURIM-B']);
            request.input('MISPAR_MEZAHE_RESHUMA_B', sql.NVarChar(500), inParam['MISPAR-MEZAHE-RESHUMA-B']);
            request.input('SUG_HAFRASHA_C', sql.NVarChar(500), inParam['SUG-HAFRASHA-C']);
            request.input('SHIUR_HAFRASHA_C', sql.NVarChar(500), inParam['SHIUR-HAFRASHA-C']);
            request.input('SCHUM_HAFRASHA_C', sql.NVarChar(500), inParam['SCHUM-HAFRASHA-C']);
            request.input('SACH_TASHLUMIM_PTURIM_C', sql.NVarChar(500), inParam['SACH-TASHLUMIM-PTURIM-C']);
            request.input('MISPAR_MEZAHE_RESHUMA_C', sql.NVarChar(500), inParam['MISPAR-MEZAHE-RESHUMA-C']);

            if (outputParam != null) {
                request.output(outputParam, sql.NVarChar(50))
            }

            request.execute(procedureName, (err, result) => {
                if (err != null) {
                    app.logger.info(err);
                    reject();
                }
                else {
                    app.logger.info(result.output);
                    const output = outputParam != null ? result.output : 0;
                    resolve();
                }
            });
        })

        // sql.on('error', err => {
        //     app.logger.info(err);
        //     reject();
        //     sql.close();
        // })
    });
}

var spCreateEmployersInterfaces = function (procedureName, inParam) {

    return new Promise((resolve, reject) => {

       app.logger.info("mssql exec " + procedureName + " params " + JSON.stringify(inParam));

        const pool = new sql.ConnectionPool(config, err => {
            
            
            const request = pool.request()
            // Stored procedure

            //request.input('InputFileKey', sql.Int, inParam['InputFileKey']);        

            request.execute(procedureName, (err, result) => {
                if (err != null) {
                    app.logger.info(err);                
                    reject();
                }
                else {
                    app.logger.info(JSON.stringify(result));                    
                    resolve(result);
                }
            });
        })

        // sql.on('error', err => {
        //     app.logger.info(err);
        //     reject();
        //     sql.close();
        // })
    });
}

app.post('/createemployerinterfaces', function (req, res) {

    var data = req.body;
    app.logger.info("call : createemployerinterfaces "+ JSON.stringify(req.body) );

    spCreateEmployersInterfaces('sp_create_employers_interfaces', data)
        .then(item => {
            app.logger.info(JSON.stringify(data));
            //res.status(200).send('<?xml version="1.0" encoding="UTF-8"?>' + item.recordsets[0][0].FileXml);
            res.status(200).send(item.recordsets[0][0]);
        })
        .catch(err => {
            res.status(400).send("Unable to retrieve from database");
        });
})

app.post('/save', function (req, res) {

    var data = req.body;
    app.logger.info("post save request"+ JSON.stringify(req.body) );

    spExecuteCommandSpecific('sp_insert_InputFileData', data, null)
        .then(item => {
            app.logger.info(JSON.stringify(data));
            res.status(200).send("data saved with " + JSON.stringify(data));
        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        });
})

var port = process.env.PORT || 8082;

var server = app.listen(port, function () {
    var host = server.address().address
    var port = server.address().port

    app.logger.info("Example app listening at http://%s:%s", host, port)
})



