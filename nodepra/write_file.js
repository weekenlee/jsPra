const fs = require('fs')
fs.write('target.txt', 'hello world', (err) => {
    if (err) {
        throw err;
    }
    console.log('file saved');
});
