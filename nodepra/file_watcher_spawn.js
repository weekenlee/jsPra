const fs = require('fs');
const spawn = require('child_process').spawn;
var filename = process.argv[2]
if (filename == undefined || filename == ""){
    filename = 'const.js'
}

fs.watch(filename, () => {
    console.log('File Change')
    const ls = spawn('ls', ['-l','-h',filename]);
    //ls.stdout.pipe(process.stdout);
    output='';
    ls.stdout.on('data', chunk => output += chunk);
    ls.on('close', ()=>{
        const parts = output.split(/\s+/)
        console.log([parts[0], parts[4], parts[8]])
    })
});

console.log("watching " + filename);
