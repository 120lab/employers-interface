const validtion = require('./validation'),

var headerValidations = function(validations){
    if (headerList[0] != 'KOD-MEZAHE-KUPA-H-P') {
        validation.validationData.colName = 'KOD-MEZAHE-KUPA-H-P';
        validation.validationData.rowNumber = 0;
        validation.validationData.err = 'KOD-MEZAHE-KUPA-H-P' + ' does not exist';
        validations.push(validation);
    }
    if (headerList[1] != 'SUG-MAFKID') {
        validation.validationData.colName = 'SUG-MAFKID';
        validation.validationData.rowNumber = 1;
        validation.validationData.err = 'SUG-MAFKID' + ' does not exist';
        validations.push(validation);
    }
    if (headerList[2] != 'SUG-MEZAHE-MAASIK') {
        validation.validationData.colName = 'SUG-MEZAHE-MAASIK';
        validation.validationData.rowNumber = 2;
        validation.validationData.err = 'SUG-MEZAHE-MAASIK' + ' does not exist';
        validations.push(validation);
    }
    if (headerList[3] != 'MISPAR-ZIHUY-MAASIK') {
        validation.validationData.colName = headerList[3];
        validation.validationData.rowNumber = 3;
        validation.validationData.err = headerList[3] + ' does not exist';
        validations.push(validation);
    }
    if (headerList[4] != 'SCHUM-HAFKADA-KOLEL') {
        validation.validationData.colName = headerList[4];
        validation.validationData.rowNumber = 4;
        validation.validationData.err = headerList[4] + ' does not exist';
        validations.push(validation);
    }
    if (headerList[5] != 'SHEM-MAASIK') {
        validation.validationData.colName = headerList[5];
        validation.validationData.rowNumber = 5;
        validation.validationData.err = headerList[5] + ' does not exist';
        validations.push(validation);
    }
    if (headerList[6] != 'SUG-PEULA') {
        validation.validationData.colName = headerList[6];
        validation.validationData.rowNumber = 6;
        validation.validationData.err = headerList[6] + ' does not exist';
        validations.push(validation);
    }
    if (headerList[7] != 'KOD-EMTZAI-TASHLUM') {
        validation.validationData.colName = headerList[7];
        validation.validationData.rowNumber = 7;
        validation.validationData.err = headerList[7] + ' does not exist';
        validations.push(validation);
    }
    if (headerList[8] != 'SACH-HAFKADA-KUPA-H-P') {
        validation.validationData.colName = headerList[8];
        validation.validationData.rowNumber = 8;
        validation.validationData.err = headerList[8] + ' does not exist';
        validations.push(validation);
    }
    if (headerList[9] != 'TAARICH-ERECH-HAFKADA-LEKUPA') {
        validation.validationData.colName = headerList[9];
        validation.validationData.rowNumber = 9;
        validation.validationData.err = headerList[9] + ' does not exist';
        validations.push(validation);
    }
    if (headerList[10] != 'MISPAR-ASMACHTA-LEAHAVARAT-KSAFIM') {
        validation.validationData.colName = headerList[10];
        validation.validationData.rowNumber = 10;
        validation.validationData.err = headerList[10] + ' does not exist';
        validations.push(validation);
    }
    if (headerList[11] != 'MISPAR-ZIHUI') {
        validation.validationData.colName = headerList[11];
        validation.validationData.rowNumber = 11;
        validation.validationData.err = headerList[11] + ' does not exist';
        validations.push(validation);
    }
    if (headerList[12] != 'MISPAR-BANK-MAASIK') {
        validation.validationData.colName = headerList[12];
        validation.validationData.rowNumber = 12;
        validation.validationData.err = headerList[12] + ' does not exist';
        validations.push(validation);
    }
    if (headerList[13] != 'MISPAR-SNIF-MAASIK') {
        validation.validationData.colName = headerList[13];
        validation.validationData.rowNumber = 13;
        validation.validationData.err = headerList[13] + ' does not exist';
        validations.push(validation);
    }
    if (headerList[14] != 'MISPAR-CHESHBON-MAASIK') {
        validation.validationData.colName = headerList[14];
        validation.validationData.rowNumber = 14;
        validation.validationData.err = headerList[14] + ' does not exist';
        validations.push(validation);
    }
    if (headerList[15] != 'SUG-KARTIS-MAASIK') {
        validation.validationData.colName = headerList[15];
        validation.validationData.rowNumber = 15;
        validation.validationData.err = headerList[15] + ' does not exist';
        validations.push(validation);
    }
    if (headerList[16] != 'SUG-CHESHBON-MAASIK') {
        validation.validationData.colName = headerList[16];
        validation.validationData.rowNumber = 16;
        validation.validationData.err = headerList[16] + ' does not exist';
        validations.push(validation);
    }
    if (headerList[17] != 'SUG-CHESHBON-KOLET-TASHLUM') {
        validation.validationData.colName = headerList[17];
        validation.validationData.rowNumber = 17;
        validation.validationData.err = headerList[17] + ' does not exist';
        validations.push(validation);
    }
    if (headerList[18] != 'MISPAR-BANK-KOLET') {
        validation.validationData.colName = headerList[18];
        validation.validationData.rowNumber = 18;
        validation.validationData.err = headerList[18] + ' does not exist';
        validations.push(validation);
    }
    if (headerList[19] != 'MISPAR-SNIF-KOLET') {
        validation.validationData.colName = headerList[19];
        validation.validationData.rowNumber = 19;
        validation.validationData.err = headerList[19] + ' does not exist';
        validations.push(validation);
    }
    if (headerList[20] != 'MISPAR-CHESHBON-KOLET') {
        validation.validationData.colName = headerList[20];
        validation.validationData.rowNumber = 20;
        validation.validationData.err = headerList[20] + ' does not exist';
        validations.push(validation);
    }
    if (headerList[21] != 'MISPAR-ZIHUI-KODEM') {
        validation.validationData.colName = headerList[21];
        validation.validationData.rowNumber = 21;
        validation.validationData.err = headerList[21] + ' does not exist';
        validations.push(validation);
    }
    if (headerList[22] != 'MISPAR-MISLAKA-KODEM') {
        validation.validationData.colName = headerList[22];
        validation.validationData.rowNumber = 22;
        validation.validationData.err = headerList[22] + ' does not exist';
        validations.push(validation);
    }
    if (headerList[23] != 'SHEM-KOVETZ-SHEL-MISMACH-BERAMAT-EIRUA-VEBERAMAT-LAKOACH') {
        validation.validationData.colName = headerList[23];
        validation.validationData.rowNumber = 23;
        validation.validationData.err = headerList[23] + ' does not exist';
        validations.push(validation);
    }
    if (headerList[24] != 'SUG-MISMACH') {
        validation.validationData.colName = headerList[24];
        validation.validationData.rowNumber = 24;
        validation.validationData.err = headerList[24] + ' does not exist';
        validations.push(validation);
    }
    if (headerList[25] != 'SUG-KUPA') {
        validation.validationData.colName = headerList[25];
        validation.validationData.rowNumber = 25;
        validation.validationData.err = headerList[25] + ' does not exist';
        validations.push(validation);
    }
    if (headerList[26] != 'SUG-MEZAHE-OVED') {
        validation.validationData.colName = headerList[26];
        validation.validationData.rowNumber = 26;
        validation.validationData.err = headerList[26] + ' does not exist';
        validations.push(validation);
    }
    if (headerList[27] != 'MISPAR-MEZAHE') {
        validation.validationData.colName = headerList[27];
        validation.validationData.rowNumber = 27;
        validation.validationData.err = headerList[27] + ' does not exist';
        validations.push(validation);
    }
    if (headerList[28] != 'SHEM-PRATI') {
        validation.validationData.colName = headerList[28];
        validation.validationData.rowNumber = 28;
        validation.validationData.err = headerList[28] + ' does not exist';
        validations.push(validation);
    }
    if (headerList[29] != 'SHEM-MISHPACHA') {
        validation.validationData.colName = headerList[29];
        validation.validationData.rowNumber = 29;
        validation.validationData.err = headerList[29] + ' does not exist';
        validations.push(validation);
    }
    if (headerList[30] != 'CHODESH-MASKORET') {
        validation.validationData.colName = headerList[30];
        validation.validationData.rowNumber = 30;
        validation.validationData.err = headerList[30] + ' does not exist';
        validations.push(validation);
    }
    if (headerList[31] != 'MAHAMAD-HAFKADA-BEKUPA') {
        validation.validationData.colName = headerList[31];
        validation.validationData.rowNumber = 31;
        validation.validationData.err = headerList[31] + ' does not exist';
        validations.push(validation);
    }
    if (headerList[32] != 'SUG-TAKBUL') {
        validation.validationData.colName = headerList[32];
        validation.validationData.rowNumber = 32;
        validation.validationData.err = headerList[32] + ' does not exist';
        validations.push(validation);
    }
    if (headerList[33] != 'SACHAR-MEDUVACH') {
        validation.validationData.colName = headerList[33];
        validation.validationData.rowNumber = 33;
        validation.validationData.err = headerList[33] + ' does not exist';
        validations.push(validation);
    }
    if (headerList[34] != 'STATUS-OVED-BECHODESH-MASKORET') {
        validation.validationData.colName = headerList[34];
        validation.validationData.rowNumber = 34;
        validation.validationData.err = headerList[34] + ' does not exist';
        validations.push(validation);
    }
    if (headerList[35] != 'TAARICH-TCHILAT-STATUS') {
        validation.validationData.colName = headerList[35];
        validation.validationData.rowNumber = 35;
        validation.validationData.err = headerList[35] + ' does not exist';
        validations.push(validation);
    }
    if (headerList[36] != 'CHELKIUT-MISRA') {
        validation.validationData.colName = headerList[36];
        validation.validationData.rowNumber = 36;
        validation.validationData.err = headerList[36] + ' does not exist';
        validations.push(validation);
    }
    if (headerList[37] != 'YEMEI-AVODA-BECHODESH') {
        validation.validationData.colName = headerList[37];
        validation.validationData.rowNumber = 37;
        validation.validationData.err = headerList[37] + ' does not exist';
        validations.push(validation);
    }
    if (headerList[38] != 'SUG-HAFRASHA-A') {
        validation.validationData.colName = headerList[38];
        validation.validationData.rowNumber = 38;
        validation.validationData.err = headerList[38] + ' does not exist';
        validations.push(validation);
    }
    if (headerList[39] != 'SHIUR-HAFRASHA-A') {
        validation.validationData.colName = headerList[39];
        validation.validationData.rowNumber = 39;
        validation.validationData.err = headerList[39] + ' does not exist';
        validations.push(validation);
    }
    if (headerList[40] != 'SCHUM-HAFRASHA-A') {
        validation.validationData.colName = headerList[40];
        validation.validationData.rowNumber = 40;
        validation.validationData.err = headerList[40] + ' does not exist';
        validations.push(validation);
    }
    if (headerList[41] != 'SACH-TASHLUMIM-PTURIM-A') {
        validation.validationData.colName = headerList[41];
        validation.validationData.rowNumber = 41;
        validation.validationData.err = headerList[41] + ' does not exist';
        validations.push(validation);
    }
    if (headerList[42] != 'MISPAR-MEZAHE-RESHUMA-A') {
        validation.validationData.colName = headerList[42];
        validation.validationData.rowNumber = 42;
        validation.validationData.err = headerList[42] + ' does not exist';
        validations.push(validation);
    }
    if (headerList[43] != 'SUG-HAFRASHA-B') {
        validation.validationData.colName = headerList[43];
        validation.validationData.rowNumber = 43;
        validation.validationData.err = headerList[43] + ' does not exist';
        validations.push(validation);
    }
    if (headerList[44] != 'SHIUR-HAFRASHA-B') {
        validation.validationData.colName = headerList[44];
        validation.validationData.rowNumber = 44;
        validation.validationData.err = headerList[44] + ' does not exist';
        validations.push(validation);
    }
    if (headerList[45] != 'SCHUM-HAFRASHA-B') {
        validation.validationData.colName = headerList[45];
        validation.validationData.rowNumber = 45;
        validation.validationData.err = headerList[45] + ' does not exist';
        validations.push(validation);
    }
    if (headerList[46] != 'SACH-TASHLUMIM-PTURIM-B') {
        validation.validationData.colName = headerList[46];
        validation.validationData.rowNumber = 46;
        validation.validationData.err = headerList[46] + ' does not exist';
        validations.push(validation);
    }
    if (headerList[47] != 'MISPAR-MEZAHE-RESHUMA-B') {
        validation.validationData.colName = headerList[47];
        validation.validationData.rowNumber = 47;
        validation.validationData.err = headerList[47] + ' does not exist';
        validations.push(validation);
    }
    if (headerList[48] != 'SUG-HAFRASHA-C') {
        validation.validationData.colName = headerList[48];
        validation.validationData.rowNumber = 48;
        validation.validationData.err = headerList[48] + ' does not exist';
        validations.push(validation);
    }
    if (headerList[49] != 'SHIUR-HAFRASHA-C') {
        validation.validationData.colName = headerList[49];
        validation.validationData.rowNumber = 49;
        validation.validationData.err = headerList[49] + ' does not exist';
        validations.push(validation);
    }
    if (headerList[50] != 'SCHUM-HAFRASHA-C') {
        validation.validationData.colName = headerList[50];
        validation.validationData.rowNumber = 50;
        validation.validationData.err = headerList[50] + ' does not exist';
        validations.push(validation);
    }
    if (headerList[51] != 'SACH-TASHLUMIM-PTURIM-C') {
        validation.validationData.colName = headerList[51];
        validation.validationData.rowNumber = 51;
        validation.validationData.err = headerList[51] + ' does not exist';
        validations.push(validation);
    }
    if (headerList[52] != 'MISPAR-MEZAHE-RESHUMA-C') {
        validation.validationData.colName = headerList[52];
        validation.validationData.rowNumber = 52;
        validation.validationData.err = headerList[52] + ' does not exist';
        validations.push(validation);
    }

  
};


module.exports.headerValidations = headerValidations;