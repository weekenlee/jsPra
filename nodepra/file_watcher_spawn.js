const fs = require('fs');
const spawn = require('child_process').spawn;
var filename = process.argv[2]
if (filename == undefined || filename == ""){
    filename = 'const.js'
}

fs.watch(filename, () => {
    console.log('File Change')
    const ls = spawn('ls', ['-l','-h',filename]);
    ls.stdout.pipe(process.stdout);
});

console.log("watching " + filename);
