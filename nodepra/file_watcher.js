const fs = require('fs')
fs.watch('const.js', ()=>console.log('File Change'))
console.log("watching const.js")
