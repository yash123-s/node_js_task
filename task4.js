const fs=require('fs')
console.log('start reading a file...')
fs.readFile('input.txt','utf-8', function(err,content){
    if(err){
        console.log('error happened during reading the file');
        return 
    }
    console.log(content);
})
console.log('end of the file');