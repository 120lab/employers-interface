var csv = require('csv-parser')
var fs = require('fs')
var headersValid = true;
var rowNumber = 0;
var validations = [];
var validation = {
    action: '',
    rowNumber: '',
    colName: '',
    err:''
};

fs.createReadStream('C:\\Users\\p0011111\\Desktop\\INOVA\\employers-interface\\analysis\\sample file.csv')
  .pipe(csv())

  .on('headers', function (headerList) {
    
    //validations.push(headerList);
    
    //validations.push({action : 'start read headers'});
    validation.action = 'Read headers';

    if(headerList[0] != 'KOD-MEZAHE-KUPA-H-P')
    {   
        validation.colName = headerList[0];
        validation.rowNumber = 0;
        validation.err = headerList[0] + ' does not exist';
        validations.push(validation);
    }      
    if(headerList[1] != 'SUG-MAFKID')
    {   
        validation.colName = headerList[1];
        validation.rowNumber = 1;
        validation.err = headerList[1] + ' does not exist';
        validations.push(validation);
    }       
    if(headerList[2] != 'SUG-MEZAHE-MAASIK')
    {   
        validation.colName = headerList[2];
        validation.rowNumber = 2;
        validation.err = headerList[2] + ' does not exist';
        validations.push(validation);
    }         
    if(headerList[3] != 'MISPAR-ZIHUY-MAASIK')
    {   
        validation.colName = headerList[3];
        validation.rowNumber = 3;
        validation.err = headerList[3] + ' does not exist';
        validations.push(validation);
    } 
    if(headerList[4] != 'SCHUM-HAFKADA-KOLEL')
    {   
        validation.colName = headerList[4];
        validation.rowNumber = 4;
        validation.err = headerList[4] + ' does not exist';
        validations.push(validation);
    }   
    if(headerList[5] != 'SHEM-MAASIK')
    {   
        validation.colName = headerList[5];
        validation.rowNumber = 5;
        validation.err = headerList[5] + ' does not exist';
        validations.push(validation);
    }  
    if(headerList[6] != 'SUG-PEULA')
    {   
        validation.colName = headerList[6];
        validation.rowNumber = 6;
        validation.err = headerList[6] + ' does not exist';
        validations.push(validation);
    }  
    if(headerList[7] != 'KOD-EMTZAI-TASHLUM')
    {   
        validation.colName = headerList[7];
        validation.rowNumber = 7;
        validation.err = headerList[7] + ' does not exist';
        validations.push(validation);
    } 
    if(headerList[8] != 'SACH-HAFKADA-KUPA-H-P')
    {   
        validation.colName = headerList[8];
        validation.rowNumber = 8;
        validation.err = headerList[8] + ' does not exist';
        validations.push(validation);
    }   
    if(headerList[9] != 'TAARICH-ERECH-HAFKADA-LEKUPA')
    {   
        validation.colName = headerList[9];
        validation.rowNumber = 9;
        validation.err = headerList[9] + ' does not exist';
        validations.push(validation);
    }   
    if(headerList[10] != 'MISPAR-ASMACHTA-LEAHAVARAT-KSAFIM')
    {   
        validation.colName = headerList[10];
        validation.rowNumber =10;
        validation.err = headerList[10] + ' does not exist';
        validations.push(validation);
    }  
    if(headerList[11] != 'MISPAR-ZIHUI')
    {   
        validation.colName = headerList[11];
        validation.rowNumber =11;
        validation.err = headerList[11] + ' does not exist';
        validations.push(validation);
    }   
    if(headerList[12] != 'MISPAR-BANK-MAASIK')
    {   
        validation.colName = headerList[12];
        validation.rowNumber =12;
        validation.err = headerList[12] + ' does not exist';
        validations.push(validation);
    }  
    if(headerList[13] != 'MISPAR-SNIF-MAASIK')
    {   
        validation.colName = headerList[13];
        validation.rowNumber =13;
        validation.err = headerList[13] + ' does not exist';
        validations.push(validation);
    }  
    if(headerList[14] != 'MISPAR-CHESHBON-MAASIK')
    {   
        validation.colName = headerList[14];
        validation.rowNumber =14;
        validation.err = headerList[14] + ' does not exist';
        validations.push(validation);
    }  
    if(headerList[15] != 'SUG-KARTIS-MAASIK')
    {   
        validation.colName = headerList[15];
        validation.rowNumber =15;
        validation.err = headerList[15] + ' does not exist';
        validations.push(validation);
    }   
    if(headerList[16] != 'SUG-CHESHBON-MAASIK')
    {   
        validation.colName = headerList[16];
        validation.rowNumber =16;
        validation.err = headerList[16] + ' does not exist';
        validations.push(validation);
    }   
    if(headerList[17] != 'SUG-CHESHBON-KOLET-TASHLUM')
    {   
        validation.colName = headerList[17];
        validation.rowNumber =17;
        validation.err = headerList[17] + ' does not exist';
        validations.push(validation);
    }  
    if(headerList[18] != 'MISPAR-BANK-KOLET')
    {   
        validation.colName = headerList[18];
        validation.rowNumber =18;
        validation.err = headerList[18] + ' does not exist';
        validations.push(validation);
    }  
    if(headerList[19] != 'MISPAR-SNIF-KOLET')
    {   
        validation.colName = headerList[19];
        validation.rowNumber =19;
        validation.err = headerList[19] + ' does not exist';
        validations.push(validation);
    }  
    if(headerList[20] != 'MISPAR-CHESHBON-KOLET')
    {   
        validation.colName = headerList[20];
        validation.rowNumber =20;
        validation.err = headerList[20] + ' does not exist';
        validations.push(validation);
    }  
    if(headerList[21] != 'MISPAR-ZIHUI-KODEM')
    {   
        validation.colName = headerList[21];
        validation.rowNumber =21;
        validation.err = headerList[21] + ' does not exist';
        validations.push(validation);
    }   
    if(headerList[22] != 'MISPAR-MISLAKA-KODEM')
    {   
        validation.colName = headerList[22];
        validation.rowNumber =22;
        validation.err = headerList[22] + ' does not exist';
        validations.push(validation);
    }    
    if(headerList[23] != 'SHEM-KOVETZ-SHEL-MISMACH-BERAMAT-EIRUA-VEBERAMAT-LAKOACH')
    {   
        validation.colName = headerList[23];
        validation.rowNumber =23;
        validation.err = headerList[23] + ' does not exist';
        validations.push(validation);
    }   
    if(headerList[24] != 'SUG-MISMACH')
    {   
        validation.colName = headerList[24];
        validation.rowNumber =24;
        validation.err = headerList[24] + ' does not exist';
        validations.push(validation);
    }   
    if(headerList[25] != 'SUG-KUPA')
    {   
        validation.colName = headerList[25];
        validation.rowNumber =25;
        validation.err = headerList[25] + ' does not exist';
        validations.push(validation);
    }  
    if(headerList[26] != 'SUG-MEZAHE-OVED')
    {   
        validation.colName = headerList[26];
        validation.rowNumber =26;
        validation.err = headerList[26] + ' does not exist';
        validations.push(validation);
    }  
    if(headerList[27] != 'MISPAR-MEZAHE')
    {   
        validation.colName = headerList[27];
        validation.rowNumber =27;
        validation.err = headerList[27] + ' does not exist';
        validations.push(validation);
    }  
    if(headerList[28] != 'SHEM-PRATI')
    {   
        validation.colName = headerList[28];
        validation.rowNumber =28;
        validation.err = headerList[28] + ' does not exist';
        validations.push(validation);
    } 
    if(headerList[29] != 'SHEM-MISHPACHA')
    {   
        validation.colName = headerList[29];
        validation.rowNumber =29;
        validation.err = headerList[29] + ' does not exist';
        validations.push(validation);
    } 
    if(headerList[30] != 'CHODESH-MASKORET')
    {   
        validation.colName = headerList[30];
        validation.rowNumber =30;
        validation.err = headerList[30] + ' does not exist';
        validations.push(validation);
    }  
    if(headerList[31] != 'MAHAMAD-HAFKADA-BEKUPA')
    {   
        validation.colName = headerList[31];
        validation.rowNumber =31;
        validation.err = headerList[31] + ' does not exist';
        validations.push(validation);
    }
    if(headerList[32] != 'SUG-TAKBUL')
    {   
        validation.colName = headerList[32];
        validation.rowNumber =32;
        validation.err = headerList[32] + ' does not exist';
        validations.push(validation);
    } 
    if(headerList[33] != 'SACHAR-MEDUVACH')
    {   
        validation.colName = headerList[33];
        validation.rowNumber =33;
        validation.err = headerList[33] + ' does not exist';
        validations.push(validation);
    }   
    if(headerList[34] != 'STATUS-OVED-BECHODESH-MASKORET')
    {   
        validation.colName = headerList[34];
        validation.rowNumber =34;
        validation.err = headerList[34] + ' does not exist';
        validations.push(validation);
    }   
    if(headerList[35] != 'TAARICH-TCHILAT-STATUS')
    {   
        validation.colName = headerList[35];
        validation.rowNumber =35;
        validation.err = headerList[35] + ' does not exist';
        validations.push(validation);
    } 
    if(headerList[36] != 'CHELKIUT-MISRA')
    {   
        validation.colName = headerList[36];
        validation.rowNumber =36;
        validation.err = headerList[36] + ' does not exist';
        validations.push(validation);
    }  
    if(headerList[37] != 'YEMEI-AVODA-BECHODESH')
    {   
        validation.colName = headerList[37];
        validation.rowNumber =37;
        validation.err = headerList[37] + ' does not exist';
        validations.push(validation);
    }  
    if(headerList[38] != 'SUG-HAFRASHA-A')
    {   
        validation.colName = headerList[38];
        validation.rowNumber =38;
        validation.err = headerList[38] + ' does not exist';
        validations.push(validation);
    }   
    if(headerList[39] != 'SHIUR-HAFRASHA-A')
    {   
        validation.colName = headerList[39];
        validation.rowNumber =39;
        validation.err = headerList[39] + ' does not exist';
        validations.push(validation);
    }  
    if(headerList[40] != 'SCHUM-HAFRASHA-A')
    {   
        validation.colName = headerList[40];
        validation.rowNumber =40;
        validation.err = headerList[40] + ' does not exist';
        validations.push(validation);
    }  
    if(headerList[41] != 'SACH-TASHLUMIM-PTURIM-A')
    {   
        validation.colName = headerList[41];
        validation.rowNumber =41;
        validation.err = headerList[41] + ' does not exist';
        validations.push(validation);
    }  
    if(headerList[42] != 'MISPAR-MEZAHE-RESHUMA-A')
    {   
        validation.colName = headerList[42];
        validation.rowNumber =42;
        validation.err = headerList[42] + ' does not exist';
        validations.push(validation);
    }   
    if(headerList[43] != 'SUG-HAFRASHA-B')
    {   
        validation.colName = headerList[43];
        validation.rowNumber =43;
        validation.err = headerList[43] + ' does not exist';
        validations.push(validation);
    }   
    if(headerList[44] != 'SHIUR-HAFRASHA-B')
    {   
        validation.colName = headerList[44];
        validation.rowNumber =44;
        validation.err = headerList[44] + ' does not exist';
        validations.push(validation);
    }   
    if(headerList[45] != 'SCHUM-HAFRASHA-B')
    {   
        validation.colName = headerList[45];
        validation.rowNumber =45;
        validation.err = headerList[45] + ' does not exist';
        validations.push(validation);
    }  
    if(headerList[46] != 'SACH-TASHLUMIM-PTURIM-B')
    {   
        validation.colName = headerList[46];
        validation.rowNumber =46;
        validation.err = headerList[46] + ' does not exist';
        validations.push(validation);
    }   
    if(headerList[47] != 'MISPAR-MEZAHE-RESHUMA-B')
    {   
        validation.colName = headerList[47];
        validation.rowNumber =47;
        validation.err = headerList[47] + ' does not exist';
        validations.push(validation);
    }      
    if(headerList[48] != 'SUG-HAFRASHA-C')
    {   
        validation.colName = headerList[48];
        validation.rowNumber =48;
        validation.err = headerList[48] + ' does not exist';
        validations.push(validation);
    }   
    if(headerList[49] != 'SHIUR-HAFRASHA-C')
    {   
        validation.colName = headerList[49];
        validation.rowNumber =49;
        validation.err = headerList[49] + ' does not exist';
        validations.push(validation);
    }   
    if(headerList[50] != 'SCHUM-HAFRASHA-C')
    {   
        validation.colName = headerList[50];
        validation.rowNumber =50;
        validation.err = headerList[50] + ' does not exist';
        validations.push(validation);
    }    
    if(headerList[51] != 'SACH-TASHLUMIM-PTURIM-C')
    {   
        validation.colName = headerList[51];
        validation.rowNumber =51;
        validation.err = headerList[51] + ' does not exist';
        validations.push(validation);
    }     
    if(headerList[52] != 'MISPAR-MEZAHE-RESHUMA-C')
    {   
        validation.colName = headerList[52];
        validation.rowNumber =52;
        validation.err = headerList[52] + ' does not exist';
        validations.push(validation);
    }   

    if(validations.length >0 ) 
        headersValid = false;
  })
  .on('data', function (data) {
    if(!headersValid){
        validations.push({action: 'File headers Invalid'});
        return;    
    }
    else if (rowNumber == 0)
    {
        validations.push({action : 'File headers Valid'});
        validations.push({action : 'Read data file'});
    }

    validation.action = 'Check row data';
    rowNumber ++;

    if(data['KOD-MEZAHE-KUPA-H-P'].length > 30)
    {   
        validation.colName = 'KOD-MEZAHE-KUPA-H-P';
        validation.rowNumber = rowNumber;
        validation.err = 'KOD-MEZAHE-KUPA-H-P' + ' length > 30';
        validations.push(validation);
    }   
        
  })
  .on('end', function () {
    console.log(validations);
  
})