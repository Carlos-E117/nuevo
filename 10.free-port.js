const net = require('node:net')

function findAvailblePort(desiredPort){
    return new Promise((resolve,reject)=>{
        const server = net.createServer()

        server.listen(desiredPort,() =>{
            const {port} = server.address()
            server.close(() =>{
                resolve(port)
            })
        })

        server.on('error',(err)=>{
            if(err.code === 'EADDRINUSE'){
                findAvailblePort(0).then(port=>resolve(port))
            }else{
                reject(err)
            }
        })
    })


}
module.exports = {findAvailblePort}