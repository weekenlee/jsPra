const fs = require('fs')
fs.readFile('const.js', (err, data) => {
    if(err) {
        throw err
    }
    console.log(data.toString());
})
console.log("read")
