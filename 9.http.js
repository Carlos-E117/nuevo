const http = require('node:http')
const {findAvaiblePort} = require('./9.fr') 

const server = http.createServer((req,res) => {
    console.log('request recived')
    res.end('Hola  Mundo')
})

server.listen(0,()=>{
    console.log(`server listening on port http://localhost:${server.address().port}`)
})

