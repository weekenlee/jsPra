const fs = require('fs')
const net= require('net')

const filename = process.argv[2]

net.createServer(connection => {
    console.log('Subscriber connected.')
    connection.write(`Now watching "${filename}"for changes ...\n`)
    const watcher = fs.watch(filename, ()=>{
        connection.write( `File Changed : ${new Date()}\n `)
    })
    connection.on('close', ()=> {
        console.log('subscriber disconnected')
        watcher.close()
    })
}).listen(60300, ()=>{
    console.log('listening for subscribers...')
})
