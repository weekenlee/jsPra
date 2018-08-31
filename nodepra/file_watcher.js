const fs = require('fs')
var filename = process.argv[2]
if (filename == undefined || filename == ""){
    filename = 'const.js'
}
fs.watch(filename, () => console.log('File Change'));
console.log("watching " + filename);
