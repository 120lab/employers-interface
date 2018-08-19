const dl = require('./data-layer-sql');

const customerKey = 1, fileName = 'file name';

dl.saveInputFile( customerKey, fileName, function(err, inputFileKey){
    if (err) {
        console.log(err);
        
    }
    else {
        console.log(inputFileKey);
        dl.saveInputFileData(inputFileKey, function(err, data){
            if (err) {
                console.log(err);
                
            }
            else {
                console.log(data);
            }   
        });
    }    

    return;
});